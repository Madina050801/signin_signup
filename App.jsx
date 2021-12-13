import React from "react";
import "./index.css";
import Singin from "./Singin";
import Create from "./Create";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true,
    };
  }
  render() {
    const getChange = () => {
      this.setState({ active: !this.state.active });
    };

    return (
      <div className="container">
        {this.state.active ? <Create /> : <Singin />}
        <div className="changebtn">
        <a onClick={getChange}>
          {this.state.active ? 'Sign in' : "Create account"}
        </a>
        </div>
        
      </div>
    );
  }
}

export default App;
