
# Register POI card

```html
span: 3
---
<div class="u-backgroundColor-white u-borderRadius-l u-padding-l u-lineHeight-m" style="max-width: 380px;">
  <div class="Grid u-width-full u-marginBottom-l">
    <div class="Grid-block Grid-block--weight1 u-fontSize-xl ">
      Register Point of Interest
    </div>
    <div class="Grid-block Grid-block--alignCenter u-width-auto u-lineHeight-s">
      <button class="u-opacity.5 u-opacity1:hover"><svg class="Icon"><use xlink:href="./assets/icons.svg#cross"></svg></button>
    </div>
  </div>
  <label class="u-marginBottom-l">
    <div class="u-fontWeight-bold u-marginBottom-m">
      Name
    </div>
    <input type="text" placeholder="Name of POI" class="u-paddingHorizontal-l u-paddingVertical-m u-borderRadius-l u-shadow-black u-shadow-currentColor:focus u-outline-none u-width-full">
  </label>
  <label class="u-marginBottom-l">
    <div class="u-fontWeight-bold u-marginBottom-m">
      Address
    </div>
    <div class="u-position-relative">
      <textarea rows="2" type="text" placeholder="Physical Address of POI" class="u-paddingHorizontal-l u-paddingTop-m u-paddingBottom-xl u-width-full u-borderRadius-l u-shadow-black u-shadow-currentColor:focus u-outline-none"></textarea>
      <div class="u-position-absolute u-marginRight-l u-marginLeft-l u-marginBottom-m u-truncate u-fontSize-s u-textAlign-right u-color-gray u-bottom-0 u-left-0 u-right-0 u-lineHeight-s">CSC Address: be8b92dc8539c44aa93738b45dbe689256a59deb</div>
    </div>
  </label>
  <label class="u-marginBottom-l">
    <div class="u-fontWeight-bold u-marginBottom-m">
      Description
    </div>
    <div class="u-position-relative">
      <textarea rows="2" type="text" placeholder="Write a good description of the POI here. Longer entries will cost more gas." class="u-paddingHorizontal-l u-paddingTop-m u-paddingBottom-xl u-width-full u-borderRadius-l u-shadow-black u-shadow-currentColor:focus u-outline-none"></textarea>
      <div class="u-position-absolute u-marginRight-l u-marginLeft-l u-marginBottom-m u-truncate u-fontSize-s u-textAlign-right u-color-gray u-bottom-0 u-left-0 u-right-0 u-lineHeight-s">Gas cost: .0000</div>
    </div>
  </label>
  <p class="u-fontWeight-bold u-marginBottom-m">
    Tags 
  </p>
  <p class="u-marginBottom-xl">
    <label tabindex=0 class="u-shadow-black:focus u-outline-none u-display-inlineBlock u-cursor-pointer u-paddingHorizontal-m u-paddingVertical-s u-border-pill u-backgroundColor-whiteDark u-backgroundColor-grayLight:hover u-color-gray u-color-white:hover u-marginRight-m u-marginBottom-m">Art <input class="u-display-none" type="checkbox"></label><!--
#--><label tabindex=0 class="u-shadow-black:focus u-outline-none u-display-inlineBlock u-cursor-pointer u-paddingHorizontal-m u-paddingVertical-s u-border-pill u-backgroundColor-blueish u-backgroundColor-grayLight:hover u-color-white u-color-white:hover u-marginRight-m u-marginBottom-m">Food <input class="u-display-none" type="checkbox" checked></label><!--
#--><label tabindex=0 class="u-shadow-black:focus u-outline-none u-display-inlineBlock u-cursor-pointer u-paddingHorizontal-m u-paddingVertical-s u-border-pill u-backgroundColor-whiteDark u-backgroundColor-grayLight:hover u-color-gray u-color-white:hover u-marginRight-m u-marginBottom-m">Retail <input class="u-display-none" type="checkbox"></label><!--
#--><label tabindex=0 class="u-shadow-black:focus u-outline-none u-display-inlineBlock u-cursor-pointer u-paddingHorizontal-m u-paddingVertical-s u-border-pill u-backgroundColor-whiteDark u-backgroundColor-grayLight:hover u-color-gray u-color-white:hover u-marginRight-m u-marginBottom-m">Health <input class="u-display-none" type="checkbox"></label><!--
#--><label tabindex=0 class="u-shadow-black:focus u-outline-none u-display-inlineBlock u-cursor-pointer u-paddingHorizontal-m u-paddingVertical-s u-border-pill u-backgroundColor-whiteDark u-backgroundColor-grayLight:hover u-color-gray u-color-white:hover u-marginRight-m u-marginBottom-m">Work <input class="u-display-none" type="checkbox"></label><!--
#--><label tabindex=0 class="u-shadow-black:focus u-outline-none u-display-inlineBlock u-cursor-pointer u-paddingHorizontal-m u-paddingVertical-s u-border-pill u-backgroundColor-whiteDark u-backgroundColor-grayLight:hover u-color-gray u-color-white:hover u-marginRight-m u-marginBottom-m">Banking <input class="u-display-none" type="checkbox"></label><!--
#--><label tabindex=0 class="u-shadow-black:focus u-outline-none u-display-inlineBlock u-cursor-pointer u-paddingHorizontal-m u-paddingVertical-s u-border-pill u-backgroundColor-whiteDark u-backgroundColor-grayLight:hover u-color-gray u-color-white:hover u-marginRight-m u-marginBottom-m">Nightlife <input class="u-display-none" type="checkbox"></label>
  </p>
  <label class="u-marginBottom-l">
    <div class="u-fontWeight-bold u-marginBottom-m">
      Phone
    </div>
    <input type="text" placeholder="Phone number associated with POI" class="u-paddingHorizontal-l u-paddingVertical-m u-borderRadius-l u-shadow-black u-shadow-currentColor:focus u-outline-none u-width-full">
  </label>
  <label class="u-marginBottom-l">
    <div class="u-fontWeight-bold u-marginBottom-m">
      Web
    </div>
    <input type="text" placeholder="Website associated with POI" class="u-paddingHorizontal-l u-paddingVertical-m u-borderRadius-l u-shadow-black u-shadow-currentColor:focus u-outline-none u-width-full">
  </label>
  <label class="u-marginBottom-l">
    <div class="u-fontWeight-bold u-marginBottom-s">
      FST to be staked on POI
    </div>
    <div class="u-fontSize-xs u-marginBottom-m">
      A minimum of 1000 FST is needed
    </div>
    <div class="u-position-relative">
      <input min="1000" type="number" placeholder="1000" value="1000" class="u-fontSize-xxl u-textAlign-center u-paddingHorizontal-l u-paddingVertical-l u-borderRadius-l u-shadow-black u-shadow-currentColor:focus u-outline-none u-width-full u-lineHeight-s">
      <div class="u-position-absolute u-marginRight-l u-marginLeft-l u-marginBottom-m u-truncate u-fontSize-s u-textAlign-right u-color-gray u-bottom-0 u-left-0 u-right-0 u-lineHeight-s">Gas cost: .0000</div>
    </div>
  </label>
  <button class="
    Button
    u-width-full
    Button--withTransition
    Button--dark
    u-borderRadius-m
    u-shadow-s
    u-shadow-m:hover
    u-shadow-s:active
    u-paddingHorizontal-l
    u-paddingVertical-m
    u-backgroundColor-greenish
    u-color-white
    ">
    Deposit FST using Metamask
  </button>
</div>
```


# Create a Signal card

```html
span: 3
---
<div class="u-backgroundColor-white u-borderRadius-l u-padding-l u-lineHeight-m" style="max-width: 380px;">
  <div class="Grid u-width-full u-marginBottom-l">
    <div class="Grid-block Grid-block--weight1 u-fontSize-xl ">
      Create a Signal
    </div>
    <div class="Grid-block Grid-block--alignCenter u-width-auto u-lineHeight-s">
      <button class="u-opacity.5 u-opacity1:hover"><svg class="Icon"><use xlink:href="./assets/icons.svg#cross"></svg></button>
    </div>
  </div>
  <label class="u-marginBottom-l">
    <div class="u-fontWeight-bold u-marginBottom-m">
      Name
    </div>
    <input type="text" placeholder="Name of Signal" class="u-paddingHorizontal-l u-paddingVertical-m u-borderRadius-l u-shadow-black u-shadow-currentColor:focus u-outline-none u-width-full">
  </label>
  <label class="u-marginBottom-l">
    <div class="u-fontWeight-bold u-marginBottom-m">
      Address
    </div>
    <div class="u-position-relative">
      <textarea rows="2" type="text" placeholder="Physical Address of Signal" class="u-paddingHorizontal-l u-paddingTop-m u-paddingBottom-xl u-width-full u-borderRadius-l u-shadow-black u-shadow-currentColor:focus u-outline-none"></textarea>
      <div class="u-position-absolute u-marginRight-l u-marginLeft-l u-marginBottom-m u-truncate u-fontSize-s u-textAlign-right u-color-gray u-bottom-0 u-left-0 u-right-0 u-lineHeight-s">CSC Address: be8b92dc8539c44aa93738b45dbe689256a59deb</div>
    </div>
  </label>
  <label class="u-marginBottom-l">
    <div class="u-fontWeight-bold u-marginBottom-s">
      FST to be staked on Signal
    </div>
    <div class="u-fontSize-xs u-marginBottom-m">
      A minimum of 1000 FST is needed
    </div>
    <div class="u-position-relative">
      <input min="1000" type="number" placeholder="1000" value="1000" class="u-fontSize-xxl u-textAlign-center u-paddingHorizontal-l u-paddingVertical-l u-borderRadius-l u-shadow-black u-shadow-currentColor:focus u-outline-none u-width-full u-lineHeight-s">
      <div class="u-position-absolute u-marginRight-l u-marginLeft-l u-marginBottom-m u-truncate u-fontSize-s u-textAlign-right u-color-gray u-bottom-0 u-left-0 u-right-0 u-lineHeight-s">Gas cost: .0000</div>
    </div>
  </label>
  <button class="
    Button
    u-width-full
    Button--withTransition
    Button--dark
    u-borderRadius-m
    u-shadow-s
    u-shadow-m:hover
    u-shadow-s:active
    u-paddingHorizontal-l
    u-paddingVertical-m
    u-backgroundColor-goldish
    u-color-white
    ">
    Deposit FST using Metamask
  </button>
</div>
```







# View POI card

```html
span: 3
---
<div class="u-backgroundColor-white u-borderRadius-l u-padding-l u-lineHeight-m" style="max-width: 380px;">
  <div class="Grid u-width-full u-marginBottom-m">
    <div class="Grid-block Grid-block--weight1 u-fontSize-xl ">
      New Lab
    </div>
    <div class="Grid-block Grid-block--alignCenter u-width-auto u-lineHeight-s">
      <button class="u-opacity.5 u-opacity1:hover"><svg class="Icon"><use xlink:href="./assets/icons.svg#cross"></svg></button>
    </div>
  </div>
  <p class="u-marginBottom-m">
    Coworking Space
  </p>
  <p class="u-marginBottom-s u-color-greenish">
    1275 FST Staked
  </p>
  <p class="u-marginBottom-s u-color-pinkish">
    1275 FST Staked
  </p>
  <p class="u-marginBottom-l u-color-blueish">
    1275 FST Staked
  </p>
  <button class="
    Button
    u-width-full
    u-shadow-s
    u-paddingHorizontal-l
    u-paddingVertical-m
    u-marginBottom-m
    u-backgroundColor-greenish
    u-color-white
    u-fontWeight-regular
    u-textAlign-left
    ">
    <span class="Grid u-width-full">
      <span class="Grid-block Grid-block--weight1">
        Verified Point of Interest
      </span>
      <span class="Grid-block u-width-auto">
        <svg class="Icon u-fontSize-l"><use xlink:href="./assets/icons.svg#caretDown"></svg>
      </span>
    </span>
  </button>
  <button class="
    Button
    u-width-full
    u-shadow-s
    u-paddingHorizontal-l
    u-paddingVertical-m
    u-marginBottom-m
    u-backgroundColor-pinkish
    u-color-white
    u-fontWeight-regular
    u-textAlign-left
    ">
    <span class="Grid u-width-full">
      <span class="Grid-block Grid-block--weight1">
        Challenged Point of Interest
      </span>
      <span class="Grid-block u-width-auto">
        <svg class="Icon u-fontSize-l"><use xlink:href="./assets/icons.svg#caretDown"></svg>
      </span>
    </span>
  </button>
  <button class="
    Button
    u-width-full
    u-shadow-s
    u-paddingHorizontal-l
    u-paddingVertical-m
    u-marginBottom-xxl
    u-backgroundColor-blueish
    u-color-white
    u-fontWeight-regular
    u-textAlign-left
    ">
    <span class="Grid u-width-full">
      <span class="Grid-block Grid-block--weight1">
        Pending Point of Interest
      </span>
      <span class="Grid-block u-width-auto">
        <svg class="Icon u-fontSize-l"><use xlink:href="./assets/icons.svg#caretDown"></svg>
      </span>
    </span>
  </button>
  <div class="Grid u-marginBottom-m">
    <div class="Grid-block u-width-8/12 u-fontWeight-bold">
      Address
    </div>
    <div class="Grid-block u-width-4/12 u-color-gray u-truncate">#be8b92dc8539c44aa93738b45dbe689256a59deb</div>
  </div>
  <p class="u-marginBottom-xl">
    19 Morris Avenue Bldg 128,<br>
    Brooklyn, NY 11205<br>
  </p>
  <p class="u-fontWeight-bold u-marginBottom-m">
    Description
  </p>
  <p class="u-marginBottom-m">
    Co-Working space in the Brooklyn Navy Yard. A hub for startups working in emergent markets. https://newlab.com/
  </p>
  <p class="u-marginBottom-m u-textAlign-right">
    <button class="u-color-gray u-color-black:hover">Show more</button>
  </p>
  <p class="u-fontWeight-bold u-marginBottom-m">
    Tags
  </p>
  <p class="u-marginBottom-xl">
    <span class="
      u-display-inlineBlock
      u-paddingHorizontal-m
      u-paddingVertical-s
      u-border-pill
      u-backgroundColor-whiteDark
      u-color-gray
      u-marginRight-s
      ">Workplace</span><!--
#--><span class="
      u-display-inlineBlock
      u-paddingHorizontal-m
      u-paddingVertical-s
      u-border-pill
      u-backgroundColor-whiteDark
      u-color-gray
      ">Technology</span>
  </p>
  <p class="u-marginBottom-l"><span class="u-fontWeight-bold">Phone:</span> (718) 488-7005</p>
  <p><span class="u-fontWeight-bold">Web:</span> newlab.com</p>
</div>
```





# POI Details expanded


```html
span: 2
---
<div class="
  u-borderRadius-l
  u-width-full
  u-shadow-s
  u-paddingHorizontal-l
  u-paddingVertical-m
  u-marginBottom-m
  u-backgroundColor-blueish
  u-color-white
  u-fontWeight-regular
  u-textAlign-left
  u-lineHeight-m
  ">
  <div class="Grid u-width-full u-paddingBottom-xl">
    <div class="Grid-block Grid-block--weight1">
      Pending Point of Interest
    </div>
    <div class="Grid-block u-width-auto">
      <svg class="Icon u-fontSize-l"><use xlink:href="./assets/icons.svg#caretUp"></svg>
    </div>
  </div>
  <div class="u-backgroundColor-white.1 u-borderRadius-m u-paddingVertical-m u-paddingHorizontal-l u-textAlign-center u-marginBottom-xxl">
    New Lab was registered three days ago.
  </div>
  <div class="u-marginBottom-m">
    Total FST Invested in New Lab
  </div>
  <div class="u-marginBottom-xxl u-fontSize-xxl">
    1,275<span class="u-verticalAlign-top u-fontSize-xs u-fontWeight-bold u-fontStyle-italic">FST</span>
  </div>
  <button class="
    Button
    u-width-full
    Button--withTransition
    u-borderRadius-m
    u-shadow-s
    u-shadow-m:hover
    u-shadow-s:active
    u-paddingHorizontal-l
    u-paddingVertical-m
    u-backgroundColor-pinkish
    u-color-white
    u-marginBottom-m
    ">
    Challenge New Lab’s validity
  </button>
  <div class="u-fontSize-xs u-textAlign-center">
    Time left to challenge: 9<span class="u-fontStyle-italic u-sup">D</span> 14<span class="u-fontStyle-italic u-sup">HR</span> 19<span class="u-fontStyle-italic u-sup">MIN</span>
  </div>
</div>
```



```html
span: 2
---
<div class="
  u-borderRadius-l
  u-width-full
  u-shadow-s
  u-paddingHorizontal-l
  u-paddingVertical-m
  u-marginBottom-m
  u-backgroundColor-greenish
  u-color-white
  u-fontWeight-regular
  u-textAlign-left
  u-lineHeight-m
  ">
  <div class="Grid u-width-full u-paddingBottom-xl">
    <div class="Grid-block Grid-block--weight1">
      Verified Point of Interest
    </div>
    <div class="Grid-block u-width-auto">
      <svg class="Icon u-fontSize-l"><use xlink:href="./assets/icons.svg#caretUp"></svg>
    </div>
  </div>
  <div class="u-backgroundColor-white.1 u-borderRadius-m u-paddingVertical-m u-paddingHorizontal-l u-textAlign-center u-marginBottom-xxl">
    New Lab was last verified December 11, 2018
  </div>
  <div class="u-marginBottom-m">
    Total FST Invested in New Lab
  </div>
  <div class="u-marginBottom-xxl u-fontSize-xxl">
    1,275<span class="u-verticalAlign-top u-fontSize-xs u-fontWeight-bold u-fontStyle-italic">FST</span>
  </div>
  <div class="u-marginBottom-m">
    My FST staked on New Lab
  </div>
  <div class="u-marginBottom-xxl u-fontSize-xxl">
    382.5<span class="u-verticalAlign-top u-fontSize-xs u-fontWeight-bold u-fontStyle-italic">FST</span>
  </div>
  <button class="
    Button
    u-width-full
    Button--withTransition
    Button--dark
    u-borderRadius-m
    u-shadow-s
    u-shadow-m:hover
    u-shadow-s:active
    u-paddingHorizontal-l
    u-paddingVertical-m
    u-backgroundColor-white
    u-color-greenish
    u-marginBottom-m
    ">
    Deposit FST
  </button>
</div>
```


```html
span: 2
---
<div class="
  u-borderRadius-l
  u-width-full
  u-shadow-s
  u-paddingHorizontal-l
  u-paddingVertical-m
  u-marginBottom-m
  u-backgroundColor-pinkish
  u-color-white
  u-fontWeight-regular
  u-textAlign-left
  u-lineHeight-m
  ">
  <div class="Grid u-width-full u-paddingBottom-xl">
    <div class="Grid-block Grid-block--weight1">
      Challenged Point of Interest
    </div>
    <div class="Grid-block u-width-auto">
      <svg class="Icon u-fontSize-l"><use xlink:href="./assets/icons.svg#caretUp"></svg>
    </div>
  </div>
  <div class="u-backgroundColor-white.1 u-borderRadius-m u-paddingVertical-m u-paddingHorizontal-l u-textAlign-center u-marginBottom-xxl">
    New Lab was challenged today.
  </div>
  <div class="u-marginBottom-m">
    Total FST Invested in New Lab
  </div>
  <div class="u-marginBottom-xxl u-fontSize-xxl">
    1,275<span class="u-verticalAlign-top u-fontSize-xs u-fontWeight-bold u-fontStyle-italic">FST</span>
  </div>
  <button class="
    Button
    u-width-full
    Button--withTransition
    u-borderRadius-m
    u-shadow-s
    u-shadow-m:hover
    u-shadow-s:active
    u-paddingHorizontal-l
    u-paddingVertical-m
    u-backgroundColor-white
    u-color-pinkish
    u-marginBottom-m
    ">
    Vote on New Lab
  </button>
  <div class="u-fontSize-xs u-textAlign-center">
    Time left to vote: 7<span class="u-fontStyle-italic u-sup">D</span> 14<span class="u-fontStyle-italic u-sup">HR</span> 19<span class="u-fontStyle-italic u-sup">MIN</span>
  </div>
</div>
```
