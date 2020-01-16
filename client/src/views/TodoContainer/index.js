import React, { Component } from 'react';
import './TodoContainer.scss';
import TodoItem from '../../components/TodoItem';

class TodoContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        { title: 'task 1', dueDate: 'mm/dd/yyyy', isDone: false },
        { title: 'task 2', dueDate: 'mm/dd/yyyy', isDone: false },
        { title: 'task 3', dueDate: 'mm/dd/yyyy', isDone: false },
        { title: 'task 4', dueDate: 'mm/dd/yyyy', isDone: false },
        { title: 'task 5', dueDate: 'mm/dd/yyyy', isDone: false },
      ],
    };

    this.handleDone = this.handleDone.bind(this);
  }

  handleDone(index) {
    const { todos } = this.state;
    const updatedTodos = todos.map((todo, i) => {
      if (i === index) {
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      } else return todo;
    });

    this.setState(prevState => ({
      todos: updatedTodos,
    }));
  }

  render() {
    const todoList = this.state.todos.map((val, index) => (
      <TodoItem key={`todoItem${index}`} index={index} todo={val} handleDone={this.handleDone} />
    ));

    return (
      <div id={'todo-container'}>
        <h1>Todos</h1>
        <div className={'todo-list'}>{todoList}</div>
      </div>
    );
  }
}

export default TodoContainer;
