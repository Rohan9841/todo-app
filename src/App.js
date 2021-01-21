import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';

class App extends Component {

  state = {
    todos:[
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'play mario cart'}
    ]
  }

  deleteTodo = (id)=>{
    const newTodos = this.state.todos.filter(todo=>{
      return todo.id !== id
    })

    this.setState({
      todos: newTodos
    })
  }

  addTodo = (todo) =>{
    todo.id = Math.random();
    let newTodoList = [...this.state.todos, todo];
    this.setState({
      todos: newTodoList
    })
  }

  render() {
    return (
      <div className="App container">
        <h1 className = "center blue-text">Todos</h1>
        <Todos todosProp = {this.state.todos} deleteTodoProp = {this.deleteTodo}/>
        <AddTodo addTodoProp = {this.addTodo}/>
      </div>
    );
  }

}

export default App;
