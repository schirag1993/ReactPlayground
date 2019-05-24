import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
    <CommentDetail author="Sam" timeAgo="Many generations hence"/>
    <CommentDetail author="Alex" timeAgo="3 days ago"/>
    <CommentDetail author="James" timeAgo="1 month ago"/>
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'));
