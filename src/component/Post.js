import React, { Component } from "react";
//conatiner
import Layout from "../container/Layout";
//components
import SinglePost from "./SinglePost";

import axios from "axios";

class Post extends Component {
  state = {
    posts: []
  };
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
      const posts = res.data.slice(0, 10);
      this.setState({
        posts
      });
    });
  }

  render() {
    const posts = this.state.posts.map(post => (
      <SinglePost key={post.id} post={post} />
    ));
    return (
      <div className="wraper">
        <Layout>
          <div className="row">{posts}</div>
        </Layout>
      </div>
    );
  }
}
export default Post;
