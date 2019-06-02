import React from 'react';

class SearchBar extends React.Component {

  state = {term: 'Enter your search term here'};
  // onInputChange(event) {
  //   console.log(event.target.value);
  // }

  // onInputClick(event) {
  //   console.log("Input was clicked");
  //   console.log(event);
  // }

  // onFormSubmit(event) {
  //   event.preventDefault();
  //   console.log(this.state);
  // }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  }

  render() {
    return (
      <div className="ui segment">
      <form className ="ui form" onSubmit={this.onFormSubmit}>
      <div className="field">
      <label>Image Search</label>
      <input type='text' value={this.state.term} onChange={(e) => this.setState({term: e.target.value})} /> {/* onChange is a special class; onClick={this.onInputClick}; refactor: <input type='text' onChange={(e) => console.log(e.target.value)} /> */}
      </div>
      </form>
      </div>
    );
  }
}

export default SearchBar;
