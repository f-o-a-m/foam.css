# `Button`

By default all `Button`s have animation of background-color on interaction.
See`Button--withTransform` and `Button--withShadow` for more animations.

```html
span: 2
dark: true
---
<button class="
  Button
  u-padding-s
  u-color-whitishDim">
  Button
</button>
```

```html
span: 2
dark: true
---
<a href="#" class="
  Button
  u-padding-s
  u-color-whitishDim">
  Button
</a>
```

```html
span: 2
dark: true
---
<div href="#" class="
  Button
  u-padding-s
  u-color-whitishDim">
  Button
</div>
```

## `Button--withTransform`

Adds transform animation on interaction.

```html
span: 2
dark: true
---
<button class="
  Button
  Button--withTransform
  u-padding-s
  u-color-whitishDim">
  Button
</button>
```

```html
span: 2
dark: true
---
<a href="#" class="
  Button
  Button--withTransform
  u-padding-s
  u-color-whitishDim">
  Button
</a>
```

```html
span: 2
dark: true
---
<div href="#" class="
  Button
  Button--withTransform
  u-padding-s
  u-color-whitishDim">
  Button
</div>
```

## `Button--withShadow`

Adds shadow animation on interaction.

```html
span: 2
---
<button class="
  Button
  Button--withShadow
  u-padding-s
  u-color-blueish">
  Button
</button>
```

```html
span: 2
---
<a href="#" class="
  Button
  Button--withShadow
  u-padding-s
  u-color-blueish">
  Button
</a>
```

```html
span: 2
---
<div href="#" class="
  Button
  Button--withShadow
  u-padding-s
  u-color-blueish">
  Button
</div>
```

## `Button--asBlock`

```html
span: 2
dark: true
---
<button class="
  Button
  Button--asBlock
  u-padding-s
  u-color-whitishDim">
  Button
</button>
```

```html
span: 2
dark: true
---
<a href="#" class="
  Button
  Button--asBlock
  u-padding-s
  u-color-whitishDim">
  Button
</a>
```

```html
span: 2
dark: true
---
<div href="#" class="
  Button
  Button--asBlock
  u-padding-s
  u-color-whitishDim">
  Button
</div>
```

## Examples

```html
span: 2
dark: true
---
<div class="
  u-background-blackish
  u-padding-m">
  <button class="
    Button
    Button--asBlock
    u-padding-s
    u-color-whitish">
    Button
  </button>
  <br>
  <button class="
    Button
    Button--asBlock
    u-padding-s
    u-color-whitishDim">
    Button
  </button>
  <br>
  <button class="
    Button
    Button--asBlock
    Button--withTransform
    u-padding-s
    u-color-whitishDim">
    Button
  </button>
  <br>
  <button class="
    Button
    Button--withTransform
    u-padding-s
    u-color-whitish">
    Button
  </button>
</div>
```

```html
span: 2
dark: true
---
<div class="
  u-background-pinkish
  u-padding-m">
  <button class="
    Button
    Button--asBlock
    u-padding-s
    u-shadow-s
    u-color-whitish">
    Button
  </button>
  <br>
  <button class="
    Button
    Button--asBlock
    u-padding-s
    u-shadow-m
    u-color-whitishDim">
    Button
  </button>
  <br>
  <button class="
    Button
    Button--asBlock
    Button--withTransform
    u-padding-s
    u-shadow-l
    u-color-whitishDim">
    Button
  </button>
  <br>
  <button class="
    Button
    Button--withTransform
    u-padding-s
    u-shadow-s
    u-color-whitish">
    Button
  </button>
</div>
```

```html
span: 2
dark: true
---
<div class="
  u-background-blueish
  u-padding-m">
  <button class="
    Button
    Button--asBlock
    u-padding-s
    u-color-whitish">
    Button
  </button>
  <br>
  <button class="
    Button
    Button--asBlock
    u-padding-s
    u-color-whitishDim">
    Button
  </button>
  <br>
  <button class="
    Button
    Button--asBlock
    Button--withTransform
    u-padding-s
    u-color-whitishDim">
    Button
  </button>
  <br>
  <button class="
    Button
    Button--withTransform
    u-padding-s
    u-color-whitish">
    Button
  </button>
</div>
```

```html
span: 2
dark: true
---
<div class="
  u-background-greenish
  u-padding-m">
  <button class="
    Button
    Button--asBlock
    u-padding-s
    u-color-whitish">
    Button
  </button>
  <br>
  <button class="
    Button
    Button--asBlock
    u-padding-s
    u-color-whitishDim
    u-color-whitish@hover">
    Button
  </button>
  <br>
  <button class="
    Button
    Button--asBlock
    Button--withTransform
    u-padding-s
    u-color-whitishDim">
    Button
  </button>
  <br>
  <button class="
    Button
    Button--withTransform
    u-padding-s
    u-color-whitish">
    Button
  </button>
</div>
```

```html
span: 2
dark: true
---
<div class="
  u-background-grayish
  u-padding-m">
  <button class="
    Button
    Button--asBlock
    u-padding-s
    u-color-whitish
    ">
    Button
  </button>
  <br>
  <button class="
    Button
    Button--asBlock
    u-padding-s
    u-color-whitishDim
    u-color-whitish@hover">
    Button
  </button>
  <br>
  <button class="
    Button
    Button--asBlock
    Button--withTransform
    u-padding-s
    u-color-whitishDim">
    Button
  </button>
  <br>
  <button class="
    Button
    Button--withTransform
    u-padding-s
    u-color-whitish">
    Button
  </button>
</div>
```

```html
span: 2
plain: true
---
<div class="u-padding-m">
  <button class="
    Button
    Button--withShadow
    Button--asBlock
    u-padding-s
    u-color-blueish">
    Button
  </button>
  <br>
  <button class="
    Button
    Button--withShadow
    Button--asBlock
    u-padding-s
    u-color-blueish">
    Button
  </button>
  <br>
  <button class="
    Button
    Button--withShadow
    Button--asBlock
    Button--withTransform
    u-padding-s
    u-color-blueishDim">
    Button
  </button>
  <br>
  <button class="
    Button
    Button--withShadow
    Button--withTransform
    u-padding-s
    u-color-blueish">
    Button
  </button>
</div>
```
