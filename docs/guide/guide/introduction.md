# Introduction
This project is a guide to creating Visualizations using D3.js and Vue.js.

D3 is an excellent library to implement graphics with high ridge of customizations. 
The disadvantage is that the implementation is not always easy and the library requires training time and patience. 😉

## The problem with chart-libraries

Working with data visualizations with a high degree of customer-specific requirements,
always presents the developer with great challenges.

The requirements for the visualizations are often characterized by individual designs and specific interactions.
Often these requirements can be built using pre-built examples or libraries,
So it is understandable that one decides to use a JS library, where much is already built.

Believing to be able to meet all requirements, one repeatedly encounters limitations of the library that do not offer certain features.
These hurdles are often not completely implemented at the expense of the design or the interactions.
interactions. It is argued to the customer or the designer that this requirement is not possible to this extent.

Sure in the end you have a working product, but it is not 100% implemented as was actually desired.
From my point of view this is always frustrating, because you actually know that it can be possible.

## Vue or D3 - How will render the template?
D3 Functions working great with Vue computed properties and vue-templates.
Use the advantage of the vue-reactivity system direct in your template.
```vue
<tempalte>
  <svg :width="width" :height="height">
    <path :path="lineGenerator(data)"></path>
  </svg>
</tempalte>

<script setup>
const width = ref(100);
const height = ref(100);
const lineGenerator = computed(() => {
  ...
})
</script>
```
