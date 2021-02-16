import React from "react";
import { Link } from "react-router-dom";
const Singlecomment = ({ comment }) => {
  return (
    <div key={comment.id} className="single-comment-div">
      <p>{comment.body}</p>
      <h4>
        - <Link to={`/user/${comment.author.id}`}>{comment.author.name}</Link>
      </h4>
      <hr />
    </div>
  );
};

export default Singlecomment;
