<template>
  <div>
    <Base v-model:width="width" :height="height">
      <rect
        :fill="`var(--c-chart-${ index })`"
        stroke-width="1"
        v-for="(bar, index) in serie"
        :key="`bar-${index}`"
        :x="xScale(bar.x)"
        :y="yScale(bar.y)"
        :width="xScale.bandwidth()"
        :height="height - yScale(bar.y)"
      />
    </Base>
  </div>
</template>

<script setup lang="ts">
import {computed, ref } from 'vue';
import { scaleLinear, scaleBand, max } from 'd3';
import Base from '@Base';
const width = ref(null);
const height = ref(200);

const serie = [
  { x: 0, y: 9 },
  { x: 1, y: 7 },
  { x: 2, y: 5 },
  { x: 3, y: 4 },
  { x: 4, y: 8 },
];

const xScale = computed(() => {
  return scaleBand()
      .domain(serie.map(({ x }) => x))
      .range([0, width.value])
      .padding(0.3);
});

const yScale = computed(() => {
  return scaleLinear()
      .domain([0, max(serie, (d) => d.y)])
      .range([height.value, 0]);
});
</script>
