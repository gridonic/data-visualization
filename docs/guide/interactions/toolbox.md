# Toolbox
The [foreignObject](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/foreignObject)
is very suitable for tooltips within a SVG. Thus the tooltip can be styled like in the HTML context.

<ToolBox/>

```vue
<foreignObject
    class="tool-box"
    :x="toolBoxXPosition"
    :y="0"
    :width="toolBoxDimensions.width"
    :height="toolBoxDimensions.height"
    v-if="mouseXPos !== null"
    ref="$toolBox"
>
  <div class="content">
    <p class="title">{{ formatDate(series[0][mouseXPos].x) }}</p>
    <div
        class="item"
        v-for="(serie, index) in series"
        :style="`--c-dot: var(--c-chart-${index});`"
    >
      <span>{{ serie[mouseXPos].y }}</span>
    </div>
  </div>
</foreignObject>
```
