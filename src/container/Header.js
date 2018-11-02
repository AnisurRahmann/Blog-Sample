import React from "react";

function Header({ activeTab, handleActiveTab, handleSideBar }) {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#" onClick={() => handleActiveTab(0)}>
          Sample Blog
        </a>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a
              className={`nav-item nav-link ${activeTab === 0 && "active"}`}
              href="#"
              onClick={() => handleActiveTab(0)}
            >
              Home <span className="sr-only">(current)</span>
            </a>
            <a
              className={`nav-item nav-link ${activeTab === 1 && "active"}`}
              href="#"
              onClick={() => handleActiveTab(1)}
            >
              Posts
            </a>
            <a
              className={`nav-item nav-link ${activeTab === 3 && "active"}`}
              href="#"
              onClick={() => handleActiveTab(3)}
            >
              New Post
            </a>
            <a
              className={`nav-item nav-link ${activeTab === 2 && "active"}`}
              href="#"
              onClick={handleSideBar}
            >
              About
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Header;
