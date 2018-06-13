const React = require('react')
const classNames = require('classnames')


const mkIcon = (id, vb) => ({ className, fixHeight, fixWidth, asText }) => (
  <svg viewBox={vb} className={classNames("Icon", {
    'Icon--fixHeight': fixHeight,
    'Icon--fixWidth': fixWidth,
    'Icon--asText': asText,
  }, className)}>
    <use xlinkHref={`./assets/icons.svg#${id}`}></use>
  </svg>
)

exports.caretDown = mkIcon("caretDown", "0 0 12 10")
exports.angleDown = mkIcon("angleDown", "0 0 13.5152 7.5075")
exports.angleLeft = mkIcon("angleLeft", "0 0 7.5075 13.5152")
exports.angleUp = mkIcon("angleUp", "0 0 13.5152 7.5075")
exports.cross = mkIcon("cross", "0 0 14.02 14.02")
exports.filter = mkIcon("filter", "0 0 32 16")
exports.minus = mkIcon("minus", "0 0 15 2")
exports.plus = mkIcon("plus", "0 0 15 15")
exports.position = mkIcon("position", "0 0 18 18")
exports.tags = mkIcon("tags", "0 0 15.1932 15.1932")
exports.tokenBox = mkIcon("tokenBox", "0 0 22 24.8571")




exports.example = ({Icon}) => {
  const icon_ = <Icon fixHeight fixWidth asText className="u-fontSize-l"/>
  return (
    <div className="u-lineHeight-l">
      <div className="u-lineHeight-l u-fontSize-xl">Some {icon_} fluffy {icon_} around</div>
      <div className="u-lineHeight-l u-fontSize-l">Some {icon_} fluffy {icon_} around</div>
      <div className="u-lineHeight-l u-fontSize-m">Some {icon_} fluffy {icon_} around</div>
      <div className="u-lineHeight-l u-fontSize-s">Some {icon_} fluffy {icon_} around</div>
      <div className="u-lineHeight-l u-fontSize-xs">Some {icon_} fluffy {icon_} around</div>
    </div>
  )
}