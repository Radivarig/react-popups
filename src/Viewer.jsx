import React from "react"
import Popups from "./Popups.jsx"

class Popup extends React.Component {
  render = () => {
    const popup_style = {
      "height": "auto",
      "width": "auto",
      "backgroundColor": "#ABC",
      "borderStyle": "solid",
      "borderColor": "#567",
    }
    let ToDisplay = <DefaultPopup info={this.props.data} />
    if (this.props.data === "universe") {ToDisplay = <Universe />}

    return (
      <div style={popup_style}>
        {ToDisplay}
      </div>
    )
  }
}

const PopupLink = (props) => {
  const link_style = {
    "cursor": "pointer",
    "color": "#00F",
  }
  return (
    <span data={props.data} style={link_style}>
      {props.children}
    </span>
  )
}

const DefaultPopup = (props) => (
  <div >
    <div>info: {props.info}</div>
    <div>other:</div>
    <ul>
      <li><PopupLink data='universe'>Universe</PopupLink></li>
      <li><PopupLink data='planets'>planets</PopupLink></li>
      <li><PopupLink data='stars'>stars</PopupLink></li>
      <li><PopupLink data='galaxies'>galaxies</PopupLink></li>
      <li><PopupLink data='intergalactic space'>intergalactic space</PopupLink></li>
      <li><PopupLink data='dark matter'>dark matter</PopupLink></li>
      <li><PopupLink data='dark energy'>dark energy</PopupLink></li>
    </ul>
  </div>
)

const Universe = () => (
  <p>
      The <PopupLink data={"universe"}>Universe</PopupLink> is all of time and space and its contents.
      The Universe includes <PopupLink data={"planets"}>planets</PopupLink>
      , <PopupLink data={"stars"}>stars</PopupLink>
      , <PopupLink data={"galaxies"}>galaxies</PopupLink>
      , the contents of <PopupLink data={"intergalactic space"}>intergalactic space</PopupLink>
      , the smallest subatomic particles, and all matter and energy.
      The majority of matter and energy is most likely in the form
      of <PopupLink data={"dark matter"}>dark matter</PopupLink> and <PopupLink data={"dark energy"}>dark energy</PopupLink>.
  </p>
)

export default () =>
  <div>
    <Popups handler={Popup} clickButtons={[0]} />
    <Universe />
  </div>
