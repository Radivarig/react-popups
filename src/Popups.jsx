var React = require('react')
var OnClickOutside = require('react-onclickoutside')

var Popups = React.createClass({
  mixins: [ OnClickOutside ]
, getInitialState: function () {
    return { popups: [] }
  }
, componentDidMount: function () {
    if (this.props.clickButtons) document.addEventListener('click', this.spawnLinkedDiv)
    if (this.props.event) document.addEventListener(this.props.event, this.spawnLinkedDiv)
  }
, componentWillUnmount: function () {
    if (this.props.clickButtons) document.removeEventListener('click', this.spawnLinkedDiv)
    if (this.props.event) document.removeEventListener(this.props.event, this.spawnLinkedDiv)
  }
, handleClickOutside: function(e) {
    this.setState({ popups: [] })
  }
, handleClickInside: function(e){
    var t = e.target
    while (t) {
      if (t.dataset && t.dataset.popupkey){
        var popupkey = t.dataset.popupkey
        var popups = this.state.popups
        var ind = -1
        popups.map(function(x, i){
          //TODO get popupkey instead of key
          if (x.key == popupkey)
            ind = i
        })
        this.setState({popups: popups.slice(0, ind +1)})
        return
      }
      t = t.parentNode
    }
  }
, spawnLinkedDiv: function (e) {
    this.handleClickInside(e)

    var data = e.target.attributes[this.props.dataName || 'data']
    if ( !data ) return

    if(this.props.clickButtons) {
      if (this.props.clickButtons.indexOf(e.button) > -1)
        e.preventDefault()
      else return
    }
    else e.preventDefault()

    var popups = this.state.popups

    var half_w = 0.5*window.innerWidth
    var half_h = 0.5*window.innerHeight
    var x = e.pageX
    var y = e.pageY

    var translateXY = '(-100%, 0%)'
         if (x < half_w && y < half_h) translateXY = '(0%, 0%)'
    else if (x < half_w && y > half_h) translateXY = '(0%, -100%)'
    else if (x > half_w && y > half_h) translateXY = '(-100%, -100%)'

    var s = {
      position: 'fixed'
    , left: e.pageX
    , top: e.pageY
    , transform: 'translate' +translateXY
    }
    var id = Math.random()
    popups.push (
      <div data-popupkey={id} key={id} style={s}>
        <this.props.handler data={data.nodeValue}
                            popupProps={this.props.popupProps}
                            />
      </div>
    )
    this.setState({popups: popups})
  }
, render: function() {
    return (<div>{this.state.popups}</div>)
  }
})

module.exports = Popups
