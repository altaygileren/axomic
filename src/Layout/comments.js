import React from "react";
import Singlecomment from "./single.comment";

const Comments = ({ comments }) => {
  return (
    <div>
      {comments.slice(0, 2).map((comment) => (
        <div key={comment.id}>
          <Singlecomment comment={comment} />
        </div>
      ))}
    </div>
  );
};

export default Comments;
