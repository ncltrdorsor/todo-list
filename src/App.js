import React, { Component } from "react";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import Header from "./components/layout/Header";

import "./App.css";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Create .pptx for ReactJS introduction course",
        completed: true
      },
      {
        id: 2,
        title: "Show the actual .pptx to people",
        completed: true
      },
      {
        id: 3,
        title: "Make an awesome demo",
        completed: false
      }
    ]
  };

  setComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  deleteTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };

  AddTodo = (title) => {
    const newTodo = {
      id: this.state.todos.length + 1,
      title: title,
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo AddTodo={this.AddTodo} />
          <Todos
            todos={this.state.todos}
            setComplete={this.setComplete}
            deleteTodo={this.deleteTodo}
          />
        </div>
      </div>
    );
  }
}

export default App;
