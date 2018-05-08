# `Create a Point of Interest`

By default the Map Utils have animation of background-color on interaction.
See`Button--withTransform` and `Button--withShadow` for more animations.

```html
span: 6
dark: true
---
<link rel="stylesheet" href="https://unpkg.com/tachyons@4.9.1/css/tachyons.min.css"/>
<div class="
  bg-blue
  br4 ph3 pv3 white">
  <div class="ph3 pv3 ml3 mb1 dib white">
  <h1 class="dib f1
  ">
    Create a Point of Interest
  </h1>
  <button class="dib f1 white">X</button>
  </div>
  <div>
  <button class="
    f1 dim br-pill ph3 pv3 ml3 mb1 dib white bg-white
  ">
    -
  </button>
  </div>

  <div>
  <button class="
    f1 dim br-pill ph3 pv2 ml3 mb1 dib white bg-black
  ">
    +
  </button>
  </div>

  <div>
  <button class="
    f1 dim br-pill ph3 pv2 ml3 mb1 dib blue bg-black
  ">
    ⦿
  </button>
  </div>
</h1>
```

```html
span: 3
dark: false
---
<link rel="stylesheet" href="https://unpkg.com/tachyons@4.9.1/css/tachyons.min.css"/>
<h1 class="
  bg-black
  br-pill
  u-padding-s">
  <button class="
    f1 dim br-pill ph3 pv3 ml3 mb1 dib white bg-black
  ">
    Lat, Long
  </button>
  <button class="
    f1 dim br-pill ph3 pv3 ml3 mb1 dib white bg-black
  ">
    -
  </button>
  <button class="
    f1 dim br-pill ph3 pv2 ml3 mb1 dib white bg-black
  ">
    +
  </button>
  <button class="
    f1 dim br-pill ph3 pv2 ml3 mb1 dib blue bg-black
  ">
    ⦿
  </button>
</h1>
```