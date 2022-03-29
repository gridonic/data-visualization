# Base Component
## Idea
It is very useful to have a SVG-Wrapper, which scales your visualization on the fly.

### Example

<BaseExample/>
```vue
<template>
  <div>
    <input type="range" v-model="radius" min="5" max="50">
    <label>
      <input type="checkbox" v-model="showBoundaries">
      <span>Show Boundaries</span>
    </label>
    <Base :height="100" v-model:width="width" :boundaries="showBoundaries">
      <circle :r="radius" :cx="cx" cy="50" fill="green"/>
    </Base>
  </div>
</template>

<script setup>
import {computed, ref} from 'vue';
const radius = ref(25);
const width = ref(null);
const cx = computed(() => width.value / 2);
const showBoundaries = ref(false);
</script>
```

## Fixed Dimensions
```vue
<Base :height="100" :width="200" boundaries/>
```
<Base :height="100" :width="200" boundaries/>

## Responsive Dimensions Horizontal with fixed height
<Base :height="100" boundaries/>
```vue
<Base :height="100" boundaries/>
```
## Responsive Dimensions Horizontal and Vertical
<div class="grid-example">
  <div>
    <p>Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Quo usque tandem abutere, Catilina, patientia nostra?</p>
  </div>
  <Base boundaries/>
</div>

<style>
.grid-example {
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
</style>

```vue
<Base boundaries/>
```

## Margin
```vue
<Base
  :height="100"
  boundaries
  :margin='{"top": 50, "left": 50, "bottom": 50, "right": 50}'
/>
```
<Base
:height="100"
boundaries
:margin='{"top": 50, "left": 50, "bottom": 50, "right": 50}'
/>

## Custom-Styles
Overwrite svg-wrapper styles:

<Base
:height="100"
boundaries
class="my-wrapper-styles"
/>

<style>
.my-wrapper-styles > svg {
  box-shadow: 0 0 5px 0 aliceblue;
  background-color: aliceblue;
}
</style>

```vue
<Base
  :height="100"
  boundaries
  class="my-wrapper-styles"
/>

<style>
.my-wrapper-styles > svg {
  box-shadow: 0 0 5px 0 aliceblue;
  background-color: aliceblue;
}
</style>
```

## Props
- width
- height
- margin
