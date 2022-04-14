# Tooltip

<ToolTips/>

```js
const xTriangles = computed(() => {
  const data = series.map(d => [
    xScale.value(d.x),
    0
  ]);
  return Delaunay.from(data)
});

const registerMouseMove = () => {
  const $svg = wrapper.value.$el.querySelector('svg');
  $svg.addEventListener('mousemove', (e) => {
    const pos = pointer(e);
    mouseXPos.value = xTriangles.value.find(
      pos[0],
      pos[1],
    );
  });
  $svg.addEventListener('mouseleave', (e) => {
    mouseXPos.value = null;
  });
};
```
