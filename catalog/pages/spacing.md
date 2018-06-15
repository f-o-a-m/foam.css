# Spacing

there are 4 spacing "units" `xxl`, `xl`, `l`, `m`, `s`

all existing margin/padding classes "Brace expansion" format:
`echo u-margin{,Top,Bottom,Left,Right}-{xxl, xl,l,m,s}`
`echo u-padding{,Top,Bottom,Left,Right,Horizontal,Vertical}-{xxl,xl,l,m,s}`

```html
span: 5
---
<div class="u-padding-xxl u-backgroundColor-blackish u-marginBottom-xxl"><div class="u-backgroundColor-pinkish">u-padding-xxl u-marginBottom-xxl</div></div>
<div class="u-padding-xl u-backgroundColor-blackish u-marginBottom-xl"><div class="u-backgroundColor-pinkish">u-padding-xl u-marginBottom-xl</div></div>
<div class="u-padding-l u-backgroundColor-blackish u-marginBottom-l"><div class="u-backgroundColor-pinkish">u-padding-l u-marginBottom-l</div></div>
<div class="u-padding-m u-backgroundColor-blackish u-marginBottom-m"><div class="u-backgroundColor-pinkish">u-padding-m u-marginBottom-m</div></div>
<div class="u-padding-s u-backgroundColor-blackish u-marginBottom-s"><div class="u-backgroundColor-pinkish">u-padding-s u-marginBottom-s</div></div>
<hr>
```
