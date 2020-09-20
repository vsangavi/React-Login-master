import React, { Component } from "react";
import "../Styles/register.css";

class Register extends Component {
  render() {
    return (
      <div className="box">
        <br />
        <h1>SignUp</h1>

        <form>
          <div>
            <label>Name:</label>
            <input type="text" placeholder="Enter your name" />
            <label>Email:</label>
            <input type="email" placeholder="Enter valid mail id" />
            <label>Mobile:</label>
            <input type="number" placeholder="Enter valid mobile " />
            <label>Password:</label>
            <input type="Password" placeholder="Enter your password" />
            <center>
              <button type="submit" className="btn1">
                REGISTER
              </button>
            </center>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
