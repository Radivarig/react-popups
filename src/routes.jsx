var React = require('react')
var { Route, DefaultRoute, RouteHandler, Navigation } = require('react-router')

import FluxComponent from 'flummox/component'
import { FluxAppSingleton } from './flux/FluxApp'

var Popups = require('./Components/Popups.jsx')

var App = React.createClass({
  render: function(){
    return (
      <FluxComponent flux={FluxAppSingleton} connectToStores={['app']}>
        <AppView {...this.props}/>
      </FluxComponent>
    )
  }
})

var Popup = React.createClass({

  render: function() {
    var s = {
      height: '100'
    , width: '100'
    , backgroundColor: '#ABC'
    }
    var data = this.props.data || ''
    return (
      <div style={s}>
        data: {this.props.data.nodeValue}
        <ul>
          <li><div data={'data1'}>data1</div></li>
          <li><div data={'data2'}>data2</div></li>
        </ul>
      </div>
    )
  }
})

var AppView = React.createClass({
  render: function(){
    var self = this
    
    var onChangeCb = function(e){
      self.props.flux.getActions('app').setState( {testInput: e.target.value} )
    }

    return (
      <div>
        <Popups handler={Popup} data={'attributes.data'}/>
        this.props.testInput: {this.props.testInput}
        <br/>
        <ul>
          <li><div data={'data1'}>data1</div></li>
          <li><div data={'data2'}>data2</div></li>
        </ul>
        <input value={this.props.tesInput} onChange={onChangeCb}/>
        <RouteHandler/>
      </div>
    )
  }
})

    //<DefaultRoute name="" handler={}/>
var routes = (
  <Route name="app" path="/" handler={App}>
  </Route>
)

module.exports = routes
