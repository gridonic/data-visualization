# Scale functions

Scale functions transform data values into a visual context.

I will cover just the basic concept of scale functions in combination with Vue. 
For more insight about scaling check the 
[offical-docs](https://github.com/d3/d3-scale/) or 
[d3indepth](https://www.d3indepth.com/scales/) from Peter Cook.

## Domain and Range
The function has two functions where the scaling is defined:
- The Domain function is used to define the data range.
- The Range function is used to define the visual pixel area .

For example my data which has a minimum of *0* and a maximum of *100*
should map to a visual area from *0*px to *600px*.
``` js
import { scaleLinear } from 'd3';

const scale = scaleLinear()
  .domain([0, 100])
  .range([0, 600]);

scale(0); // returns 0
scale(50); // returns 300
scale(100); // returns 600
```

## Types
Depending on the case, we need different scaling functions, to put your data in the correct relations.
D3 comes with different scaling like scaleLinear, scaleLog, scaleTime just to name a few.

## Visual Example
The green point is visual-representation of the RangeSlider-Input. 
We transform the input-value with linear scaling-function relative to the width of the SVG-element.
In this case the domain goes from 0 to 100 and the range from 0 to the variable width of the container.

<Linear/>

``` vue
<template>
  <div>
    <input type="range" v-model="model" :min="min" :max="max">
    <SVGWrapper v-model:width="width" :height="height" boundaries>
      <circle
        r="5"
        fill="green"
        :cx="xScale(model)"
        :cy="height / 2"
      />
    </SVGWrapper>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { scaleLinear } from 'd3';

const model = ref(10);
const width = ref(0);
const height = ref(40);
const min = 0;
const max = 100;

const xScale = computed(() => {
  return scaleLinear()
      .domain([min, max])
      .range([0, width.value]);
});
</script>
``` 
