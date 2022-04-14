# Curve
d3 offers different curve types.
More insights on [github](https://github.com/d3/d3-shape#curves).

<Type/>

This code-example shows a linear curve:
```js
import { line, curveLinear } from 'd3';
const lineGenerator = computed(() => {
  return line()
      .x((d) => xScale.value(d.x))
      .y((d) => yScale.value(d.y ?? 0))
      .curve(curveLinear);
});
```
