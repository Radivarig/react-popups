# react-popups

![](http://i.imgur.com/VuwWFn2.gif)

### Install

`npm install react-popups`

### Demo

Read the [example code](https://github.com/Radivarig/react-popups/blob/master/src/entry.jsx), or run it
```bash
git clone git@github.com:Radivarig/react-popups.git
npm install
npm run dev 
```
navigate to `localhost:8080`

### Features

- create custom popup components on event ('click', 'contextMenu', ..)
- pass data to them
- detect screen quadrant (safe to click near edges)
- close all front popups on click

### Basic Usage

```javascript
// ...
var Popups = require('react-popups')

var PopupHandler = React.createClass({
  render: function() {
    console.log('received: ', this.props.data.nodeValue) // received: clicked element identifier
    var Popup = <DefaultPopup/>
    switch(this.props.data.nodeValue) {
      case 'clicked element identifier': Popup = <SomePopup/>; break
      // ...
    }
  }
  return ({Popup})
})

var App = React.createClass({
  render: function() {
    return (
      <div>
        {/*Popups will pass event.target[data] as data to handler*/}
        <Popups handler={PopupHandler} data={'attributes.data-yourdata'} event='click'/>
        Some <a data-yourdata={'clicked element identifier'} href='#'>demo</a> text.
      </div>
    )
  }
})

React.render(<App/>, document.body)
```

### License

MIT
