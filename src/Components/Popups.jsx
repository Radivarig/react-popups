var React = require('react')
var OnClickOutside = require('react-onclickoutside')

var Popups = React.createClass({
  mixins: [ OnClickOutside ]
, getInitialState: function () {
    return { popups: [] }
  }
, componentDidMount: function () {
    document.addEventListener('click', this.spawnLinkedDiv)
  }
, componentWillUnmount: function () {
    document.removeEventListener('click', this.spawnLinkedDiv)
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

    var data = e.target
    var arr = this.props.data.split('.')
    while(arr.length) {
      data = data[arr.shift()]
      if ( !data ) return
    }
    var popups = this.state.popups
    var s = {
      position: 'fixed'
    , left: e.pageX
    , top: e.pageY
    }
    var id = Math.random()
    popups.push (<div data-popupkey={id} key={id} style={s}>
                  <this.props.handler data={data}/></div>)
    this.setState({popups: popups})
  }
, render: function() {
    return (<div>{this.state.popups}</div>)
  }
})

module.exports = Popups
