import React from "react"
import onClickOutside from "react-onclickoutside"

class Popups extends React.Component {
  state = { "popups": [] }

  componentDidMount = () => {
    if (this.props.clickButtons) document.addEventListener ("click", this.spawnLinkedDiv)
    if (this.props.event) document.addEventListener (this.props.event, this.spawnLinkedDiv)
  }

  componentWillUnmount = () => {
    if (this.props.clickButtons) document.removeEventListener ("click", this.spawnLinkedDiv)
    if (this.props.event) document.removeEventListener (this.props.event, this.spawnLinkedDiv)
  }

  handleClickOutside = () => {
    this.setState ({ "popups": [] })
  }

  handleClickInside = (e) => {
    let t = e.target
    while (t) {
      if (t.dataset && t.dataset.popupkey) {
        const popupkey = t.dataset.popupkey
        const popups = this.state.popups
        let ind = -1
        popups.forEach ((x, i) => {
          //TODO get popupkey instead of key
          if (x.key === popupkey)
            ind = i
        })
        this.setState ({ "popups": popups.slice (0, ind + 1) })
        return
      }
      t = t.parentNode
    }
  }

  spawnLinkedDiv = (e) => {
    this.handleClickInside (e)

    const data = e.target.attributes[this.props.dataName || "data"]
    if (!data) return

    if(this.props.clickButtons) {
      if (this.props.clickButtons.indexOf (e.button) > -1)
        e.preventDefault ()
      else return
    }
    else e.preventDefault ()

    const popups = this.state.popups

    const half_w = 0.5 * window.innerWidth
    const half_h = 0.5 * window.innerHeight
    const x = e.pageX
    const y = e.pageY

    let translateXY = "(-100%, 0%)"
    if (x < half_w && y < half_h) translateXY = "(0%, 0%)"
    else if (x < half_w && y > half_h) translateXY = "(0%, -100%)"
    else if (x > half_w && y > half_h) translateXY = "(-100%, -100%)"

    const s = {
      "position": "fixed",
      "left": e.pageX,
      "top": e.pageY,
      "transform": `translate${translateXY}`,
    }
    const id = Math.random ()
    popups.push (
      <div data-popupkey={id} key={id} style={s}>
        <this.props.handler
          data={data.nodeValue}
          popupProps={this.props.popupProps}
        />
      </div>
    )
    this.setState ({ popups })
  }

  render = () => (<div>{this.state.popups}</div>)
}

export default onClickOutside (Popups)
