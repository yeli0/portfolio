import React, { Component } from 'react';
import Typed from "react-typed";

class TextEffect extends Component {
  render() {
    return (
      <div className="text-effect">
        <Typed
          strings={["Hello.", "I'm Front-end Developer."]}
          typeSpeed={200}
          backSpeed={100}
        />
      </div>
    );
  }
}

export default TextEffect;

