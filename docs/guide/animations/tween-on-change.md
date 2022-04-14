# Tween onChange
<TweenOnChange/>

We going to watch the activeSerie and create a interpolator from the old to the new value.

```js
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
```


