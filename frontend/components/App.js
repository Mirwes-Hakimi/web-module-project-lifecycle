import React from 'react';
import axios from 'axios';
import TodoList from './TodoList';
import Form from './Form';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }

  //// Fetch todos after the component mounts
  componentDidMount(){
    axios.get("ttp://localhost:9000/api/todos")
    .then((res) => {
      this.setState({todos: res.data });
    })
    .catch((err) => {
      console.error('Error fetching todos', err)
    })
  }

  componentDidUpdate(prevProps, prevState){
    /// check if the length of todos list has changed
if(prevState.todos.length !== this.state.todos.length){
  console.log('Todos list updated', this.state.todos)
}
  }
  addNewTodos = (addName) => {
    const newTask = {
      name: addName,
      completed: false
    };

  axios
  .post('http://localhost:9000/api/todos', newTask)
  .then((res) => {
    console.log('New todo created:', res.data);
    this.setState({ todos: [...this.state.todos, res.data] });
  })
  .catch((err) => console.log('Error adding todo', err.message));

};
  render() {
    
    return (
      <div>
        <Form addNewTodos={this.addNewTodos} />
        <TodoList todos={this.state.todos} />
       
      </div>
    );
  }
}
