# Basics
:::info Note
MDN [SVG Tutorial](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial)
:::
## `<rect/>`

<svg height="40" width="60">
  <rect 
    height="40"
    width="60"
    fill="var(--c-brand)"
    rx="15"
  />
</svg>

```html
<svg height="40" width="60">
  <rect 
    height="40"
    width="60"
    fill="var(--c-brand)"
    rx="15"
  />
</svg>
```
:::info Note
- Find more at the MDN Docs [Rect Element](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/rect)
:::
## `<line/>`
<svg height="40" width="60">
<line 
  x1="5" 
  y1="5" 
  x2="55" 
  y2="36" 
  stroke="var(--c-brand)"
  stroke-width="4"
  stroke-linecap="round"
  stroke-dasharray="1 8"
/>
</svg>

```html
<svg height="40" width="60">
  <line
    x1="5"
    y1="5"
    x2="35"
    y2="35"
    stroke="var(--c-brand)"
    stroke-width="4"
    stroke-linecap="round"
    stroke-dasharray="1 8"
  />
</svg>
```
:::info Note
- Find more at the MDN Docs [Line Element](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/line)
  :::
## `<circle/>`
<svg height="40" width="60">
<circle cx="20" cy="20" r="20" fill="var(--c-brand)"/>
</svg>

```html
<svg height="40" width="60">
  <circle 
    cx="20" 
    cy="20" 
    r="20" 
    fill="var(--c-brand)"
  />
</svg>
```
:::info Note
- Find more at the MDN Docs [Circle Element](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/cicle)
  :::
## `<path/>`
<svg height="40" width="60">
<path 
  d="M 30 7 L 13 35 L 47 35 Z"
  fill="none"
  stroke="var(--c-brand)"
  stroke-linecap="round"
  stroke-width="3"
/>
</svg>

```html
<svg height="40" width="60">
  <path
    d="M 30 7 L 13 35 L 47 35 Z"
    fill="none"
    stroke="var(--c-brand)"
    stroke-linecap="round"
    stroke-width="3"
  />
</svg>
```
:::info Note
- Find more at the MDN Docs [Path Element](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/path)
- Edit or create SVG paths in browser: [SvgPathEditor](https://yqnn.github.io/svg-path-editor/)
:::
## `<text/>`
<svg height="40" width="60">
<text
 fill="var(--c-brand)"
 dy="16"
>Label</text>
</svg>

```html
<svg height="40" width="60">
  <text
    fill="var(--c-brand)"
    dy="16"
  >Label</text> 
</svg>
```
:::info Note
- Find more at the MDN Docs [Circle Element](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/cicle)
  :::

## `<pattern/>`
<svg height="100" width="200">
  <defs>
    <pattern
      id="pattern-cross"
      patternUnits="userSpaceOnUse"
      width="10"
      height="10"
    >
      <path
        d="M 3 5 l 4 0 M 5 3 l 0 4"
        stroke="black"
        stroke-width="1"
        style="opacity: 0.25;"
      />
    </pattern>
  </defs>
  <rect height="100" width="200" fill="url(#pattern-cross)"/>
</svg>

```html
<svg height="100" width="200">
  <defs>
    <pattern
      id="pattern-cross"
      patternUnits="userSpaceOnUse"
      width="10"
      height="10"
    >
      <path
        d="M 3 5 l 4 0 M 5 3 l 0 4"
        stroke="black"
        stroke-width="1"
        style="opacity: 0.25"
      />
    </pattern>
  </defs>
  <rect height="100" width="200" fill="url(#pattern-cross)"/>
</svg>
```
:::info Note
- Find more at the MDN Docs [Rect Element](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/rect)
  :::

## `<g/>`

## `<defs/>`

<style>
svg {
  /*box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);*/
}
</style>
