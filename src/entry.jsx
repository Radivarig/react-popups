var React = require('react')
var Popups = require('./Popups.jsx')

var Popup = React.createClass({
  render: function() {
    var s = {
      height: '100'
    , width: '170'
    , backgroundColor: '#ABC'
    , borderStyle: 'solid'
    , borderColor: '#567'
    }
    var data = this.props.data || ''
    return (
      <div style={s}>
        data: {this.props.data.nodeValue}
        <ul>
          <li><div data={'some popup data1'}>popup data 1</div></li>
          <li><div data={'some popup data2'}>popup data 2</div></li>
        </ul>
      </div>
    )
  }
})

var App = React.createClass({
  render: function(){
    var s = {
      borderStyle: 'solid'
    , borderColor: '#234'
    , borderWidth: '1px'
    , textAlign: 'center'}
    return (
      <div>
        
        <Popups handler={Popup} data={'attributes.data'}/>
        
        <ul>
          <li style={s}><div data={'custom data1'}>data1</div></li>
          <li style={s}><div data={'custom data2'}>data2</div></li>
          <li style={s}><div data={'custom data3'}>data3</div></li>
        </ul>
      
      </div>
    )
  }
})

React.render(<App/>, document.getElementById('app'))
