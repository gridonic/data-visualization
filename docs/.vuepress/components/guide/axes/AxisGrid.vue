<template>
  <Base
      v-model:width="width"
      :height="height"
      :margin="{
        top: 50,
        left: 50,
        right: 50,
        bottom: 50
      }"
  >
    <path
        fill="none"
        stroke="var(--c-brand)"
        stroke-width="1"
        :d="lineGenerator(series)"
    ></path>
    <g ref="xAxisRef" :transform="`translate(0, ${height})`"></g>
    <g ref="yAxisRef" :transform="`translate(0, 0)`"></g>
    <circle
        v-for="(serie, index) in series"
        key="`serie-point-${index}`"
        r="3"
        fill="var(--c-brand)"
        :cx="xScale(serie.x)"
        :cy="yScale(serie.y)"
    ></circle>
  </Base>
</template>

<script setup>
import {computed, nextTick, ref, watch} from 'vue';
import { line, scaleLinear, max, min, axisTop, axisRight, select } from 'd3';
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
      .domain([min(series, (d) => d.x), max(series, (d) => d.x)])
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
      createAxes();
    })
  }
})

const xAxisRef = ref(null);
const yAxisRef = ref(null);
function createAxes() {
  const xAxis = axisTop(xScale.value)
      .tickSize(height.value);
  const yAxis = axisRight(yScale.value)
      .tickSize(width.value);

  select(xAxisRef.value)
    .call(xAxis)
    .call(g => g.select(".domain")
      .remove())
    .call(g => g.selectAll(".tick line")
      .attr("stroke-opacity", 0.5)
      .attr("stroke-dasharray", "1,5"))
    .call(g => g.selectAll(".tick text")
      .attr("x", 0)
      .attr("y", 12)
      .attr("dy", 4)
      .attr("text-anchor", 'middle')
    )

  select(yAxisRef.value)
    .call(yAxis)
    .call(g => g.select(".domain")
      .remove()
    )
    .call(g => g.selectAll(".tick line")
      .attr("stroke-opacity", 0.5)
      .attr("stroke-dasharray", "1,5")
    )
    .call(g => g.selectAll(".tick text")
      .attr("x", -8)
      .attr("dy", 4)
      .attr("text-anchor", 'end')
    )
}


</script>
