import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      backgroundColor: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            style={checkboxStyle}
            type="checkbox"
            onChange={this.props.setComplete.bind(this, id)}
          />
          {title}
          <button
            style={buttonStyle}
            onClick={this.props.deleteTodo.bind(this, id)}
          >
            Delete
          </button>
        </p>
      </div>
    );
  }
}

const checkboxStyle = {
  padding: "5px",
  margin: "5px"
};

const buttonStyle = {
  float: "right",
  cursor: "pointer",
  borderRadius: "20%",
  padding: "5px",
  color: "#fff",
  backgroundColor: "#d9534f",
  borderColor: "#d43f3a"
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};

export default TodoItem;
