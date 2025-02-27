import React from 'react'

export default class Todo extends React.Component {
  render() {
    const {todos} = this.props;
    return (
      <div>
       {todos.name}
      </div>
    )
  }
}
