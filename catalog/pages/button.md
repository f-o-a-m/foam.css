
## `Button`

By default all `Button`s border which is rounded

```html
span: 2
dark: true
---
<button class="
  Button
  u-paddingHorizontal-l
  u-paddingVertical-m
  u-color-white.6">
  Button
</button>
```

```html
span: 2
dark: true
---
<a href="#" class="
  Button
  u-paddingHorizontal-l
  u-paddingVertical-m
  u-color-white.6">
  Button
</a>
```


```html
span: 2
dark: true
---
<div href="#" class="
  Button
  u-paddingHorizontal-l
  u-paddingVertical-m
  u-color-white.6">
  Button
</div>
```


## `Button--withDim`

Adds very opaque white overlay

```html
span: 2
dark: true
---
<button class="
  Button
  Button--withDim
  u-paddingHorizontal-l
  u-paddingVertical-m
  u-color-white.6">
  Button
</button>
<button class="
  Button
  Button--withDim
  u-paddingHorizontal-l
  u-paddingVertical-m
  u-backgroundColor-greenish
  u-color-white">
  Button
</button>
```

```html
span: 2
dark: true
---
<a href="#" class="
  Button
  Button--withDim
  u-paddingHorizontal-l
  u-paddingVertical-m
  u-color-white.6">
  Button
</a>
<a href="#" class="
  Button
  Button--withDim
  u-paddingHorizontal-l
  u-paddingVertical-m
  u-backgroundColor-pinkish
  u-color-white">
  Button
</a>
```


```html
span: 2
dark: true
---
<div href="#" class="
  Button
  Button--withDim
  u-paddingHorizontal-l
  u-paddingVertical-m
  u-color-white.6">
  Button
</div>
<div href="#" class="
  Button
  Button--withDim
  u-paddingHorizontal-l
  u-paddingVertical-m
  u-backgroundColor-blueish
  u-color-white">
  Button
</div>
```

## `Button--withTransition`

Adds transition animation on interaction.

```html
span: 2
dark: true
---
<button class="
  Button
  Button--withTransition
  u-paddingHorizontal-l
  u-paddingVertical-m
  u-color-white.6">
  Button
</button>
```

```html
span: 2
dark: true
---
<a href="#" class="
  Button
  Button--withTransition
  u-paddingHorizontal-l
  u-paddingVertical-m
  u-color-white.6">
  Button
</a>
```


```html
span: 2
dark: true
---
<div href="#" class="
  Button
  Button--withTransition
  u-paddingHorizontal-l
  u-paddingVertical-m
  u-color-white.6">
  Button
</div>
```

## What about shadows, background, color, width?

You can use utility classes for that:

```html
span: 2
---
<button class="
  Button
  u-width-full
  u-shadow-m
  u-shadow-m:active
  u-shadow-l:hover
  u-shadow-s
  u-paddingHorizontal-l
  u-paddingVertical-m
  u-marginBottom-l
  u-backgroundColor-blueish
  u-color-white">
  Button
</button>
<button class="
  Button
  u-shadow-m
  u-shadow-m:active
  u-shadow-l:hover
  u-paddingHorizontal-l
  u-paddingVertical-m
  u-backgroundColor-blueish
  u-color-blackish">
  Button
</button>
```

```html
span: 2
---
<a href="#" class="
  Button
  u-width-full
  u-shadow-m
  u-shadow-m:active
  u-shadow-l:hover
  u-paddingHorizontal-l
  u-paddingVertical-m
  u-marginBottom-l
  u-backgroundColor-pinkish
  u-color-white">
  Button
</a>
<a href="#" class="
  Button
  u-shadow-m
  u-shadow-m:active
  u-shadow-l:hover
  u-paddingHorizontal-l
  u-paddingVertical-m
  u-marginBottom-l
  u-backgroundColor-pinkish
  u-color-blackish">
  Button
</a>
```

```html
span: 2
---
<div class="
  Button
  u-width-full
  u-shadow-m
  u-shadow-m:active
  u-shadow-l:hover
  u-paddingHorizontal-l
  u-paddingVertical-m
  u-marginBottom-l
  u-backgroundColor-greenish
  u-color-white">
  Button
</div>
<div class="
  Button
  u-shadow-m
  u-shadow-m:active
  u-shadow-l:hover
  u-paddingHorizontal-l
  u-paddingVertical-m
  u-backgroundColor-greenish
  u-color-blackish">
  Button
</div>
```

## Examples

```html
span: 2
dark: true
---
<div class="
  u-backgroundColor-blackish
  u-padding-l">
  <button class="
    Button
    Button--withDim
    u-width-full
    u-paddingHorizontal-l
    u-paddingVertical-m
    u-color-white
    u-marginBottom-l">
    Button
  </button>
  <button class="
    Button
    Button--withDim
    u-width-full
    u-paddingHorizontal-l
    u-paddingVertical-m
    u-color-white.6
    u-marginBottom-l">
    Button
  </button>
  <button class="
    Button
    Button--withDim
    u-width-full
    Button--withTransition
    u-paddingHorizontal-l
    u-paddingVertical-m
    u-color-white.6
    u-marginBottom-l">
    Button
  </button>
  <button class="
    Button
    Button--withDim
    Button--withTransition
    u-paddingHorizontal-l
    u-paddingVertical-m
    u-color-white">
    Button
  </button>
</div>
```

```html
span: 2
dark: true
---
<div class="
  u-backgroundColor-pinkish
  u-padding-l">
  <button class="
    Button
    Button--withDim
    u-width-full
    u-paddingHorizontal-l
    u-paddingVertical-m
    u-shadow-s
    u-color-white
    u-marginBottom-l">
    Button
  </button>
  <button class="
    Button
    Button--withDim
    u-width-full
    u-paddingHorizontal-l
    u-paddingVertical-m
    u-shadow-m
    u-color-white.6
    u-marginBottom-l">
    Button
  </button>
  <button class="
    Button
    Button--withDim
    u-width-full
    Button--withTransition
    u-paddingHorizontal-l
    u-paddingVertical-m
    u-shadow-l
    u-color-white.6
    u-marginBottom-l">
    Button
  </button>
  <button class="
    Button
    Button--withDim
    Button--withTransition
    u-paddingHorizontal-l
    u-paddingVertical-m
    u-shadow-s
    u-color-white">
    Button
  </button>
</div>
```

```html
span: 2
dark: true
---
<div class="
  u-backgroundColor-blueish
  u-padding-l">
  <button class="
    Button
    Button--withDim
    u-width-full
    u-paddingHorizontal-l
    u-paddingVertical-m
    u-color-white
    u-marginBottom-l">
    Button
  </button>
  <button class="
    Button
    Button--withDim
    u-width-full
    u-paddingHorizontal-l
    u-paddingVertical-m
    u-color-white.6
    u-marginBottom-l">
    Button
  </button>
  <button class="
    Button
    Button--withDim
    u-width-full
    Button--withTransition
    u-paddingHorizontal-l
    u-paddingVertical-m
    u-color-white.6
    u-marginBottom-l">
    Button
  </button>
  <button class="
    Button
    Button--withDim
    Button--withTransition
    u-paddingHorizontal-l
    u-paddingVertical-m
    u-color-white">
    Button
  </button>
</div>
```

```html
span: 2
dark: true
---
<div class="
  u-backgroundColor-greenish
  u-padding-l">
  <button class="
    Button
    Button--withDim
    u-width-full
    u-paddingHorizontal-l
    u-paddingVertical-m
    u-color-white
    u-marginBottom-l">
    Button
  </button>
  <button class="
    Button
    Button--withDim
    u-width-full
    u-paddingHorizontal-l
    u-paddingVertical-m
    u-color-white.6
    u-color-white:hover
    u-marginBottom-l">
    Button
  </button>
  <button class="
    Button
    Button--withDim
    u-width-full
    Button--withTransition
    u-paddingHorizontal-l
    u-paddingVertical-m
    u-color-white.6
    u-marginBottom-l">
    Button
  </button>
  <button class="
    Button
    Button--withDim
    Button--withTransition
    u-paddingHorizontal-l
    u-paddingVertical-m
    u-color-white">
    Button
  </button>
</div>
```

```html
span: 2
dark: true
---
<div class="
  u-backgroundColor-grayish
  u-padding-l">
  <button class="
    Button
    Button--withDim
    u-width-full
    u-paddingHorizontal-l
    u-paddingVertical-m
    u-color-white
    u-marginBottom-l">
    Button
  </button>
  <button class="
    Button
    Button--withDim
    u-width-full
    u-paddingHorizontal-l
    u-paddingVertical-m
    u-color-white.6
    u-color-white:hover
    u-marginBottom-l">
    Button
  </button>
  <button class="
    Button
    Button--withDim
    u-width-full
    Button--withTransition
    u-paddingHorizontal-l
    u-paddingVertical-m
    u-color-white.6
    u-marginBottom-l">
    Button
  </button>
  <button class="
    Button
    Button--withDim
    Button--withTransition
    u-paddingHorizontal-l
    u-paddingVertical-m
    u-color-white">
    Button
  </button>
</div>
```

```html
span: 2
dark: true
---
<div class="
  u-backgroundColor-white
  u-padding-l">
  <button class="
    Button
    Button--withDim
    u-width-full
    u-shadow-m
    u-shadow-m:active
    u-shadow-l:hover
    u-paddingHorizontal-l
    u-paddingVertical-m
    u-color-blueish
    u-marginBottom-l">
    Button
  </button>
  <button class="
    Button
    Button--withDim
    u-width-full
    u-shadow-m
    u-shadow-m:active
    u-shadow-l:hover
    u-paddingHorizontal-l
    u-paddingVertical-m
    u-color-blueish
    u-marginBottom-l">
    Button
  </button>
  <button class="
    Button
    Button--withDim
    u-width-full
    Button--withTransition
    u-shadow-m
    u-shadow-m:active
    u-shadow-l:hover
    u-paddingHorizontal-l
    u-paddingVertical-m
    u-color-blueishDim
    u-marginBottom-l">
    Button
  </button>
  <button class="
    Button
    Button--withDim
    Button--withTransition
    u-shadow-m
    u-shadow-m:active
    u-shadow-l:hover
    u-paddingHorizontal-l
    u-paddingVertical-m
    u-color-blueish">
    Button
  </button>
</div>
```
