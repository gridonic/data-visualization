# Generator functions
## Concept
D3 generators consist of functions that take data and return the necessary SVG drawing code to create a graphical object based on that data. 
For instance, if you have an array of points and you want to draw a line from one point to another, or turn it into a polygon or an area, a few D3 functions can help you with this process. These generators simplify the process of creating a complex SVG `<path>` by abstracting the process needed to write a `<path>` d attribute.
## Line

<Line/>

create some random data:
```js
const series = [
  { x: 0, y: 0 },
  { x: 20, y: 20 },
  { x: 40, y: 60 },
  { x: 60, y: 0 },
  { x: 80, y: 80 },
  { x: 100, y: 100 },
];
```
Use the d3 line-function to generate a path string depending on your x and y scaling:
```js
import { computed, ref } from 'vue';
import { line, scaleLinear, max } from 'd3';

const width = ref(null);
const height = ref(200);

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

console.log(lineGenerator(series)); // M0,50L20,20L40,90L60,20L80,80L100,100
```
finally render the path:
```vue
<template>
  <SVGWrapper v-model:width="width" :height="height">
    <path
        fill="none"
        stroke="var(--c-brand)"
        stroke-width="1"
        :d="lineGenerator(series)"
    ></path>
  </SVGWrapper>
</template>
```

## Areas
<Area/>

## Stacked Area

## Pie

## Donut

## Column
<Bar/>

## StackedBar
<Bar/>




