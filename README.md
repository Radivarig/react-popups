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

- create custom popup components on custom event
- pass data to them
- detect screen quadrant (safe to click near edges)
- close all front popups on click

### Basic Usage

```javascript
// ...
var Popups = require('react-popups')

var PopupHandler = React.createClass({
  render: function() {
    console.log('received: ', this.props.data) // received: clicked element identifier
    var Popup = <DefaultPopup/>
    switch(this.props.data) {
      case 'clicked element identifier': Popup = <SomePopup/>; break
      // ...
    }
  }
  return ({Popup})
})

var App = React.createClass({
  render: function() {
    var linkIfNoMatch = '/your-url' // for no action use 'javaScript:void(0)'
    return (
      <div>
        <Popups handler={PopupHandler}
                clickButtons={[0]}        // if defined adds 'click' event; 0 left, 1 middle, 2 right
                dataName='data-yourdata'  // defaults to 'data'
                />
                //event='someOtherEvent'

        Some <a data-yourdata={'clicked element identifier'} href={linkIfNoMatch}>demo</a> text.
      </div>
    )
  }
})

React.render(<App/>, document.body)
```

### License

MIT
