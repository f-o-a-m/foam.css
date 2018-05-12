# Utility classes

Utility classes are small classes, usually with just one declaration. They allow rapid prototyping of visual elements, but can result in bloated html with bunch of classes. if we have too many classes on an element then we should maybe create new css `component`. but this utility classes allow us to not "over engineer", i.e. you just use utility classes and then if you see some patterns repeated, refactor such repetitions out in an `object` or a `component`

Here you can see some utility classes in various combinations.

```hint|neutral
Take a look at source codes of examples (especially from other pages) to see how they are used in "wild"
```

```
```

# Modular Padding

`pad-1 `
```html
span: 4
---
<div class="
  pad-1
  u-bg-blackish
  u-bdr-pill
  u-c-whitish">
  pad-1 u-bg-blackish u-c-whitish
  u-br-pill
</div>
```

`pad-2`

```html
span: 4
---
<div class="
  pad-2
  u-bg-blackish
  u-bdr-pill
  u-c-whitish">
  pad-2 u-bg-blackish u-c-whitish
  u-br-pill
</div>
```

`pad-3`

```html
span: 4
---
<div class="
  pad-3
  u-bg-blackish
  u-bdr-pill
  u-c-whitish">
  pad-3 u-bg-blackish u-c-whitish
  u-br-pill
</div>
```

`pad-4`

```html
span: 4
---
<div class="
  pad-4
  u-bg-blackish
  u-bdr-pill
  u-c-whitish">
  pad-4 u-bg-blackish u-c-whitish
  u-br-pill
</div>
```

`pad-5`
```html
span: 4
---
<div class="
  pad-5
  u-bg-blackish
  u-bdr-pill
  u-c-whitish">
  pad-5 u-bg-blackish u-c-whitish
  u-br-pill
</div>
```

`pad-6`

```html
span: 4
---
<div class="
  pad-6
  u-bg-blackish
  u-bdr-pill
  u-c-whitish">
  pad-6 u-bg-blackish u-c-whitish
  u-br-pill
</div>
```


`pad-7`

```html
span: 4
---
<div class="
  pad-7
  u-bg-blackish
  u-bdr-pill
  u-c-whitish">
  pad-7 u-bg-blackish u-c-whitish
  u-br-pill
</div>
```


### pad-1

```html
span: 2

---
<div class="
  u-background-blackish
  padad-3
  u-color-whitish
  u-borderRounded">
  pad-3 u-background-blackish u-color-whitish
  u-borderRounded</br>
</div>
```

```html
span: 2
---
<div class="
  u-background-blackish
  padad-4
  u-color-whitish
  u-borderRounded
  ">
  pad-4 u-background-blackish u-color-whitish
  u-borderRounded
</div>
```

```html
span: 3
---
<div class="
  u-background-blackish
  pad-5
  u-color-whitish
  u-borderRounded
  ">
  pad-5 u-background-blackish u-color-whitish
  u-borderRounded
</div>
```

```html
span: 3
---
<div class="
  u-background-blackish
  pad-7
  u-color-whitish
  u-borderRounded
  ">
  pad-7 u-background-blackish u-color-whitish
  u-borderRounded
</div>
```

```html
span: 3
---
<div class="
  u-background-blackish
  pad-t-7
  u-color-whitish
  u-borderRounded
  ">
  pad-t-7 u-background-blackish u-color-whitish
  u-borderRounded
</div>
```


```html
span: 3
---
<div class="
  u-background-blackish
  pad-b-7
  u-color-whitish
  u-borderRounded
  ">
  pad-t-7 u-background-blackish u-color-whitish
  u-borderRounded
</div>
```

```html
span: 3
---
<div class="
  u-background-blackish
  pad-h-7
  u-color-whitish
  u-borderRounded
  ">
  pad-h-7 u-background-blackish u-color-whitish
  u-borderRounded
</div>
```

```html
span: 3
---
<div class="
  u-background-blackish
  pad-v-7
  u-color-whitish
  u-borderRounded
  ">
  pad-v-7 u-background-blackish u-color-whitish
  u-borderRounded
</div>
```
