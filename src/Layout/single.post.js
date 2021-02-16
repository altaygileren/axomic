import React, { useState } from "react";
import Comments from "./comments";
import { Link } from "react-router-dom";

const Singlepost = ({ post }) => {
  const [viewComments, setViewComments] = useState(false);
  return (
    <div key={post.id} className="single-post-div">
      <h4>{post.title}</h4>
      <p>{post.body}</p>
      <p>
        - <Link to={`/user/${post.author.id}`}>{post.author.name}</Link>
      </p>
      {post.comments ? (
        <button onClick={() => setViewComments(!viewComments)}>
          View Comments
        </button>
      ) : null}
      {viewComments && <Comments comments={post.comments} />}
    </div>
  );
};

export default Singlepost;
