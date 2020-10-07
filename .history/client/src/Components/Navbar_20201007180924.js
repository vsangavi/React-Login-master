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
            <a href="#news">Cart</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li className="list-right">
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
