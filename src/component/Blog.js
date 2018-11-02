import React, { Component } from "react";
import "./Blog.css";

class Blog extends Component {
  render() {
    const { handleActiveTab } = this.props;
    return (
      <div className="wraper">
        <h2>What is Your thing ?</h2>

        <button className="btn btn-green" onClick={() => handleActiveTab(1)}>
          Reading!!
        </button>
        <button className="btn btn-green" onClick={() => handleActiveTab(3)}>
          Writting!!
        </button>
      </div>
    );
  }
}
export default Blog;
