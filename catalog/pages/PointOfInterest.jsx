const React = require('react')
const classNames = require('classnames')
const Icon = require('./Icon.jsx')
const {Page, ReactSpecimen, ColorPaletteSpecimen} = require('catalog');

const TextInput = ({placeholder}) => (
  <input type="text" placeholder={placeholder} className="u-paddingHorizontal-l u-paddingVertical-m u-borderRadius-l u-shadow-black u-shadow-currentColor:focus u-outline-none u-width-full"/>
)

const Label = ({ children, withInfo }) => (
  <div className={`u-fontWeight-bold ${withInfo ? 'u-marginBottom-s' : 'u-marginBottom-m'}`}>{children}</div>
)

const Info = ({ children }) => (
  <div className="u-fontSize-xs u-marginBottom-m">{children}</div>
)

const FST = () => (
  <span className="u-verticalAlign-top u-fontSize-xs u-fontWeight-bold u-fontStyle-italic">FST</span>
)

const CountDown = ({className}) => (
  <span className={`u-fontWeight-regular ${className}`}>7<span className="u-fontStyle-italic u-sup">D</span> 14<span className="u-fontStyle-italic u-sup">HR</span> 19<span className="u-fontStyle-italic u-sup">MIN</span></span>
)

const TextArea = ({placeholder, info}) => (
  <div className="u-position-relative">
    <textarea placeholder={placeholder} rows="2" type="text" className="u-paddingHorizontal-l u-paddingTop-m u-paddingBottom-xl u-width-full u-borderRadius-l u-shadow-black u-shadow-currentColor:focus u-outline-none"></textarea>
    <div className="u-position-absolute u-marginRight-l u-marginLeft-l u-marginBottom-m u-truncate u-fontSize-s u-textAlign-right u-color-gray u-bottom-0 u-left-0 u-right-0 u-lineHeight-s">{info}</div>
  </div>
)

const InputTextBig = ({ min }) => (
  <div className="u-position-relative">
    <input min={min} type="number" placeholder={min} value={min} onChange={()=>{}} className="u-fontSize-xxxl u-textAlign-center u-paddingHorizontal-l u-paddingVertical-l u-borderRadius-l u-shadow-black u-shadow-currentColor:focus u-outline-none u-width-full u-lineHeight-s"/>
    <div className="u-position-absolute u-marginRight-l u-marginLeft-l u-marginBottom-m u-truncate u-fontSize-s u-textAlign-right u-color-gray u-bottom-0 u-left-0 u-right-0 u-lineHeight-s">Gas cost: .0000</div>
  </div>
)

const Card = ({ title, children}) => (
  <div className="u-backgroundColor-white u-borderRadius-l u-padding-l u-lineHeight-m" style={{ maxWidth: "380px" }}>
    <div className="Grid u-width-full u-marginBottom-l">
      <div className="Grid-block Grid-block--weight1 u-fontSize-xl ">
        {title}
      </div>
      <div className="Grid-block Grid-block--alignCenter u-width-auto u-lineHeight-s">
        <button className="u-opacity.5 u-opacity1:hover"><Icon.cross fixWidth fixHeight asText /></button>
      </div>
    </div>
    {children}
  </div>
)

class Checkbox extends React.Component {
  constructor(props) {
    super(props)
    this.state = { checked: false }
  }
  render() {
    const {checked} = this.state
    const baseClasses = "u-shadow-black:focus u-outline-none u-display-inlineBlock u-cursor-pointer u-paddingHorizontal-m u-paddingVertical-s u-border-pill u-color-white:hover u-marginRight-m u-marginBottom-m u-backgroundColor-whiteDark u-color-gray"
    const colorClasses = checked ? "u-backgroundColor-blueish u-color-white u-backgroundColor-gray:hover" : "u-backgroundColor-whiteDark u-color-gray u-backgroundColor-grayLight:hover"
    return (
      <label
        className={classNames(baseClasses, colorClasses)}
        tabIndex="0"
        >
        {this.props.children}<input className="u-display-none" type="checkbox" onChange={() => {this.setState({checked: !checked})}} checked={checked}/>
      </label>
    )
  }
}

const Tag = ({ children }) => (
  <span className="u-display-inlineBlock u-paddingHorizontal-m u-paddingVertical-s u-border-pill u-backgroundColor-whiteDark u-color-gray u-marginRight-s">{children}</span>
)

class ViewCardExample extends React.Component {
  constructor(props) {
    super(props)
    this.state = { viewAs: "Verified", expanded: false }
  }
  render() {
    const { viewAs, expanded } = this.state
    return (
      <ReactSpecimen>
        <button className="Button u-padding-m u-color-white u-margin-s u-backgroundColor-greenish" onClick={() => {this.setState({ viewAs: "Verified", expanded })}}>View as Verified</button>
        <button className="Button u-padding-m u-color-white u-margin-s u-backgroundColor-pinkish" onClick={() => {this.setState({ viewAs: "Challenged", expanded })}}>View as Challenged</button>
        <button className="Button u-padding-m u-color-white u-margin-s u-backgroundColor-blueish" onClick={() => {this.setState({ viewAs: "Pending", expanded })}}>View as Pending</button>
        <Card title="New Lab">
          <p className="u-marginBottom-m">
            Coworking Space
          </p>
          { viewAs == "Verified" && (<p className="u-marginBottom-l u-color-greenish">1275 FST Staked</p>)}
          { viewAs == "Challenged" && (<p className="u-marginBottom-l u-color-pinkish">1275 FST Staked</p>)}
          { viewAs == "Pending" && (<p className="u-marginBottom-l u-color-blueish">1275 FST Staked</p>)}
          {!expanded && (
            <button className={`
              Button u-width-full u-shadow-s
              u-paddingHorizontal-l u-paddingVertical-m u-marginBottom-m
              u-fontWeight-regular u-textAlign-left u-color-white
              ${classNames({
                "u-backgroundColor-greenish": viewAs == "Verified", 
                "u-backgroundColor-pinkish": viewAs == "Challenged", 
                "u-backgroundColor-blueish": viewAs == "Pending"
              })}`}
              onClick={() => {this.setState({ viewAs, expanded: true })}}
              >
              <span className="Grid u-width-full">
                <span className="Grid-block Grid-block--weight1">
                  {viewAs} Point of Interest
                </span>
                <span className="Grid-block u-width-auto">
                  <Icon.angleDown fixWidth fixHeight asText className="u-fontSize-l"/>
                </span>
              </span>
            </button>
          )}
          {expanded && (
            <div className={`
              u-borderRadius-l
              u-width-full
              u-shadow-s
              u-paddingHorizontal-l
              u-paddingTop-m
              u-paddingBottom-l
              u-marginBottom-m
              u-color-white
              u-fontWeight-regular
              u-textAlign-left
              u-lineHeight-m
              ${classNames({
                "u-backgroundColor-greenish": viewAs == "Verified", 
                "u-backgroundColor-pinkish": viewAs == "Challenged", 
                "u-backgroundColor-blueish": viewAs == "Pending"
              })}`}
              >
              <div className="Grid u-width-full u-paddingBottom-xl">
                <div className="Grid-block Grid-block--weight1">
                  {viewAs} Point of Interest
                </div>
                <div className="Grid-block u-width-auto u-cursor-pointer" onClick={() => {this.setState({ viewAs, expanded: false })}}>
                  <Icon.angleUp fixWidth fixHeight asText className="u-fontSize-l"/>
                </div>
              </div>
              <div className="u-backgroundColor-white.1 u-borderRadius-m u-paddingVertical-m u-paddingHorizontal-l u-textAlign-center u-marginBottom-l">
                {viewAs == "Verified" && "New Lab was last verified December 11, 2018"}
                {viewAs == "Challenged" && "New Lab was challenged today."}
                {viewAs == "Pending" && "New Lab was registered three days ago."}
              </div>
              <div className="Grid u-marginBottom-l u-textAlign-center">
                <div className="Grid-block Grid-block--weight1">
                  <div className="u-fontSize-xxl">1,275<FST/></div>
                  <div className="u-fontSize-xs">Total FST staked in New Lab</div>
                </div>
                <div className="Grid-block Grid-block--weight1">
                  <div className="u-fontSize-xxl">+4.34%</div>
                  <div className="u-fontSize-xs">24hr FST movement</div>
                </div>
              </div>
              <div className="u-marginBottom-l u-textAlign-center">
                <div className="u-fontSize-xxl">382.5<FST/></div>
                <div className="u-fontSize-xs">My FST balance in New Lab</div>
              </div>
              { viewAs == "Verified" && (
                <button className="
                  u-fontWeight-medium
                  Button Button--withTransition
                  u-width-full u-borderRadius-m
                  u-shadow-s u-shadow-m:hover u-shadow-s:active
                  u-paddingHorizontal-l u-paddingVertical-m
                  u-backgroundColor-white u-color-greenish
                  ">
                  Deposit FST
                </button>
              )}
              { viewAs == "Challenged" && (
                <button className="
                  u-fontWeight-medium
                  Button Button--withTransition
                  u-width-full u-borderRadius-m
                  u-shadow-s u-shadow-m:hover u-shadow-s:active
                  u-paddingHorizontal-l u-paddingVertical-m
                  u-backgroundColor-white u-color-pinkish
                  ">
                  <span className="u-display-block u-marginBottom-s">Vote on New Lab’s status</span>
                  <span className="u-display-block"><span className="u-fontSize-s">Time left to vote: </span><CountDown className="u-verticalAlign-middle"/></span>
                </button>
              )}
              { viewAs == "Pending" && (
                <button className="
                  u-fontWeight-medium
                  Button Button--withTransition
                  u-width-full u-borderRadius-m
                  u-shadow-s u-shadow-m:hover u-shadow-s:active
                  u-paddingHorizontal-l u-paddingVertical-m
                  u-backgroundColor-pinkish u-color-white
                  ">
                  <span className="u-display-block u-marginBottom-s">Challenge on New Lab’s validity</span>
                  <span className="u-display-block"><span className="u-fontSize-s">Time left to vote: </span><CountDown className="u-verticalAlign-middle"/></span>
                </button>
              )}
            </div>
          )}
          <div className="Grid u-marginBottom-m">
            <div className="Grid-block u-width-8/12 u-fontWeight-bold">
              Address
            </div>
            <div className="Grid-block u-width-4/12 u-color-gray u-truncate">#be8b92dc8539c44aa93738b45dbe689256a59deb</div>
          </div>
          <p className="u-marginBottom-xl">
            19 Morris Avenue Bldg 128,<br/>
            Brooklyn, NY 11205<br/>
          </p>
          <p className="u-fontWeight-bold u-marginBottom-m">
            Description
          </p>
          <p className="u-marginBottom-m">
            Co-Working space in the Brooklyn Navy Yard. A hub for startups working in emergent markets. https://newlab.com/
          </p>
          <p className="u-marginBottom-m u-textAlign-right">
            <button className="u-color-gray u-color-black:hover">Show more</button>
          </p>
          <p className="u-fontWeight-bold u-marginBottom-m">
            Tags
          </p>
          <p className="u-marginBottom-xl">
            <span className="
              u-display-inlineBlock
              u-paddingHorizontal-m
              u-paddingVertical-s
              u-border-pill
              u-backgroundColor-whiteDark
              u-color-gray
              u-marginRight-s
              ">Workplace</span>
            <span className="
              u-display-inlineBlock
              u-paddingHorizontal-m
              u-paddingVertical-s
              u-border-pill
              u-backgroundColor-whiteDark
              u-color-gray
              ">Technology</span>
          </p>
          <p className="u-marginBottom-l"><span className="u-fontWeight-bold">Phone:</span> (718) 488-7005</p>
          <p><span className="u-fontWeight-bold">Web:</span> newlab.com</p>
        </Card>
      </ReactSpecimen>
    )
  }
}

exports.example = () => (
  <Page>
    ## Register POI card
    <ReactSpecimen>
      <Card title="Register Point of Interest">
        <label className="u-marginBottom-l">
          <Label>Name</Label>
          <TextInput placeholder="Name of POI" />
        </label>
        <label className="u-marginBottom-l">
          <Label>Address</Label>
          <TextArea placeholder="Physical Address of POI" info="CSC Address: be8b92dc8539c44aa93738b45dbe689256a59deb"/>
        </label>
        <label className="u-marginBottom-l">
          <Label>Description</Label>
          <TextArea placeholder="Write a good description of the POI here. Longer entries will cost more gas." info="Gas cost: .0000"/>
        </label>
        <p className="u-fontWeight-bold u-marginBottom-m">
          Tags
        </p>
        <p className="u-marginBottom-xl">
          <Checkbox>Art</Checkbox>
          <Checkbox>Food</Checkbox>
          <Checkbox>Retail</Checkbox>
          <Checkbox>Health</Checkbox>
          <Checkbox>Work</Checkbox>
          <Checkbox>Banking</Checkbox>
          <Checkbox>Nightlife</Checkbox>
        </p>
        <label className="u-marginBottom-l">
          <Label>Phone</Label>
          <TextInput placeholder="Phone number associated with POI" />
        </label>
        <label className="u-marginBottom-l">
          <Label>Web</Label>
          <TextInput placeholder="Website associated with POI" />
        </label>
        <label className="u-marginBottom-l">
          <Label withInfo>FST to be staked on POI</Label>
          <Info>A minimum of 1000 FST is needed</Info>
          <InputTextBig min="1000" />
        </label>
        <button className="
          Button Button--withTransition Button--dark
          u-width-full u-borderRadius-m
          u-shadow-s u-shadow-m:hover u-shadow-s:active
          u-paddingHorizontal-l u-paddingVertical-m
          u-backgroundColor-greenish u-color-white
          ">
          Deposit FST using Metamask
        </button>
      </Card>
    </ReactSpecimen>
    ## Create a Signal card
    <ReactSpecimen>
      <Card title="Create a Signal">
        <label className="u-marginBottom-l">
          <Label>Name</Label>
          <TextInput placeholder="Name of Signal" />
        </label>
        <label className="u-marginBottom-l">
          <Label>Address</Label>
          <TextArea placeholder="Physical Address of Signal" info="CSC Address: be8b92dc8539c44aa93738b45dbe689256a59deb"/>
        </label>
        <label className="u-marginBottom-l">
          <Label withInfo>FST to be staked on Signal</Label>
          <Info>A minimum of 1000 FST is needed</Info>
          <InputTextBig min="1000" />
        </label>
        <button className="
          Button Button--withTransition Button--dark
          u-width-full u-borderRadius-m
          u-shadow-s u-shadow-m:hover u-shadow-s:active
          u-paddingHorizontal-l u-paddingVertical-m
          u-backgroundColor-goldish u-color-white
          ">
          Deposit FST using Metamask
        </button>
      </Card>
    </ReactSpecimen>
    ## View POI card
    <p> note, you can expand details and change status.</p>
    <ViewCardExample/>
  </Page>
)
