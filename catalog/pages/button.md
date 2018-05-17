
## `Button`

By default all `Button`s have animation of background-color on interaction.

```html
span: 2
dark: true
---
<button class="
  Button
  u-pad-h-3
  u-pad-v-5
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
  u-pad-h-3
  u-pad-v-5
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
  u-pad-h-3
  u-pad-v-5
  u-color-whitishDim">
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
  u-pad-h-3
  u-pad-v-5
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
  Button--withTransition
  u-pad-h-3
  u-pad-v-5
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
  Button--withTransition
  u-pad-h-3
  u-pad-v-5
  u-color-whitishDim">
  Button
</div>
```


## `Button--asBlock`

Sets display to block and stretches the button.

```html
span: 2
dark: true
---
<button class="
  Button
  Button--asBlock
  u-pad-h-3
  u-pad-v-5
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
  u-pad-h-3
  u-pad-v-5
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
  u-pad-h-3
  u-pad-v-5
  u-color-whitishDim">
  Button
</div>
```


## What about shadows, background, color?

You can use utility classes for that:

```html
span: 2
---
<button class="
  Button
  Button--asBlock
  u-shadow-m
  u-shadow-m:active
  u-shadow-l:hover
  u-shadow-s
  u-pad-h-3
  u-pad-v-5
  u-mar-b-3
  u-bg-blueish
  u-color-whitish">
  Button
</button>
<button class="
  Button
  u-shadow-m
  u-shadow-m:active
  u-shadow-l:hover
  u-pad-h-3
  u-pad-v-5
  u-bg-blueish
  u-color-blackish">
  Button
</button>
```

```html
span: 2
---
<a href="#" class="
  Button
  Button--asBlock
  u-shadow-m
  u-shadow-m:active
  u-shadow-l:hover
  u-pad-h-3
  u-pad-v-5
  u-mar-b-3
  u-bg-pinkish
  u-color-whitish">
  Button
</a>
<a href="#" class="
  Button
  u-shadow-m
  u-shadow-m:active
  u-shadow-l:hover
  u-pad-h-3
  u-pad-v-5
  u-mar-b-3
  u-bg-pinkish
  u-color-blackish">
  Button
</a>
```

```html
span: 2
---
<div class="
  Button
  Button--asBlock
  u-shadow-m
  u-shadow-m:active
  u-shadow-l:hover
  u-pad-h-3
  u-pad-v-5
  u-mar-b-3
  u-bg-greenish
  u-color-whitish">
  Button
</div>
<div class="
  Button
  u-shadow-m
  u-shadow-m:active
  u-shadow-l:hover
  u-pad-h-3
  u-pad-v-5
  u-bg-greenish
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
  u-bg-blackish
  u-pad-2">
  <button class="
    Button
    Button--asBlock
    u-pad-h-3
    u-pad-v-5
    u-color-whitish">
    Button
  </button>
  <br>
  <button class="
    Button
    Button--asBlock
    u-pad-h-3
    u-pad-v-5
    u-color-whitishDim">
    Button
  </button>
  <br>
  <button class="
    Button
    Button--asBlock
    Button--withTransition
    u-pad-h-3
    u-pad-v-5
    u-color-whitishDim">
    Button
  </button>
  <br>
  <button class="
    Button
    Button--withTransition
    u-pad-h-3
    u-pad-v-5
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
  u-bg-pinkish
  u-pad-2">
  <button class="
    Button
    Button--asBlock
    u-pad-h-3
    u-pad-v-5
    u-shadow-s
    u-color-whitish">
    Button
  </button>
  <br>
  <button class="
    Button
    Button--asBlock
    u-pad-h-3
    u-pad-v-5
    u-shadow-m
    u-color-whitishDim">
    Button
  </button>
  <br>
  <button class="
    Button
    Button--asBlock
    Button--withTransition
    u-pad-h-3
    u-pad-v-5
    u-shadow-l
    u-color-whitishDim">
    Button
  </button>
  <br>
  <button class="
    Button
    Button--withTransition
    u-pad-h-3
    u-pad-v-5
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
  u-bg-blueish
  u-pad-2">
  <button class="
    Button
    Button--asBlock
    u-pad-h-3
    u-pad-v-5
    u-color-whitish">
    Button
  </button>
  <br>
  <button class="
    Button
    Button--asBlock
    u-pad-h-3
    u-pad-v-5
    u-color-whitishDim">
    Button
  </button>
  <br>
  <button class="
    Button
    Button--asBlock
    Button--withTransition
    u-pad-h-3
    u-pad-v-5
    u-color-whitishDim">
    Button
  </button>
  <br>
  <button class="
    Button
    Button--withTransition
    u-pad-h-3
    u-pad-v-5
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
  u-bg-greenish
  u-pad-2">
  <button class="
    Button
    Button--asBlock
    u-pad-h-3
    u-pad-v-5
    u-color-whitish">
    Button
  </button>
  <br>
  <button class="
    Button
    Button--asBlock
    u-pad-h-3
    u-pad-v-5
    u-color-whitishDim
    u-color-whitish:hover">
    Button
  </button>
  <br>
  <button class="
    Button
    Button--asBlock
    Button--withTransition
    u-pad-h-3
    u-pad-v-5
    u-color-whitishDim">
    Button
  </button>
  <br>
  <button class="
    Button
    Button--withTransition
    u-pad-h-3
    u-pad-v-5
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
  u-bg-grayish
  u-pad-2">
  <button class="
    Button
    Button--asBlock
    u-pad-h-3
    u-pad-v-5
    u-color-whitish
    ">
    Button
  </button>
  <br>
  <button class="
    Button
    Button--asBlock
    u-pad-h-3
    u-pad-v-5
    u-color-whitishDim
    u-color-whitish:hover">
    Button
  </button>
  <br>
  <button class="
    Button
    Button--asBlock
    Button--withTransition
    u-pad-h-3
    u-pad-v-5
    u-color-whitishDim">
    Button
  </button>
  <br>
  <button class="
    Button
    Button--withTransition
    u-pad-h-3
    u-pad-v-5
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
  u-bg-whitish
  u-pad-2">
  <button class="
    Button
    Button--asBlock
    u-shadow-m
    u-shadow-m:active
    u-shadow-l:hover
    u-pad-h-3
    u-pad-v-5
    u-color-blueish">
    Button
  </button>
  <br>
  <button class="
    Button
    Button--asBlock
    u-shadow-m
    u-shadow-m:active
    u-shadow-l:hover
    u-pad-h-3
    u-pad-v-5
    u-color-blueish">
    Button
  </button>
  <br>
  <button class="
    Button
    Button--asBlock
    Button--withTransition
    u-shadow-m
    u-shadow-m:active
    u-shadow-l:hover
    u-pad-h-3
    u-pad-v-5
    u-color-blueishDim">
    Button
  </button>
  <br>
  <button class="
    Button
    Button--withTransition
    u-shadow-m
    u-shadow-m:active
    u-shadow-l:hover
    u-pad-h-3
    u-pad-v-5
    u-color-blueish">
    Button
  </button>
</div>
```
