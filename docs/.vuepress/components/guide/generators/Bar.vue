<template>
  <div>
    <Base v-model:width="width" :height="height">
      <rect
        :fill="`var(--c-chart-${ index })`"
        stroke-width="1"
        v-for="(bar, index) in serie"
        :key="`bar-${index}`"
        :x="0"
        :y="yScale(bar.y)"
        :height="yScale.bandwidth()"
        :width="width - xScale(bar.x)"
      />
    </Base>
  </div>
</template>

<script setup lang="ts">
import {computed, ref } from 'vue';
import { scaleLinear, scaleBand, max } from 'd3';
import Base from '@Base';
const width = ref(null);
const height = ref(400);

const serie = [
  { y: 0, x: 9 },
  { y: 1, x: 7 },
  { y: 2, x: 5 },
  { y: 3, x: 4 },
  { y: 4, x: 8 },
];

const yScale = computed(() => {
  return scaleBand()
      .domain(serie.map(({ y }) => y))
      .range([0, height.value])
      .padding(0.3);
});

const xScale = computed(() => {
  return scaleLinear()
      .domain([0, max(serie, ({ x }) => x)])
      .range([width.value, 0]);
});
</script>
