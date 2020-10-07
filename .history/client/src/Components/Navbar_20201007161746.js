import React, { Component } from "react";
import "../Styles/nav.css";
class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#news">News</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li style={{ float: "right", color: #3f3ae1 }}>
            <a class="active" href="#about">
              Signout
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
export default Navbar;
