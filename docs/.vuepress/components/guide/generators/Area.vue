<template>
  <div>
    <Base v-model:width="width" :height="height" boundaries>
      <path
          fill="var(--c-chart-3)"
          opacity="0.9"
          :d="areaGenerator(series[0])"
      ></path>
      <path
          fill="var(--c-chart-0)"
          opacity="0.9"
          :d="areaGenerator(series[1])"
      ></path>
    </Base>
  </div>
</template>

<script setup>
import {computed, ref } from 'vue';
import { area, scaleLinear, max, curveLinear } from 'd3';
import Base from '@Base';

const width = ref(null);
const height = ref(200);

const series = [
  [
    { x: 0, y: 0 },
    { x: 20, y: 20 },
    { x: 40, y: 60 },
    { x: 60, y: 33 },
    { x: 80, y: 80 },
    { x: 100, y: 100 },
  ],
  [
    { x: 0, y: 90 },
    { x: 20, y: 80 },
    { x: 40, y: 20 },
    { x: 60, y: 90 },
    { x: 80, y: 20 },
    { x: 100, y: 0 },
  ]
];

const xScale = computed(() => {
  return scaleLinear()
      .domain([0, max(series.flat(), (d) => d.x)])
      .range([0, width.value]);
});

const yScale = computed(() => {
  return scaleLinear()
      .domain([0, max(series.flat(), (d) => d.y)])
      .range([height.value, 0]);
});

const areaGenerator = computed(() => {
  return area()
      .x((d) => xScale.value(d.x))
      .y0(height.value)
      .y1((d) => yScale.value(d.y ?? 0))
      .curve(curveLinear);
});
</script>
