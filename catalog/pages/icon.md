# `Icon`

An Icon is a square with side-length of `1em`, it's an `inline-block`, and using it's modifier classes different character will be inserted as it's content, which is centered horizontally and sits on **baseline**. if baseline is not fine, `Icon--altLH` or `Icon--altTC` could be used to center an Icon vertically.

```html
<div style="font-size:2em">
  Some + - ⦿ 🔎 < fluffy
  <span class="Icon Icon--plus u-background-pinkish"></span>
  <span class="Icon Icon--minus u-background-pinkish"></span>
  <span class="Icon Icon--circle u-background-pinkish"></span>
  <span class="Icon Icon--magnifier u-background-pinkish"></span>
  <span class="Icon Icon--arrowLeft u-background-pinkish"></span>
  around
</div>
```

## `Icon--altLH`

By using this class an Icon will be to centered vertically using `line-height: 1em`

```html
<div style="font-size:2em">
  Some + - ⦿ 🔎 < fluffy
  <span class="Icon Icon--altLH Icon--plus u-background-pinkish"></span>
  <span class="Icon Icon--altLH Icon--minus u-background-pinkish"></span>
  <span class="Icon Icon--altLH Icon--circle u-background-pinkish"></span>
  <span class="Icon Icon--altLH Icon--magnifier u-background-pinkish"></span>
  <span class="Icon Icon--altLH Icon--arrowLeft u-background-pinkish"></span>
  around
</div>
```


## `Icon--altTC`

By using this class an Icon will be to centered vertically using `display: table-cell; vertical-align: middle;`

```html
<div style="font-size:2em">
  Some + - ⦿ 🔎 < fluffy
  <span class="Icon Icon--altTC Icon--plus u-background-pinkish"></span>
  <span class="Icon Icon--altTC Icon--minus u-background-pinkish"></span>
  <span class="Icon Icon--altTC Icon--circle u-background-pinkish"></span>
  <span class="Icon Icon--altTC Icon--magnifier u-background-pinkish"></span>
  <span class="Icon Icon--altTC Icon--arrowLeft u-background-pinkish"></span>
  around
</div>
```
