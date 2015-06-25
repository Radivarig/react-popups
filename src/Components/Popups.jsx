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
, spawnLinkedDiv: function (e) {
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
    popups.push (<div key={Math.random()} style={s}><this.props.handler data={data}/></div>)
    this.setState({popups: popups})
  }
, render: function() {
    return (<div>{this.state.popups}</div>)
  }
})

module.exports = Popups
