# react-popups

Try it - [Live Example](https://radivarig.github.io/#/react-popups)

![](http://i.imgur.com/VuwWFn2.gif)

### Install

`npm install react-popups` (peer dependencies: `react react-dom`)

for React **v0.13.3** `npm install react-popups@1.1.1`

### Demo

Check out [Live Example](https://radivarig.github.io/#/react-popups) and the [example code](https://github.com/Radivarig/react-popups/blob/master/src/PopupsViewer.jsx), or run locally
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
      // var something = this.props.popupProps.something
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
                //popupProps={something: ..}  // will be passed to PopupHandler

        Some <a data-yourdata={'clicked element identifier'} href={linkIfNoMatch}>demo</a> text.
      </div>
    )
  }
})

require('react-dom').render(<App/>, document.body)
```

### License

MIT
