var React = require('react')
var render = require('react-dom').render
var Popups = require('./Popups.jsx')

var Popup = React.createClass({
  render: function() {
    var popup_style = {
      height: 'auto'
    , width: 'auto'
    , backgroundColor: '#ABC'
    , borderStyle: 'solid'
    , borderColor: '#567'
    }
    var ToDisplay = <DefaultPopup info={this.props.data}/>
    if (this.props.data === 'universe') {ToDisplay = <Universe/>}

    return (
      <div style={popup_style}>
        {ToDisplay}
      </div>
    )
  }
})

var PopupLink = React.createClass({
  render: function(){
    var link_style = {
      cursor: 'pointer'
      , color: '#00F'
    }
    return (
      <span data={this.props.data} style={link_style}>
        {this.props.children}
      </span>
    )
  }
})

var DefaultPopup = React.createClass({
  render: function(){
    return (
      <div >
        <div>info: {this.props.info}</div>
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
  }
})

var Universe = React.createClass({
  render: function() {
    return (
      <p>
        The <PopupLink data={'universe'}>Universe</PopupLink> is all of time and space and its contents.
        The Universe includes <PopupLink data={'planets'}>planets</PopupLink>
        , <PopupLink data={'stars'}>stars</PopupLink>
        , <PopupLink data={'galaxies'}>galaxies</PopupLink>
        , the contents of <PopupLink data={'intergalactic space'}>intergalactic space</PopupLink>
        , the smallest subatomic particles, and all matter and energy.
        The majority of matter and energy is most likely in the form
        of <PopupLink data={'dark matter'}>dark matter</PopupLink> and <PopupLink data={'dark energy'}>dark energy</PopupLink>.
      </p>
    )
  }
})

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Popups handler={Popup} clickButtons={[0]} />
        <Universe/>
      </div>
    )
  }
})


render(<App/>, document.getElementById('app'))
