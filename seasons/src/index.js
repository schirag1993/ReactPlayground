import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {lat: null, errorMessage: ""}; // only time we directly assign a value to state obj
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({lat: position.coords.latitude});
        console.log(this.state);
    }, (err) => {
      this.setState({errorMessage: err.message})
      console.log(this.state);
    }
    );
  }

    render() {
      if(!this.state.lat && !this.state.errorMessage) return <div>Loading...</div>
      if(this.state.lat) return <div> Latitude: {this.state.lat}</div>
      return <div> Error: {this.state.errorMessage}</div>
    }

  // render() {
  //     return (
  //       <div> Latitude: {this.state.lat}
  //       <br/>
  //       Error: {this.state.errorMessage}
  //       </div>
  //     )
  //   }
}





ReactDOM.render(<App/>, document.querySelector("#root"))
