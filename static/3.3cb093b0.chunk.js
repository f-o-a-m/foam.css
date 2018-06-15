webpackJsonp([3],{787:function(n,t,o){var u=o(13),i=o(45),a=o(78).PageRenderer;a.__esModule&&(a=a.default);var l=i({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:o(792)}},componentWillMount:function(){},render:function(){return u.createElement(a,Object.assign({},this.props,{content:this.state.content}))}});l.__catalog_loader__=!0,n.exports=l},792:function(n,t){n.exports='\n## `Button`\n\nBy default all `Button`s border which is rounded\n\n```html\nspan: 2\ndark: true\n---\n<button class="\n  Button\n  u-paddingHorizontal-l\n  u-paddingVertical-m\n  u-color-white.6">\n  Button\n</button>\n```\n\n```html\nspan: 2\ndark: true\n---\n<a href="#" class="\n  Button\n  u-paddingHorizontal-l\n  u-paddingVertical-m\n  u-color-white.6">\n  Button\n</a>\n```\n\n\n```html\nspan: 2\ndark: true\n---\n<div href="#" class="\n  Button\n  u-paddingHorizontal-l\n  u-paddingVertical-m\n  u-color-white.6">\n  Button\n</div>\n```\n\n\n## `Button--withDim`\n\nAdds very opaque white overlay\n\n```html\nspan: 2\ndark: true\n---\n<button class="\n  Button\n  Button--withDim\n  u-paddingHorizontal-l\n  u-paddingVertical-m\n  u-color-white.6">\n  Button\n</button>\n<button class="\n  Button\n  Button--withDim\n  u-paddingHorizontal-l\n  u-paddingVertical-m\n  u-backgroundColor-greenish\n  u-color-white">\n  Button\n</button>\n```\n\n```html\nspan: 2\ndark: true\n---\n<a href="#" class="\n  Button\n  Button--withDim\n  u-paddingHorizontal-l\n  u-paddingVertical-m\n  u-color-white.6">\n  Button\n</a>\n<a href="#" class="\n  Button\n  Button--withDim\n  u-paddingHorizontal-l\n  u-paddingVertical-m\n  u-backgroundColor-pinkish\n  u-color-white">\n  Button\n</a>\n```\n\n\n```html\nspan: 2\ndark: true\n---\n<div href="#" class="\n  Button\n  Button--withDim\n  u-paddingHorizontal-l\n  u-paddingVertical-m\n  u-color-white.6">\n  Button\n</div>\n<div href="#" class="\n  Button\n  Button--withDim\n  u-paddingHorizontal-l\n  u-paddingVertical-m\n  u-backgroundColor-blueish\n  u-color-white">\n  Button\n</div>\n```\n\n## `Button--withTransition`\n\nAdds transition animation on interaction.\n\n```html\nspan: 2\ndark: true\n---\n<button class="\n  Button\n  Button--withTransition\n  u-paddingHorizontal-l\n  u-paddingVertical-m\n  u-color-white.6">\n  Button\n</button>\n```\n\n```html\nspan: 2\ndark: true\n---\n<a href="#" class="\n  Button\n  Button--withTransition\n  u-paddingHorizontal-l\n  u-paddingVertical-m\n  u-color-white.6">\n  Button\n</a>\n```\n\n\n```html\nspan: 2\ndark: true\n---\n<div href="#" class="\n  Button\n  Button--withTransition\n  u-paddingHorizontal-l\n  u-paddingVertical-m\n  u-color-white.6">\n  Button\n</div>\n```\n\n## What about shadows, background, color, width?\n\nYou can use utility classes for that:\n\n```html\nspan: 2\n---\n<button class="\n  Button\n  u-width-full\n  u-shadow-m\n  u-shadow-m:active\n  u-shadow-l:hover\n  u-shadow-s\n  u-paddingHorizontal-l\n  u-paddingVertical-m\n  u-marginBottom-l\n  u-backgroundColor-blueish\n  u-color-white">\n  Button\n</button>\n<button class="\n  Button\n  u-shadow-m\n  u-shadow-m:active\n  u-shadow-l:hover\n  u-paddingHorizontal-l\n  u-paddingVertical-m\n  u-backgroundColor-blueish\n  u-color-blackish">\n  Button\n</button>\n```\n\n```html\nspan: 2\n---\n<a href="#" class="\n  Button\n  u-width-full\n  u-shadow-m\n  u-shadow-m:active\n  u-shadow-l:hover\n  u-paddingHorizontal-l\n  u-paddingVertical-m\n  u-marginBottom-l\n  u-backgroundColor-pinkish\n  u-color-white">\n  Button\n</a>\n<a href="#" class="\n  Button\n  u-shadow-m\n  u-shadow-m:active\n  u-shadow-l:hover\n  u-paddingHorizontal-l\n  u-paddingVertical-m\n  u-marginBottom-l\n  u-backgroundColor-pinkish\n  u-color-blackish">\n  Button\n</a>\n```\n\n```html\nspan: 2\n---\n<div class="\n  Button\n  u-width-full\n  u-shadow-m\n  u-shadow-m:active\n  u-shadow-l:hover\n  u-paddingHorizontal-l\n  u-paddingVertical-m\n  u-marginBottom-l\n  u-backgroundColor-greenish\n  u-color-white">\n  Button\n</div>\n<div class="\n  Button\n  u-shadow-m\n  u-shadow-m:active\n  u-shadow-l:hover\n  u-paddingHorizontal-l\n  u-paddingVertical-m\n  u-backgroundColor-greenish\n  u-color-blackish">\n  Button\n</div>\n```\n\n## Examples\n\n```html\nspan: 2\ndark: true\n---\n<div class="\n  u-backgroundColor-blackish\n  u-padding-l">\n  <button class="\n    Button\n    Button--withDim\n    u-width-full\n    u-paddingHorizontal-l\n    u-paddingVertical-m\n    u-color-white\n    u-marginBottom-l">\n    Button\n  </button>\n  <button class="\n    Button\n    Button--withDim\n    u-width-full\n    u-paddingHorizontal-l\n    u-paddingVertical-m\n    u-color-white.6\n    u-marginBottom-l">\n    Button\n  </button>\n  <button class="\n    Button\n    Button--withDim\n    u-width-full\n    Button--withTransition\n    u-paddingHorizontal-l\n    u-paddingVertical-m\n    u-color-white.6\n    u-marginBottom-l">\n    Button\n  </button>\n  <button class="\n    Button\n    Button--withDim\n    Button--withTransition\n    u-paddingHorizontal-l\n    u-paddingVertical-m\n    u-color-white">\n    Button\n  </button>\n</div>\n```\n\n```html\nspan: 2\ndark: true\n---\n<div class="\n  u-backgroundColor-pinkish\n  u-padding-l">\n  <button class="\n    Button\n    Button--withDim\n    u-width-full\n    u-paddingHorizontal-l\n    u-paddingVertical-m\n    u-shadow-s\n    u-color-white\n    u-marginBottom-l">\n    Button\n  </button>\n  <button class="\n    Button\n    Button--withDim\n    u-width-full\n    u-paddingHorizontal-l\n    u-paddingVertical-m\n    u-shadow-m\n    u-color-white.6\n    u-marginBottom-l">\n    Button\n  </button>\n  <button class="\n    Button\n    Button--withDim\n    u-width-full\n    Button--withTransition\n    u-paddingHorizontal-l\n    u-paddingVertical-m\n    u-shadow-l\n    u-color-white.6\n    u-marginBottom-l">\n    Button\n  </button>\n  <button class="\n    Button\n    Button--withDim\n    Button--withTransition\n    u-paddingHorizontal-l\n    u-paddingVertical-m\n    u-shadow-s\n    u-color-white">\n    Button\n  </button>\n</div>\n```\n\n```html\nspan: 2\ndark: true\n---\n<div class="\n  u-backgroundColor-blueish\n  u-padding-l">\n  <button class="\n    Button\n    Button--withDim\n    u-width-full\n    u-paddingHorizontal-l\n    u-paddingVertical-m\n    u-color-white\n    u-marginBottom-l">\n    Button\n  </button>\n  <button class="\n    Button\n    Button--withDim\n    u-width-full\n    u-paddingHorizontal-l\n    u-paddingVertical-m\n    u-color-white.6\n    u-marginBottom-l">\n    Button\n  </button>\n  <button class="\n    Button\n    Button--withDim\n    u-width-full\n    Button--withTransition\n    u-paddingHorizontal-l\n    u-paddingVertical-m\n    u-color-white.6\n    u-marginBottom-l">\n    Button\n  </button>\n  <button class="\n    Button\n    Button--withDim\n    Button--withTransition\n    u-paddingHorizontal-l\n    u-paddingVertical-m\n    u-color-white">\n    Button\n  </button>\n</div>\n```\n\n```html\nspan: 2\ndark: true\n---\n<div class="\n  u-backgroundColor-greenish\n  u-padding-l">\n  <button class="\n    Button\n    Button--withDim\n    u-width-full\n    u-paddingHorizontal-l\n    u-paddingVertical-m\n    u-color-white\n    u-marginBottom-l">\n    Button\n  </button>\n  <button class="\n    Button\n    Button--withDim\n    u-width-full\n    u-paddingHorizontal-l\n    u-paddingVertical-m\n    u-color-white.6\n    u-color-white:hover\n    u-marginBottom-l">\n    Button\n  </button>\n  <button class="\n    Button\n    Button--withDim\n    u-width-full\n    Button--withTransition\n    u-paddingHorizontal-l\n    u-paddingVertical-m\n    u-color-white.6\n    u-marginBottom-l">\n    Button\n  </button>\n  <button class="\n    Button\n    Button--withDim\n    Button--withTransition\n    u-paddingHorizontal-l\n    u-paddingVertical-m\n    u-color-white">\n    Button\n  </button>\n</div>\n```\n\n```html\nspan: 2\ndark: true\n---\n<div class="\n  u-backgroundColor-grayish\n  u-padding-l">\n  <button class="\n    Button\n    Button--withDim\n    u-width-full\n    u-paddingHorizontal-l\n    u-paddingVertical-m\n    u-color-white\n    u-marginBottom-l">\n    Button\n  </button>\n  <button class="\n    Button\n    Button--withDim\n    u-width-full\n    u-paddingHorizontal-l\n    u-paddingVertical-m\n    u-color-white.6\n    u-color-white:hover\n    u-marginBottom-l">\n    Button\n  </button>\n  <button class="\n    Button\n    Button--withDim\n    u-width-full\n    Button--withTransition\n    u-paddingHorizontal-l\n    u-paddingVertical-m\n    u-color-white.6\n    u-marginBottom-l">\n    Button\n  </button>\n  <button class="\n    Button\n    Button--withDim\n    Button--withTransition\n    u-paddingHorizontal-l\n    u-paddingVertical-m\n    u-color-white">\n    Button\n  </button>\n</div>\n```\n\n```html\nspan: 2\ndark: true\n---\n<div class="\n  u-backgroundColor-white\n  u-padding-l">\n  <button class="\n    Button\n    Button--withDim\n    u-width-full\n    u-shadow-m\n    u-shadow-m:active\n    u-shadow-l:hover\n    u-paddingHorizontal-l\n    u-paddingVertical-m\n    u-color-blueish\n    u-marginBottom-l">\n    Button\n  </button>\n  <button class="\n    Button\n    Button--withDim\n    u-width-full\n    u-shadow-m\n    u-shadow-m:active\n    u-shadow-l:hover\n    u-paddingHorizontal-l\n    u-paddingVertical-m\n    u-color-blueish\n    u-marginBottom-l">\n    Button\n  </button>\n  <button class="\n    Button\n    Button--withDim\n    u-width-full\n    Button--withTransition\n    u-shadow-m\n    u-shadow-m:active\n    u-shadow-l:hover\n    u-paddingHorizontal-l\n    u-paddingVertical-m\n    u-color-blueishDim\n    u-marginBottom-l">\n    Button\n  </button>\n  <button class="\n    Button\n    Button--withDim\n    Button--withTransition\n    u-shadow-m\n    u-shadow-m:active\n    u-shadow-l:hover\n    u-paddingHorizontal-l\n    u-paddingVertical-m\n    u-color-blueish">\n    Button\n  </button>\n</div>\n```\n'}});
//# sourceMappingURL=3.3cb093b0.chunk.js.map