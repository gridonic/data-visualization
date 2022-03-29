<template>
  <div class="chart-component">
    <Base
    v-model:width="width"
    :height="height"
    ref="wrapper"
  >
    <path
        fill="none"
        stroke="var(--c-brand)"
        stroke-width="1"
        :d="lineGenerator(series)"
    ></path>

    <g
      v-if="mouseXPos !== null"
    >
      <text
          :x="xScale(series[mouseXPos].x)"
          :y="yScale(series[mouseXPos].y)"
          text-anchor="middle"
          dy="-8"
          font-size="10"
      >{{ series[mouseXPos].y }}</text>

      <circle
          :cx="xScale(series[mouseXPos].x)"
          :cy="yScale(series[mouseXPos].y)"
          stroke="var(--c-brand)"
          fill="var(--c-brand)"
          r="4"
      />
    </g>

    <circle
        v-for="(serie) in series"
        key="`serie-point-${index}`"
        r="3"
        fill="var(--c-brand)"
        :cx="xScale(serie.x)"
        :cy="yScale(serie.y)"
    ></circle>

  </Base>
    <a class="repolink" :href="`${componentsRepoPath}/guide/interactions/Tooltips.vue`" target="_blank">see full code example on github</a>
  </div>
</template>

<script setup>
import {computed, nextTick, onMounted, ref, watch, watchEffect} from 'vue';
import {line, scaleLinear, max, pointer, Delaunay, axisBottom, axisLeft, select} from 'd3';
import Base from '@Base';

// import { useData } from 'vitepress'
// const { theme } = useData()
// const componentsRepoPath = theme.value.componentsRepoPath;

const width = ref(null);
const height = ref(200);
const wrapper = ref(null);
const mouseXPos = ref(null);
watchEffect(() => {
  if (wrapper.value) {
    registerMouseMove();
  }
})

const series = [
  { x: 0, y: 0 },
  { x: 20, y: 20 },
  { x: 40, y: 60 },
  { x: 60, y: 0 },
  { x: 80, y: 80 },
  { x: 100, y: 100 },
];

const xScale = computed(() => {
  return scaleLinear()
      .domain([0, max(series, (d) => d.x)])
      .range([0, width.value]);
});
const yScale = computed(() => {
  return scaleLinear()
      .domain([0, max(series, (d) => d.y)])
      .range([height.value, 0]);
});
const lineGenerator = computed(() => {
  return line()
      .x((d) => xScale.value(d.x))
      .y((d) => yScale.value(d.y ?? 0));
});

const xTriangles = computed(() => {
  const data = series.map(d => [
    xScale.value(d.x),
    0
  ]);
  return Delaunay.from(data)
});

const registerMouseMove = () => {
  const $svg = wrapper.value.$el.querySelector('svg');
  $svg.addEventListener('mousemove', (e) => {
    const pos = pointer(e);
    mouseXPos.value = xTriangles.value.find(
      pos[0],
      pos[1],
    );
  });
  $svg.addEventListener('mouseleave', (e) => {
    mouseXPos.value = null;
  });
};

</script>
