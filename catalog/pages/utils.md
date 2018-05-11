# Utility classes

Utility classes are small classes, usually with just one declaration. They allow rapid prototyping of visual elements, but can result in bloated html with bunch of classes. if we have too many classes on an element then we should maybe create new css `component`. but this utility classes allow us to not "over engineer", i.e. you just use utility classes and then if you see some patterns repeated, refactor such repetitions out in an `object` or a `component`

Here you can see some utility classes in various combinations.

```hint|neutral
Take a look at source codes of examples (especially from other pages) to see how they are used in "wild"
```

```html
span: 2
---
<div class="
  u-padding-m
  u-borderRadius-m
  u-background-blackish
  u-color-whitish
  u-shadow-s
  u-shadow-l@hover">
  u-padding-m<br>
  u-borderRadius-m<br>
  u-background-blackish<br>
  u-color-whitish<br>
  u-shadow-s<br>
  u-shadow-l@hover
</div>
```

```html
span: 2
---
<div class="
  u-padding-m
  u-borderRadius-m
  u-background-pinkish
  u-color-whitish
  u-shadow-m
  u-shadow-l@hover">
  u-padding-m<br>
  u-borderRadius-m<br>
  u-background-pinkish<br>
  u-color-whitish<br>
  u-shadow-m<br>
  u-shadow-l@hover
</div>
```

```html
span: 2
---
<div class="
  u-padding-m
  u-borderRadius-m
  u-background-blueish
  u-color-whitish
  u-shadow-l
  u-shadow-s@hover">
  u-padding-m<br>
  u-borderRadius-m<br>
  u-background-blueish<br>
  u-color-whitish<br>
  u-shadow-l<br>
  u-shadow-s@hover
</div>
```

```html
span: 3
---
<div class="
  u-padding-m
  u-borderRadius-m
  u-background-greenish
  u-color-whitishDim
  u-color-whitish@hover
  u-shadow-l
  u-shadow-s@hover">
  u-padding-m<br>
  u-borderRadius-m<br>
  u-background-greenish<br>
  u-color-whitishDim<br>
  u-color-whitish@hover<br>
  u-shadow-l<br>
  u-shadow-s@hover
</div>
```

```html
span: 3
---
<div class="
  u-padding-m
  u-borderRadius-m
  u-background-grayish
  u-color-whitishDim
  u-color-whitish@hover
  u-shadow-l
  u-shadow-s@hover">
  u-padding-m<br>
  u-borderRadius-m<br>
  u-background-grayish<br>
  u-color-whitishDim<br>
  u-color-whitish@hover<br>
  u-shadow-l<br>
  u-shadow-s@hover
</div>
```


```html
span: 3
---
<div class="
  u-pad-1
  u-borderRounded
  u-background-blackish
  u-color-whitish">
  u-padding-s u-borderRadius-m u-background-blackish u-color-whitish
</div>
```

```html
span: 3
---
<div class="
  u-pad-4
  u-borderRounded
  u-background-blackish
  u-color-whitish">
  u-padding-m u-borderRadius-m u-background-blackish u-color-whitish
</div>
```


```
```

```
```

```
```

# Modular Padding

```html
span: 2
---
<div class="
  u-pad-1
  u-background-blackish
  u-borderRounded
  u-color-whitish">
  u-pad-1 u-background-blackish u-color-whitish
  u-borderRounded
</div>
```
### u-pad-1

```html
span: 2

---
<div class="
  u-background-blackish
  u-pad-3
  u-color-whitish
  u-borderRounded">
  u-pad-3 u-background-blackish u-color-whitish
  u-borderRounded</br>
</div>
```


```html
span: 2
---
<div class="
  u-background-blackish
  u-pad-4
  u-color-whitish
  u-borderRounded
  ">
  u-pad-4 u-background-blackish u-color-whitish
  u-borderRounded
</div>
```

```html
span: 3
---
<div class="
  u-background-blackish
  u-pad-5
  u-color-whitish
  u-borderRounded
  ">
  u-pad-5 u-background-blackish u-color-whitish
  u-borderRounded
</div>
```

```html
span: 3
---
<div class="
  u-background-blackish
  u-pad-7
  u-color-whitish
  u-borderRounded
  ">
  u-pad-7 u-background-blackish u-color-whitish
  u-borderRounded
</div>
```

```html
span: 3
---
<div class="
  u-background-blackish
  u-pad-t-7
  u-color-whitish
  u-borderRounded
  ">
  u-pad-t-7 u-background-blackish u-color-whitish
  u-borderRounded
</div>
```


```html
span: 3
---
<div class="
  u-background-blackish
  u-pad-b-7
  u-color-whitish
  u-borderRounded
  ">
  u-pad-t-7 u-background-blackish u-color-whitish
  u-borderRounded
</div>
```

```html
span: 3
---
<div class="
  u-background-blackish
  u-pad-h-7
  u-color-whitish
  u-borderRounded
  ">
  u-pad-h-7 u-background-blackish u-color-whitish
  u-borderRounded
</div>
```

```html
span: 3
---
<div class="
  u-background-blackish
  u-pad-v-7
  u-color-whitish
  u-borderRounded
  ">
  u-pad-v-7 u-background-blackish u-color-whitish
  u-borderRounded
</div>
```

