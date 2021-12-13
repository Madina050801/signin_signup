import React, { Component } from "react";
import "./index.css";

export default class Singin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
          <h1>Welcome!</h1>
          <h4>Sign in to your account!</h4>
          <div className="input">
            <input type="text" placeholder="name" name="name" />
            <img src="./images/user.png" alt="" />
            <div>{this.props.user}</div>
          </div>
          <div className="input">
            <input type="password" placeholder="password" name="password" />
          </div>
          <div className="dflex bottom">
            <div>remember me?</div>
          </div>
          <div className="button">
            <button>Login</button>
          </div>
      </div>
    );
  }
}
