import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
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
