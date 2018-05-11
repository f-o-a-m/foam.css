# `Map Utils`

By default the Map Utils have animation of background-color on interaction.
See`Button--withTransform` and `Button--withShadow` for more animations.

```html
span: 3
dark: true
---
<link rel="stylesheet" href="https://unpkg.com/tachyons@4.9.1/css/tachyons.min.css"/>
<div class="
map-utils u-background-grayish">
  <button class="
    dib f3 br-pill ph3 pv3 ml2 mt2 mb1 white
  ">
    43.245, 31.438
  </button>
  <button class="
    f1 dim br-100 ph3 pv1 ml2 mt2 mb1 dib white
  ">
    -
  </button>
  <button class="
    f1 dim br-100 ph3 pv1 ml2 mt2 mb1 dib white
  ">
    +
  </button>
  <button class="
    f1 dim br-pill ph3 pv1 ml3 mr2 mt2 mb1 dib blue
  ">
    ⦿
  </button>
</h1>
```

```html
span: 6
dark: false
---
<footer class="
  map-utils u-background-grayish
  ">
  <button class="
    map-util-btn f3 ph3 pv3 mt3 ml2 white fl
  ">
    43.245, 31.438
  </button>
  <button class="
    Icon f1 dim br-100 ph3 pv1 ml2 mt2 mb1 dib white
  ">
    -
  </button>
  <button class="
    Icon f1 dim br-100 ph3 pv1 ml2 mt2 mb1 dib white map-util-btn
  ">
    +
  </button>
  <button class="
    Icon f1 dim br-pill blue map-util-btn
  ">
    ⦿
  </button>
</p>
```