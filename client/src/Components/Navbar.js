import React, { Component } from "react";
import "../Styles/nav.css";
class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <ul>
          <li className="logo">
            <a href="#home">Shopee</a>
          </li>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#news">Cart</a>
          </li>
          <li>
            <a href="#contact">WishList</a>
          </li>
          
          {/* <li className="list-right">
            <a class="active" href="#about">
              Signout
            </a>
          </li> */}
        </ul>
      </div>
    );
  }
}
export default Navbar;
