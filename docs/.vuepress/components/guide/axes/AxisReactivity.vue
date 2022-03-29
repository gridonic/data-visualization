<template>
  <label>
    <input type="checkbox" @change="activeSerie = $event.target.checked ? 1 : 0" :value="activeSeries">
    <span style="user-select: none; cursor: pointer;">toggle serie</span>
  </label>
  <Base
      v-model:width="width"
      :height="height"
  >
    <defs>
      <linearGradient id="gradient-var(--c-brand)" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stop-color="var(--palette-emerald-500)" stop-opacity="1" />
        <stop offset="100%" stop-color="var(--palette-emerald-600)" stop-opacity="0" />
      </linearGradient>
      <clipPath id="clip">
        <rect
            :height="height"
            :width="width"
            :transform="`translate(0, 0)`"
        ></rect>
      </clipPath>
    </defs>
    <g clip-path="url(#clip)">
      <path
          fill="none"
          stroke="var(--c-brand)"
          stroke-width="1"
          :d="lineGenerator(series[activeSerie])"
          ref="path"
      ></path>
    </g>
    <g ref="xAxisRef" :transform="`translate(0, ${height})`"></g>
    <g ref="yAxisRef" :transform="`translate(0, 0)`"></g>
  </Base>
</template>

<script setup>
import {computed, nextTick, ref, watch} from 'vue';
import {line, scaleLinear, max, min, axisBottom, axisLeft, select, easeCubicInOut, interpolate} from 'd3';
import Base from '@Base';

const width = ref(null);
const height = ref(200);

const series = [[
  { x: 0, y: 10 },
  { x: 20, y: 43 },
  { x: 40, y: 22 },
  { x: 60, y: 17 },
  { x: 80, y: 38 },
  { x: 100, y: 55 },
],[
  { x: 0, y: 0 },
  { x: 2, y: 40 },
  { x: 4, y: 20 },
  { x: 6, y: 0 },
  { x: 8, y: 30 },
  { x: 10, y: 100 },
]];

const activeSerie = ref(0);

const xScale = computed(() => {
  return scaleLinear()
      .domain([min(series[activeSerie.value], (d) => d.x), max(series[activeSerie.value], (d) => d.x)])
      .range([0, width.value]);
});

const yScale = computed(() => {
  return scaleLinear()
      .domain([0, max(series.flat(), (d) => d.y) ])
      .range([height.value, 0]);
});

const lineGenerator = computed(() => {
  return line()
      .x((d) => xScale.value(d.x))
      .y((d) => yScale.value(d.y ?? 0));
});

watch([width, activeSerie], () => {
  if (width.value) {
    nextTick(() => {
      createAxes();
      tween();
    })
  }
})

const xAxisRef = ref(null);
const yAxisRef = ref(null);

function createAxes() {
  const xAxis = axisBottom(xScale.value);
  const yAxis = axisLeft(yScale.value);
  select(xAxisRef.value)
    .transition()
      .duration(1000)
    .call(xAxis)
  select(yAxisRef.value)
    .transition()
      .duration(1000)
    .call(yAxis);
}

const path = ref(null);
function tween() {
  const $path = select(path.value);
  $path
      .transition()
      .duration(1000)
      .attrTween('d', pathTween(lineGenerator));
}
function pathTween(generator) {
  return () => (t) => {
    const lastIndex = activeSerie.value === 1 ? 0 : 1;
    const interpolatedSeries = series[activeSerie.value].map((item, index) => {
      const interpolatedItem = interpolate(series[lastIndex][index].y, item.y);

      return {
        x: item.x,
        y: interpolatedItem(t),
      }
    });
    return generator.value(interpolatedSeries);
  };
};


</script>
