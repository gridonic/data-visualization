<template>
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
        ref="path"
    ></path>
  </Base>
</template>

<script setup>
import {computed, nextTick, ref, watch } from 'vue';
import { line, scaleLinear, max, select, easeCubicInOut } from 'd3';
import Base from '@Base';

const width = ref(null);
const height = ref(200);
const wrapper = ref(null);
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

watch(width, () => {
  if (width.value) {
    nextTick(() => {
      transition();
    })
  }
})

const path = ref(null);
function transition() {
  const $path = select(path.value);
  if ($path.node()) {
    const totalPathLength = $path.node().getTotalLength();
    $path
        .attr('stroke-dasharray', totalPathLength)
        .attr('stroke-dashoffset', totalPathLength)
        .transition()
        .ease(easeCubicInOut)
        .duration(3000)
        .attr('stroke-dashoffset', 0)
        .on("end", () => setTimeout(transition(), 1000));
  }
}






</script>
