<template>
  <Base v-model:width="width" :height="height">
    <path
        fill="none"
        stroke="var(--c-chart-1)"
        stroke-width="1"
        :d="lineGenerator(serie)"
    ></path>
  </Base>
</template>

<script setup>
import { computed, ref } from 'vue';
import { line, scaleLinear, max } from 'd3';
import Base from '@Base';

const width = ref(null);
const height = ref(200);

const serie = [
  { x: 0, y: 0 },
  { x: 20, y: 20 },
  { x: 40, y: 60 },
  { x: 60, y: 0 },
  { x: 80, y: 80 },
  { x: 100, y: 100 },
];

const xScale = computed(() => {
  return scaleLinear()
      .domain([0, max(serie, (d) => d.x)])
      .range([0, width.value]);
});

const yScale = computed(() => {
  return scaleLinear()
      .domain([0, max(serie, (d) => d.y)])
      .range([height.value, 0]);
});

const lineGenerator = computed(() => {
  return line()
      .x((d) => xScale.value(d.x))
      .y((d) => yScale.value(d.y ?? 0));
});

</script>
