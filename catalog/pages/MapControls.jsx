const React = require('react')
const Icon = require('./Icon.jsx')

const {Page, ReactSpecimen, ColorPaletteSpecimen} = require('catalog');


exports.example = () => (
  <Page>
    <ReactSpecimen>
      <div className=" u-display-inlineFlex u-paddingHorizontal-m u-border-pill u-backgroundColor-blackish">
        <span className=" u-padding-m u-lineHeight-m u-color-white.6">
          41.6952, 44.7939
        </span>
        <button className=" u-paddingHorizontal-s u-paddingVertical-m u-color-white u-color-white.6:hover">
          <Icon.minus fixWidth fixHeight asText/>
        </button>
        <button className=" u-paddingHorizontal-s u-paddingVertical-m u-color-white u-color-white.6:hover">
          <Icon.plus fixWidth fixHeight asText/>
        </button>
        <button className=" u-paddingHorizontal-s u-paddingVertical-m u-color-blueish u-color-white:hover">
          <Icon.position fixWidth fixHeight asText/>
        </button>
      </div>
    </ReactSpecimen>
  </Page>
)