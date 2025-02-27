import React from 'react';
import axios from 'axios';
import TodoList from './TodoList';



export default class App extends React.Component {
  constructor(){
    super(),
    this.state = {
      toDosList: []
    }
  }

  adding = (addName) => {
     const newTask = {
      name: addName,
      completed: false
     };

    axios.post(`http://localhost:9000/api/todos`, newTask)
       .then(res => {
        this.setState({toDosList: [this.state.toDosList, res.data]})
       })
       .catch(err => console.log("Error adding todo",err.message))
  }


  render() {
    return (
      <div>
        <TodoList addingNewtodosProps={this.state.toDosList}/>
      </div>
    )
  }
}
