import React from "react";
import "./InputField.css";

class InputField extends React.Component {
  constructor(props) {
    super(props);

    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleSearch(event) {
    this.props.onSearch(event);
  }

  handleChange(event) {
    this.props.onChange(event.target.value);
  }

  handleKeyDown(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      event.stopPropagation();
      this.handleSearch(event);
    }
  }

  render() {
    return (
      <div className={`InputField ${this.props.className}`}>
        <input
          name={this.props.name}
          id={this.props.name}
          aria-label={this.props.name}
          className="input"
          placeholder={this.props.placeholder}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
        ></input>
      </div>
    );
  }
}

export default InputField;