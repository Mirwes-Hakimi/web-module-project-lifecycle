import React from 'react';
import Todo from './Todo';

export default class TodoList extends React.Component {
  
  render() {
    
    return( 
    <div>
      {this.addingNewtodosProps && this.addingNewtodosProps.map((todo) => (
        <Todo
        key={todo.id}
        todos={todo}
         />
      ))}
    </div>
    )
  }
}
