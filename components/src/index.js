import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
    <ApprovalCard>
      <div><h4>Hello</h4></div>
      Lets try this
    </ApprovalCard>
    <ApprovalCard>
    <CommentDetail
        author="Sam"
        timeAgo="Many generations hence"
        content="good one!"/>
    </ApprovalCard>
    <ApprovalCard>
    <CommentDetail
        author="Alex"
        timeAgo="3 days ago"
        content="great one!"/>
    </ApprovalCard>
    <ApprovalCard>
    <CommentDetail
        author="James"
        timeAgo="1 month ago"
        content="nice one!"/>
    </ApprovalCard>
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'));
