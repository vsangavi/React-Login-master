import React, { Component } from "react";
import "../Styles/login.css";

class Login extends Component {
  render() {
    return (
      <div className="box">
        <br />
        <h1>Welcome Back!</h1>
        <form>
          <div>
            <label className="space">Email:</label>
            <input type="text" placeholder="Enter valid mail id" />
            <div>
              <label>Password:</label>
              <input type="Password" placeholder="Enter your password" />
            </div>
            <center>
              <div className="text-center">
                <button type="submit" className="btn1">
                  LOGIN
                </button>
              </div>
              <h4>
                Don't have an account? <a href="/register">Signup</a>
              </h4>
            </center>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
