```image
span: 3
src: devportal.png
plain: true
```


```html
<div class="u-padding-l u-backgroundColor-greenish u-color-white u-border-pill">
  Move cursor to the top right corner of this and any similar block, to see `<>` button, which on click will display source code of the block.
</div>
```


# Naming convention

We use BEM like naming convention for components:

```
ComponentName { ... }
ComponentName--componentModifier { ... }
ComponentName-someElement { ... }
ComponentName-someElement--elementModifier { ... }
```

```hint|info
component `ComponentName` should be located at `styles/components/ComponentName.scss`
```

For utility classes we use naming convention like this:

```
u-utilityName
u-utilityName-utilityVariation
u-utilityName-utilityVariation@condition
```
