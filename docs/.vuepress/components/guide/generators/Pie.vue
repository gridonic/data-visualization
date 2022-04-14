<template>
  <div>
    <Base v-model:width="width" :height="height">
      <g :transform="`translate(${width / 2} ${height / 2})`">
        <path
            v-for="(arc, index) in arcData"
            :key="`arc-${index}`"
            :fill="`var(--c-chart-${ index })`"
            :d="arcGenerator(arc)"
            stroke="white"
        ></path>
      </g>
    </Base>
  </div>
</template>

<script setup>
import {computed, ref } from 'vue';
import {arc, pie} from 'd3';
import Base from '@Base';
const width = ref(null);
const height = ref(200);
const numberOfPoints = ref(5);
const cornerRadius = ref(0);
const innerRadius = ref(0);
const series = computed(() => {
  return Array(Number(numberOfPoints.value))
      .fill(0)
      .map(() => Math.floor(Math.random() * 10));
})
const arcData = computed(() => pie()
    .sort((a, b) => a.index > b.index)
    .startAngle(0.5 * Math.PI)
    .endAngle(2.5 * Math.PI)
    (series.value));
const arcGenerator = computed(() => arc()
    .innerRadius(innerRadius.value)
    .outerRadius(height.value / 2)
    .cornerRadius(cornerRadius.value)
    .startAngle((d) => d.startAngle)
    .endAngle((d) => d.endAngle)
);
</script>
