```image
span: 3
src: devportal.png
plain: true
```

We use BEM like naming convention for components:

```
ComponentName { ... }
ComponentName--componentModifier { ... }
ComponentName-someElement { ... }
ComponentName-someElement--elementModifier { ... }
```

NOTE: component `ComponentName` should be located at `styles/components/ComponentName.scss`

For utility classes we use naming convention like this:

```
u-utilityName
u-utilityName-utilityVariation
u-utilityName-utilityVariation@condition
```
