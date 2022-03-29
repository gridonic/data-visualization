# Animations

## Drawing Effect

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

## Tween-Up
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
## Tween onChange
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


