# Datapoints
Each data point is visualized by a circle and its numerical value.
<Datapoints/>

Let vue do the work for us and loop with `v-for` over the series and create a `text` and a `circle` element.
```vue
<g
    v-for="({x, y}, i) in series"
    :key="`serie-point-${i}`"
>
    <text
        :x="xScale(x)"
        :y="yScale(y)"
        text-anchor="middle"
        dy="-8"
        font-size="10"
    >{{ y }}</text>
    <circle
        r="3"
        fill="var(--c-brand)"
        :cx="xScale(x)"
        :cy="yScale(y)"
    ></circle>
</g>
```
