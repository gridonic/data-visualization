# Getting Started
Install Vue with Vite
``` bash
npm create vite@latest my-vue-app --template vue
cd my-vue-app
npm i
```
Install d3.js
``` bash
npm install d3
```

Import everything from d3 as `d3` in your Component. e.g. App.vue
``` vue
<script setup>
import * as d3 from 'd3';
d3.scaleLinear(...)
</script>
```
... or load just load what you need (recommended). For example scaleLinear
Import the 
``` vue
<script setup>
import { scaleLinear } from 'd3';
scaleLinear(...)
</script>
```
