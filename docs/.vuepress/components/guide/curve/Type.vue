<template>
  <div>
    <label>
      <input type="radio" value="curveLinear" v-model="type">
      <span>curveLinear</span>
    </label>
    <br>
    <label>
      <input type="radio" value="curveCardinal" v-model="type">
      <span>curveCardinal</span>
    </label>
    <br>
    <label>
      <input type="radio" value="curveNatural" v-model="type">
      <span>curveNatural</span>
    </label>
    <br>
    <label>
      <input type="radio" value="curveStep" v-model="type">
      <span>curveStep</span>
    </label>
    <br>
    <label>
      <input type="radio" value="curveBasis" v-model="type">
      <span>curveBasis</span>
    </label>
    <br>
    <label>
      <input type="radio" value="curveMonotoneX" v-model="type">
      <span>curveMonotoneX</span>
    </label>
    <Base v-model:width="width" :height="height">
      <path
          fill="none"
          stroke="var(--c-brand)"
          stroke-width="1"
          :d="lineGenerator(series)"
      ></path>
    </Base>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { line, scaleLinear, max, curveLinear, curveCardinal, curveNatural, curveStep, curveBasis, curveMonotoneX } from 'd3';
import Base from '@Base';

const width = ref(null);
const height = ref(200);
const tension = ref(0);

const curves = {
  'curveLinear': curveLinear,
  'curveCardinal': curveCardinal,
  'curveNatural': curveNatural,
  'curveStep': curveStep,
  'curveBasis': curveBasis,
  'curveMonotoneX': curveMonotoneX,
}
const type = ref('curveLinear');

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
      .y((d) => yScale.value(d.y ?? 0))
      .curve(curves[type.value]);
});

</script>
