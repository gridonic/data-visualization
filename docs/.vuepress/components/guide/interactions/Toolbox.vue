<template>
  <div class="chart-component">
    <Base
        v-model:width="width"
        :height="height"
        ref="wrapper"
        :margin="{
      top: 50,
      left: 50,
      right: 50,
      bottom: 50
    }"
    >
      <g ref="xAxisRef" :transform="`translate(0, ${height})`"></g>
      <g ref="yAxisRef" :transform="`translate(0, 0)`"></g>
      <g v-for="(serie, index) in series">
        <path
            fill="none"
            :stroke="`var(--c-chart-${index})`"
            stroke-width="1"
            :d="lineGenerator(serie)"
        ></path>
        <g
            v-if="mouseXPos !== null"
        >
          <circle
              :cx="xScale(serie[mouseXPos].x)"
              :cy="yScale(serie[mouseXPos].y)"
              :stroke="`var(--c-chart-${index})`"
              :fill="`var(--c-chart-${index})`"
              r="4"
          />
        </g>
      </g>
      <foreignObject
          class="tool-box"
          :x="toolBoxXPosition"
          :y="0"
          :width="toolBoxDimensions.width"
          :height="toolBoxDimensions.height"
          v-if="mouseXPos !== null"
          ref="$toolBox"
      >
        <div class="content">
          <p class="title">{{formatDate(series[0][mouseXPos].x)}}</p>
          <div
              class="item"
              :style="`--c-dot: var(--c-chart-${index});`"
              v-for="(serie, index) in series"
          >
            <span>{{ serie[mouseXPos].y }}</span>
          </div>
        </div>
      </foreignObject>
    </Base>
    <a class="repolink" :href="`${componentsRepoPath}/guide/interactions/Toolbox.vue`" target="_blank">see full code example on github</a>
  </div>
</template>

<style scoped>
.tool-box {
  background-color: rgba(255,255,255,0.85);
  opacity: 1;
  padding: 1rem;
  box-shadow: 0 0 10px 1px rgba(0,0,0,0.09);
  border-radius: 8px;
  overflow: visible;
}
.tool-box > .content {
  width: max-content;
}
.tool-box > .content > .title {
  margin: 0 0 0.2rem 0;
  font-weight: bold;
  font-size: 14px;
}
.tool-box > .content > .item {
  display: grid;
  grid-template-columns: max-content max-content;
  gap: 0.5rem;
  font-size: 12px;
}
.tool-box > .content > .item:before {
  content: "";
  align-self: center;
  width: 9px;
  height: 9px;
  background-color: var(--c-dot);
  border-radius: 100%;
}
</style>

<script setup>
import {computed, nextTick, ref, watch, watchEffect} from 'vue';
import {line, scaleLinear, max, pointer, Delaunay, axisBottom, axisLeft, select, scaleTime} from 'd3';
import Base from '@Base';

// import { useData } from 'vitepress'
// const { theme } = useData()
// const componentsRepoPath = theme.value.componentsRepoPath;

const width = ref(null);
const chartWidth = ref(null);
const height = ref(200);
const wrapper = ref(null);
const mouseXPos = ref(null);
watchEffect(() => {
  if (wrapper.value) {
    registerMouseMove();
  }
})

watch(width, () => {
  if (width.value) {
    chartWidth.value = width.value;
    nextTick(() => {
      createAxes();
    })
  }
})

const xAxisRef = ref(null);
const yAxisRef = ref(null);
function createAxes() {
  const xAxis = axisBottom(xScale.value);
  const yAxis = axisLeft(yScale.value);
  select(xAxisRef.value)
      .call(xAxis);
  select(yAxisRef.value)
      .call(yAxis);
}

const series = [
  [
    { x: new Date(2022, 0, 1), y: 0 },
    { x: new Date(2022, 1, 1), y: 2 },
    { x: new Date(2022, 2, 1), y: 4 },
    { x: new Date(2022, 3, 1), y: 8 },
    { x: new Date(2022, 4, 1), y: 16 },
    { x: new Date(2022, 5, 1), y: 32 },
  ],
  [
    { x: new Date(2022, 0, 1), y: 0 },
    { x: new Date(2022, 1, 1), y: 3 },
    { x: new Date(2022, 2, 1), y: 9 },
    { x: new Date(2022, 3, 1), y: 27 },
    { x: new Date(2022, 4, 1), y: 81 },
    { x: new Date(2022, 5, 1), y: 243 },
  ],
  [
    { x: new Date(2022, 0, 1), y: 0 },
    { x: new Date(2022, 1, 1), y: 4 },
    { x: new Date(2022, 2, 1), y: 16 },
    { x: new Date(2022, 3, 1), y: 64 },
    { x: new Date(2022, 4, 1), y: 256 },
    { x: new Date(2022, 5, 1), y: 512 },
  ],
  [
    { x: new Date(2022, 0, 1), y: 0 },
    { x: new Date(2022, 1, 1), y: 5 },
    { x: new Date(2022, 2, 1), y: 25 },
    { x: new Date(2022, 3, 1), y: 125 },
    { x: new Date(2022, 4, 1), y: 375 },
    { x: new Date(2022, 5, 1), y: 812 },
  ],
  [
    { x: new Date(2022, 0, 1), y: 0 },
    { x: new Date(2022, 1, 1), y: 6 },
    { x: new Date(2022, 2, 1), y: 36 },
    { x: new Date(2022, 3, 1), y: 216 },
    { x: new Date(2022, 4, 1), y: 570 },
    { x: new Date(2022, 5, 1), y: 1200 },
  ]
].reverse();

const formatDate = (value) => {
  return new Intl
      .DateTimeFormat('en-US', { month: 'short', year: 'numeric' })
      .format(value);
};

const xScale = computed(() => {
  return scaleTime()
      .domain([new Date(2022, 0, 1), new Date(2022, 5, 1)])
      .range([0, chartWidth.value]);
});
const yScale = computed(() => {
  return scaleLinear()
      .domain([0, max(series.flat(), (d) => d.y)])
      .range([height.value, 0]);
});
const lineGenerator = computed(() => {
  return line()
      .x((d) => xScale.value(d.x))
      .y((d) => yScale.value(d.y ?? 0));
});

const xTriangles = computed(() => {
  const data = series[0].map(d => [
    xScale.value(d.x),
    0
  ]);
  return Delaunay.from(data)
});

const toolBoxXPosition = computed(() => {
  if (mouseXPos) {
    let offset = -(toolBoxDimensions.value.width / 2);
    if (mouseXPos.value === 0) offset = 0;
    if (mouseXPos.value === series[0].length - 1) offset = -(toolBoxDimensions.value.width);
    return xScale.value(series[0][mouseXPos.value].x) + offset;
  }
})
const $toolBox = ref(null);
const toolBoxDimensions = ref({
  width: 100,
  height: 150,
});
watch(mouseXPos, () => {
  nextTick(() => {
    if (mouseXPos.value) {
      const $content = $toolBox.value.querySelector('.content');
      const minWidth = 86;
      let boxWidth = $content.offsetWidth + 32;
      const boxHeight = $content.offsetHeight + 32;
      if (boxWidth < minWidth) boxWidth = minWidth;

      toolBoxDimensions.value.width = boxWidth;
      toolBoxDimensions.value.height = boxHeight;
    }
  })
})

const mousePosition = ref(null);
const registerMouseMove = () => {
  const $svg = wrapper.value.$el.querySelector('svg');
  $svg.addEventListener('mousemove', (e) => {
    const pos = pointer(e);
    mousePosition.value = [ pos[0] - 50, pos[1] - 50 ];
    mouseXPos.value = xTriangles.value.find(
      pos[0] - 50,
      pos[1]  - 50,
    );
  });
  $svg.addEventListener('mouseleave', (e) => {
    mouseXPos.value = null;
  });
};

</script>
