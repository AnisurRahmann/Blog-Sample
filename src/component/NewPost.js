import React, { Component } from "react";
import "./Newpost.css";
import OptionModal from "../container/Modal";

class NewPost extends Component {
  state = {
    title: "",
    post: "",
    psotedData: "",
    modalIsOpen: false
  };
  handleOnChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const data = {
      title: this.state.title,
      post: this.state.post
    };
    this.setState({
      psotedData: data,
      modalIsOpen: !this.state.modalIsOpen
    });
  };
  handleCloseModal = () => {
    this.setState({
      modalIsOpen: false
    });
  };
  render() {
    return (
      <div className="NewPost">
        <h2>
          Write A new Post <span>share your idea to the world</span>
        </h2>
        <form className="post-form">
          <div className="from-group">
            <label>Title</label>
            <input
              type="text"
              name="title"
              className="form-control"
              placeholder="title"
              value={this.state.title}
              onChange={this.handleOnChange}
            />
            <small className="form-text text-muted">
              Giv a title to your post
            </small>
          </div>
          <div className="form-group">
            <label>Write your post</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              name="post"
              placeholder="write your post"
              value={this.state.post}
              onChange={this.handleOnChange}
            />
          </div>
          <button className="btn btn-success" onClick={this.handleSubmit}>
            {" "}
            submit
          </button>
        </form>
        <OptionModal
          modalIsOpen={this.state.modalIsOpen}
          psotedData={this.state.psotedData}
          handleCloseModal={this.handleCloseModal}
        />
      </div>
    );
  }
}
export default NewPost;
