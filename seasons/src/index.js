import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {lat: null, errorMessage: ""}; // only time we directly assign a value to state obj
  // }
  state = {lat: null, errorMessage: ""};
  componentDidMount() {
    console.log("Component mounted!");
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({lat: position.coords.latitude}),
        (err) => this.setState({errorMessage: err.message})
    );
  }
  componentDidUpdate() {
    console.log("Component updated!");
  }

    render() {
      if(!this.state.lat && !this.state.errorMessage) return <div>Loading...</div>
      if(this.state.lat) return <SeasonDisplay lat={this.state.lat}/>
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
