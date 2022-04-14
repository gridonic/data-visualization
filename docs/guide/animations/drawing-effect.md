# Drawing Effect

This animation is based on two SVG attributes: `stroke-dasharray` and `stroke-dashoffset`.
We change the dashoffset-value from the pathLength to zero and set the dasharray to the
pathlength. This way we get this nice [drawing effect.](https://www.cassie.codes/posts/creating-my-logo-animation/#heading-svg-stroke-dasharray)

<DrawingEffect/>

```js
import { ref, watch, nextTick } from 'vue';
import { select, easeCubicInOut } from 'd3';

// start the transition when everything is ready
watch(width, () => {
    if (width.value) {
        nextTick(() => {
            transition();
        })
    }
})

const path = ref(null);
function transition() {
  const $path = select(path.value);
  if ($path.node()) {
    const totalPathLength = $path.node().getTotalLength();
    $path
      .attr('stroke-dasharray', totalPathLength)
      .attr('stroke-dashoffset', totalPathLength)
      .transition()
      .ease(easeCubicInOut)
      .duration(3000)
      .attr('stroke-dashoffset', 0)
      .on("end", () => setTimeout(tween(), 1000));
  }
}
```
