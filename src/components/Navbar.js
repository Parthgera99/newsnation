import React, { Component } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <h1>
          NewsNation
        </h1>
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item active" >
              <Link className="nav-link" to="/business">Business</Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/sports">Sports</Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/science">Science</Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/health">Health</Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/technology">Technology</Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/entertainment">Entertainment</Link>
            </li>
          </ul>
        </div>
        <form className="form-inline">
          <input className="form-control mr-sm-2" onChange={this.props.handleOnchange} value={this.props.text} disabled id="placeholder" type="search" placeholder="Search {Coming Soon}" aria-label="Search"/>
          {/* <button className="btn btn-outline-success my-2 my-sm-0" onClick={this.props.search} >Search</button> */}
        </form>
      </nav>
      </>
    );
  }
}