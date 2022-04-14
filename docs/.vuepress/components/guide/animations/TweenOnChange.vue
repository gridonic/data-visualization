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
import { line, scaleLinear, max, select, easeCubicInOut, interpolate, curveBasis } from 'd3';
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
    { x: 120, y: 54 },
    { x: 140, y: 90 },
    { x: 160, y: 47 },
    { x: 180, y: 12 },
    { x: 200, y: 78 },
    { x: 220, y: 45 },
    { x: 240, y: 67 },
    { x: 260, y: 12 },
    { x: 280, y: 34 },
    { x: 300, y: 90 },
  ],
  [
    { x: 0, y: 0 },
    { x: 20, y: 20 },
    { x: 40, y: 60 },
    { x: 60, y: 0 },
    { x: 80, y: 80 },
    { x: 100, y: 12 },
    { x: 120, y: 12 },
    { x: 140, y: 45 },
    { x: 160, y: 67 },
    { x: 180, y: 56 },
    { x: 200, y: 34 },
    { x: 220, y: 90 },
    { x: 240, y: 12 },
    { x: 260, y: 18 },
    { x: 280, y: 34 },
    { x: 300, y: 67 },
  ],
  [
    { x: 0, y: 0 },
    { x: 20, y: 66 },
    { x: 40, y: 43 },
    { x: 60, y: 21 },
    { x: 80, y: 4 },
    { x: 100, y: 23 },
    { x: 120, y: 12 },
    { x: 140, y: 1 },
    { x: 160, y: 78 },
    { x: 180, y: 56 },
    { x: 200, y: 9 },
    { x: 220, y: 23 },
    { x: 240, y: 45 },
    { x: 260, y: 66 },
    { x: 280, y: 89 },
    { x: 300, y: 22 },
  ],
  [
    { x: 0, y: 0 },
    { x: 20, y: 3 },
    { x: 40, y: 12 },
    { x: 60, y: 29 },
    { x: 80, y: 66 },
    { x: 100, y: 12 },
    { x: 120, y: 34 },
    { x: 140, y: 77 },
    { x: 160, y: 9 },
    { x: 180, y: 78 },
    { x: 200, y: 67 },
    { x: 220, y: 34 },
    { x: 240, y: 55 },
    { x: 260, y: 98 },
    { x: 280, y: 3 },
    { x: 300, y: 55 },
  ],
  [
    { x: 0, y: 99 },
    { x: 20, y: 88 },
    { x: 40, y: 66 },
    { x: 60, y: 44 },
    { x: 80, y: 22 },
    { x: 100, y: 0 },
    { x: 120, y: 12 },
    { x: 140, y: 34 },
    { x: 160, y: 66 },
    { x: 180, y: 72 },
    { x: 200, y: 34 },
    { x: 220, y: 88 },
    { x: 240, y: 9 },
    { x: 260, y: 45 },
    { x: 280, y: 76 },
    { x: 300, y: 33 },
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
      .y((d) => yScale.value(d.y ?? 0))
      .curve(curveBasis);
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
