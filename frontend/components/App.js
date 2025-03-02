



import React from "react";
import axios from "axios";

const URL = "http://localhost:9000/api/todos"

export default class App extends React.Component {
  
   state = {
       todos: [],
       error: '',
       toDoNameInput: ''
   }

   FetchAllTodos = () => {
        axios.get(URL)
            .then(res => {
               this.setState({ ...this.state, todos: res.data.data })
               
            })
            .catch(err => {
      
               this.setState({ ...this.state, error: err.message})
            })
   }

   componentDidMount(){
    this.FetchAllTodos();
   }

   inputChange = (e) => {
      const { value } = e.target;
      this.setState({ ...this.state, toDoNameInput: value })
   }

  render(){
    return(
    <div>
     <div>
        <h3>Error: {this.state.error}</h3>
        <input type="text" 
        value={this.state.toDoNameInput} 
        onChange={this.inputChange}/>
        <button >Submit</button>
       <h2>Todos: </h2>
       {this.state.todos.map(td => {
        return<div key={td.id}> {td.name}</div>
       })}
     </div>
    
    </div>
    )
  }
}
