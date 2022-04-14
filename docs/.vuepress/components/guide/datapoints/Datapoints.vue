<template>
  <Base v-model:width="width" :height="height">
    <path
        fill="none"
        stroke="var(--c-chart-1)"
        stroke-width="1"
        :d="lineGenerator(series)"
    ></path>
    <g
      v-for="({x, y}, i) in series"
      :key="`serie-point-${i}`"
    >
      <text
          :x="xScale(x)"
          :y="yScale(y)"
          text-anchor="middle"
          dy="-8"
          font-size="10"
          fill="var(--c-chart-1)"
      >{{ y }}</text>
      <circle
        r="3"
        fill="var(--c-chart-1)"
        :cx="xScale(x)"
        :cy="yScale(y)"
      ></circle>
    </g>
  </Base>
</template>

<script setup>
import { computed, ref } from 'vue';
import { line, scaleLinear, max } from 'd3';
import Base from '@Base';

const width = ref(null);
const height = ref(200);

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

</script>
