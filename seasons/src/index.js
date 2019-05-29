import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {lat: null}; // only time we direct;y assign a value to state obj
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({lat: position.coords.latitude})
        console.log(this.state);
    }, (err) => {
      console.log(err.message);
    }
    );
  }

  render() {

    return <div> Latitude: {this.state.lat}</div>
  }
}



ReactDOM.render(<App/>, document.querySelector("#root"))
