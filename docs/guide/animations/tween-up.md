# Tween-Up
We generate a start-up animation using [d3-interpolate.](https://github.com/d3/d3-interpolate)
For each data point an interpolator function is created which is defined from the start point to the end point.

<TweenUp/>

```js
watch(width, () => {
  if (width.value) {
    nextTick(() => {
      tween();
    })
  }
})

const path = ref(null);
function tween() {
  const $path = select(path.value);
  $path
    .transition()
    .ease(easeCubicInOut)
    .duration(3000)
    .attrTween('d', pathTween(lineGenerator))
    .on("end", () => setTimeout(tween(), 1000));
}
function pathTween(generator) {
  return () => (t) => {
    const interpolatedSeries = series.map(({x, y}) => {
      const interpolator = interpolate(0, y);
      return {
        x: x,
        y: interpolator(t),
      }
    });
    return generator.value(interpolatedSeries);
  };
};
```
