const React = require('react')
const classNames = require('classnames')
const {Page, ReactSpecimen, ColorPaletteSpecimen} = require('catalog');


const mkIcon = (id, vb) => ({ className, fixHeight, fixWidth, asText }) => (
  <svg viewBox={vb} className={classNames("Icon", {
    'Icon--fixHeight': fixHeight,
    'Icon--fixWidth': fixWidth,
    'Icon--asText': asText,
  }, className)}>
    <use xlinkHref={`./assets/icons.svg#${id}`}></use>
  </svg>
)
var iconSpec = 
[
  {id: "caretDown", vb: "0 0 12 10"}, 
  {id: "angleDown", vb: "0 0 13.5152 7.5075"}, 
  {id: "angleLeft", vb: "0 0 7.5075 13.5152"}, 
  {id: "angleUp", vb: "0 0 13.5152 7.5075"}, 
  {id: "cross", vb: "0 0 14.02 14.02"}, 
  {id: "filter", vb: "0 0 32 16"}, 
  {id: "minus", vb: "0 0 15 2"}, 
  {id: "plus", vb: "0 0 15 15"}, 
  {id: "position", vb: "0 0 18 18"}, 
  {id: "tags", vb: "0 0 15.1932 15.1932"}, 
  {id: "tokenBox", vb: "0 0 22 24.8571"}, 
  {id: "layers", vb: "0 0 18.94 20.68"}, 
]

iconSpec.forEach(({id,vb}) => {
  exports[id] = mkIcon(id, vb)
});




const Example = (props) => {
  const icon_ = <props.icon fixHeight fixWidth asText className="u-fontSize-l"/>
  return (
    <ReactSpecimen>
      <div className="u-lineHeight-l">
        <div className="u-lineHeight-l u-fontSize-xl">Some {icon_} fluffy {icon_} around</div>
        <div className="u-lineHeight-l u-fontSize-l">Some {icon_} fluffy {icon_} around</div>
        <div className="u-lineHeight-l u-fontSize-m">Some {icon_} fluffy {icon_} around</div>
        <div className="u-lineHeight-l u-fontSize-s">Some {icon_} fluffy {icon_} around</div>
        <div className="u-lineHeight-l u-fontSize-xs">Some {icon_} fluffy {icon_} around</div>
      </div>
    </ReactSpecimen>
  )
}

exports.example = () => (
  <Page>
    {iconSpec.map(({id}) => (
      <div style={{flex:"1 0 100%", marginBottom: "20px"}}>
        <h2>
          {id}
        </h2>
        <Example icon={exports[id]}/>
      </div>
    ))}
  </Page>
)