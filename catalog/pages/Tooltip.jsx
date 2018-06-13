const React = require('react')
const Icon = require('./Icon.jsx')

exports.theme = {
  default: { textColor: "u-color-back", backgroundColor: "u-backgroundColor-white", caretColor: "u-color-white" },
  challenged: { textColor: "u-color-white", backgroundColor: "u-backgroundColor-pinkish", caretColor: "u-color-pinkish" },
  pending: { textColor: "u-color-white", backgroundColor: "u-backgroundColor-blueish", caretColor: "u-color-blueish" },
  verified: { textColor: "u-color-white", backgroundColor: "u-backgroundColor-greenish", caretColor: "u-color-greenish" },
}

exports.example = ({ className, textColor, backgroundColor, caretColor }) => (
  <div className={`u-display-inlineBlock ${className}`}>
    <div className={`${backgroundColor} ${textColor} u-paddingVertical-m u-paddingHorizontal-l u-border-pill`}>
      <span className="u-marginRight-l">New Lab</span> 124 <span className="u-verticalAlign-top u-fontSize-xs u-fontWeight-bold u-fontStyle-italic">FST</span> staked
    </div>
    <Icon.caretDown className={`${caretColor} u-fontSize-xs u-verticalAlign-top u-marginLeft-l u-opacity.5`} fixHeight/>
  </div>
)