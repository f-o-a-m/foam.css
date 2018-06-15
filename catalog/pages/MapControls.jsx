const React = require('react')
const Icon = require('./Icon.jsx')
const {Page, ReactSpecimen, ColorPaletteSpecimen} = require('catalog');

const MapBlock = ({className, children}) => (
  <div className={`u-color-white.1 u-shadow-currentColor u-border-pill u-backgroundColor-blackish ${className}`}>
    {children}
  </div>
)
const MapTextBlock = ({children}) => (
  <MapBlock className="u-lineHeight-m u-marginRight-m u-paddingVertical-m u-paddingHorizontal-l">
    <span className="u-color-white">
      {children}
    </span>
  </MapBlock>
)

const ItalicSup = ({ children }) => (
  <span className="u-verticalAlign-top u-fontSize-xs u-fontWeight-bold u-fontStyle-italic">{children}</span>
)

exports.example = () => (
  <Page>
    <ReactSpecimen dark>
      <div className="Grid Grid-wrap u-stackingContext">
        <MapTextBlock>
          41.6952 <ItalicSup>LAT</ItalicSup><span className="u-marginLeft-m">-44.7939 <ItalicSup>LON</ItalicSup></span>
        </MapTextBlock>
        <MapBlock className="u-display-flex u-marginRight-m u-paddingHorizontal-m">
          <button className="u-display-flex u-paddingHorizontal-s u-paddingVertical-m u-color-white u-color-white.6:hover">
            <Icon.minus fixWidth fixHeight asText/>
          </button>
          <button className="u-display-flex u-paddingHorizontal-s u-paddingVertical-m u-color-white u-color-white.6:hover">
            <Icon.plus fixWidth fixHeight asText/>
          </button>
          <button className="u-display-flex u-paddingHorizontal-s u-paddingVertical-m u-color-blueish u-color-white:hover">
            <Icon.position fixWidth fixHeight asText/>
          </button>
        </MapBlock>
        <MapTextBlock>
          0.00 <ItalicSup>FST</ItalicSup>
        </MapTextBlock>
        <div className="u-color-white.1 u-shadow-currentColor u-border-pill u-position-relative">
          <img style={{position: "relative", zIndex: "-1", width: "40px", height: "40px" }} src="./assets/avatar-example.png"/>
        </div>
      </div>
    </ReactSpecimen>
  </Page>
)

