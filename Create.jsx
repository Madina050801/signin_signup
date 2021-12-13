import React, { Component } from "react";
import "./index.css";
import user from './images/user.png'

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
          <h1>Create Account!</h1>
          <div className="input">
            <input type="text" placeholder="name" name="name" />
            <img
              src={user}
              alt=""
              style={{ width: `20px`, marginLeft: `10px` }}
            />
          </div>
          <div className="input">
            <input type="email" placeholder="email" name="email" />
          </div>
          <div className="input">
            <input type="password" placeholder="password" name="Password" />
          </div>
          <div className="dflex">
          </div>
          <div className="button">
            <button>Create </button>
          </div>
      </div>
    );
  }
}
