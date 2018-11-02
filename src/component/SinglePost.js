import React from "react";

function SinglePost({ post }) {
  return (
    <div col-md-3>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.body}</p>
          <a href="#" className="card-link">
            Card link
          </a>
        </div>
      </div>
    </div>
  );
}
export default SinglePost;
