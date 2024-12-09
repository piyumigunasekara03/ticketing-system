import React, { useState } from 'react';
import './CommentForm.css';

const CommentForm = ({ addComment }) => {
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addComment(comment);
    setComment('');
  };

  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <label htmlFor="comment">Add Comment</label>
      <textarea
        id="comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CommentForm;
