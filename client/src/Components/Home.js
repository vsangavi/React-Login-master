import React, { Component } from "react";
import Navbar from "./Navbar";
import "../Styles/home.css";

class Home extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="row">
          <div className="column">
            <div className="card">
              {" "}
              <img
                src={
                  "https://images.pexels.com/photos/772666/pexels-photo-772666.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                }
                alt="sunglass1"
              />
              <p>Sunglass Name</p>
              <p>Rs 699</p>
              <button className="button-style">Add to Cart</button>
              <button className="button-style">Buy now</button>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <img
                src={
                  "https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                }
                alt="sunglass2"
              />
              <p>Sunglass Name</p>
              <p>Rs 699</p>
              <button className="button-style">Add to Cart</button>
              <button className="button-style">Buy now</button>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <img
                src={
                  "https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                }
                alt="sunglass3"
              />
              <p>Sunglass Name</p>
              <p>Rs 699</p>
              <button className="button-style">Add to Cart</button>
              <button className="button-style">Buy now</button>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <img
                src={
                  "https://images.pexels.com/photos/386410/pexels-photo-386410.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                }
                alt="sunglass4"
              />
              <p>Sunglass Name</p>
              <p>Rs 699</p>
              <button className="button-style">Add to Cart</button>
              <button className="button-style">Buy now</button>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <img
                src={
                  "https://images.pexels.com/photos/343720/pexels-photo-343720.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                }
                alt="sunglass5"
              />
              <p>Sunglass Name</p>
              <p>Rs 699</p>
              <button className="button-style">Add to Cart</button>
              <button className="button-style">Buy now</button>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <img
                src={
                  "https://images.pexels.com/photos/860917/pexels-photo-860917.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                }
                alt="sunglass6"
              />
              <p>Sunglass Name</p>
              <p>Rs 699</p>
              <button className="button-style">Add to Cart </button>
              <button className="button-style">Buy now</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Home;
