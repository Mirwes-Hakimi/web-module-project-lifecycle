import React from 'react';

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      name: ''
    };
  }

  handleInputChange = (e) => {
    this.setState({
      name: e.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault(); 
    this.props.addNewTodos(this.state.name); 
    this.setState({ name: '' });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleInputChange}
            placeholder="Type your todo"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
