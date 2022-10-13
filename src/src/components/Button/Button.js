import React from "react";

import "./Button.css";

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.onClick(event);
  }

  render() {
    if (this.props.className.includes("icon")) {
      return (
        <button
          className={this.props.className}
          onClick={this.handleClick}
          aria-label={this.props.label}
        >
        </button>
      );
    } else {
      return (
        <button className={this.props.className} onClick={this.handleClick}>
          {this.props.value}
        </button>
      );
    }
  }
}

export default Button;