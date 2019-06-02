import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
class App extends React.Component {

  onSearchSubmit(term) {
    console.log(term);
    // axios
  }

  render() {
    return (
      <div className="ui container" style={{marginTop: '15px'}}><SearchBar onSubmit={this.onSearchSubmit}/></div>
    );
  }
}

// const App = () => {
//   return <div className="ui container" style={{marginTop: '15px'}}><SearchBar /></div>;
// }

export default App;
