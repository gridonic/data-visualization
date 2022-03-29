<template>
  <div>
    <label v-for="(_, index) in series">
      <input type="radio" :value="index" v-model="activeSerie">
      <span>Serie-{{index}}</span>
    </label>
    <Base
        v-model:width="width"
        :height="height"
        ref="wrapper"
    >
      <path
          fill="none"
          :stroke="`var(--c-chart-${ activeSerie })`"
          stroke-width="1"
          :d="lineGenerator(series[activeSerie])"
          ref="path"
      ></path>
    </Base>
  </div>
</template>

<script setup>
import {computed, ref, watch } from 'vue';
import { line, scaleLinear, max, select, easeCubicInOut, interpolate } from 'd3';
import Base from '@Base';

const activeSerie = ref(0);

const width = ref(null);
const height = ref(200);
const wrapper = ref(null);

const series = [
  [
    { x: 0, y: 0 },
    { x: 20, y: 5 },
    { x: 40, y: 99 },
    { x: 60, y: 88 },
    { x: 80, y: 45 },
    { x: 100, y: 13 },
  ],
  [
    { x: 0, y: 0 },
    { x: 20, y: 20 },
    { x: 40, y: 60 },
    { x: 60, y: 0 },
    { x: 80, y: 80 },
    { x: 100, y: 100 },
  ],
  [
    { x: 0, y: 0 },
    { x: 20, y: 66 },
    { x: 40, y: 43 },
    { x: 60, y: 21 },
    { x: 80, y: 4 },
    { x: 100, y: 88 },
  ],
  [
    { x: 0, y: 0 },
    { x: 20, y: 3 },
    { x: 40, y: 12 },
    { x: 60, y: 29 },
    { x: 80, y: 66 },
    { x: 100, y: 90 },
  ],
  [
    { x: 0, y: 99 },
    { x: 20, y: 88 },
    { x: 40, y: 66 },
    { x: 60, y: 44 },
    { x: 80, y: 22 },
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
const lineGenerator = computed(() => {
  return line()
      .x((d) => xScale.value(d.x))
      .y((d) => yScale.value(d.y ?? 0));
});

watch(activeSerie, (a, b) => {
  tween(a, b);
})

const path = ref(null);
function tween(a, b) {
  const $path = select(path.value);
  $path
    .transition()
    .ease(easeCubicInOut)
    .duration(1000)
    .attrTween('d', pathTween(lineGenerator, a, b));

  function pathTween(generator) {
    return () => (t) => {
      const interpolatedSeries = series[a].map(({x, y: yNew}, index) => {
        const yOld = series[b][index].y;
        const interpolator = interpolate(yOld, yNew);
        return {
          x: x,
          y: interpolator(t),
        }
      });
      return generator.value(interpolatedSeries);
    };
  };
}

</script>
