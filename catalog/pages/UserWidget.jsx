const React = require('react')
const Icon = require('./Icon.jsx')
const {Page, ReactSpecimen, ColorPaletteSpecimen} = require('catalog');

const Circle = ({ className }) => (
  <div class={`
    ${className}
    u-color-grayDark
    u-shadow-currentColor
    u-border-pill
    u-padding-m
    u-marginRight-m
    u-backgroundColor-pinkish`}>
    <img style={{width: "20px", height: "20px" }} src="./assets/foam_token.png"/>
  </div>
)

exports.example = () => (
  <Page>
    <ReactSpecimen>
      <div class="u-display-inlineFlex">
        <Circle className="u-background-gradientDark"/>
        <Circle className="u-background-gradientBlueish"/>
        <Circle className="u-background-gradientPinkish"/>
        <Circle className="u-background-gradientGreenish"/>
        <div className="
          u-border-pill
          u-align-t
          u-paddingHorizontal-l
          u-paddingVertical-m
          u-backgroundColor-blackish
          u-color-white
          u-lineHeight-m
        ">
          0.00
          <span className="u-sup">FST</span>
        </div>
      </div>
    </ReactSpecimen>
  </Page>
)



