import React, { Component } from "react";
//containers
import Layout from "./container/Layout";
import Header from "./container/Header";
import Footer from "./container/Footer";
import SideBar from "./container/SideBar";
//components
import Blog from "./component/Blog";
import Post from "./component/Post";
import About from "./component/About";
import NewPost from "./component/NewPost";
import "./App.css";

class App extends Component {
  state = {
    activeTab: 0,
    sideBar: false
  };
  handleActiveTab = index => {
    this.setState({
      activeTab: index
    });
  };
  handleSideBar = () => {
    this.setState({
      sideBar: !this.state.sideBar
    });
  };
  renderContent() {
    switch (this.state.activeTab) {
      default:
      case 0:
        return <Blog handleActiveTab={this.handleActiveTab} />;
      case 1:
        return <Post />;

      case 3:
        return <NewPost />;
    }
  }
  render() {
    return (
      <div className="App">
        <Header
          activeTab={this.state.activeTab}
          handleActiveTab={this.handleActiveTab}
          handleSideBar={this.handleSideBar}
        />
        {this.state.sideBar && (
          <SideBar>
            <About />
          </SideBar>
        )}
        {this.renderContent()}
        <Footer />
      </div>
    );
  }
}

export default App;
