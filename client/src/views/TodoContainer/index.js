import React, { Component } from 'react';
import './TodoContainer.scss';
import TodoItem from '../../components/TodoItem';
import AddTodoButton from '../../components/AddTodoButton';

class TodoContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        { title: 'task 1', isDone: false },
        { title: 'task 2', isDone: false },
        { title: 'task 3', isDone: false },
        { title: 'task 4', isDone: false },
        { title: 'task 5', isDone: false },
      ],
      isAdding: false,
      newTodoValue: '',
    };

    this.addTodo = this.addTodo.bind(this);
    this.handleNewTodoChange = this.handleNewTodoChange.bind(this);
    this.handleDone = this.handleDone.bind(this);
    this.toggleAdd = this.toggleAdd.bind(this);
  }

  addTodo() {
    const { isAdding, newTodoValue } = this.state;

    const addInputWrapper = document.querySelector('#addInputWrapper');

    if (isAdding) {
      this.setState(
        prevState => ({
          todos: [ ...prevState.todos, { title: newTodoValue, isDone: false } ],
          isAdding: false,
          newTodoValue: '',
        }),
        () => {
          setTimeout(() => {
            addInputWrapper.classList.add('closed');
          }, 225);
        }
      );
    } else {
      addInputWrapper.classList.remove('closed');
      this.setState(
        prevState => ({ ...prevState, isAdding: true }),
        () => {
          const addInput = document.querySelector('#addInput');
          addInput.focus();
        }
      );
    }
  }

  handleNewTodoChange(e) {
    const newTodoValue = e.target.value;
    this.setState(prevState => ({
      ...prevState,
      newTodoValue,
    }));
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

  toggleAdd() {
    this.setState(prevState => ({ ...prevState, isAdding: !prevState.isAdding }));
  }

  render() {
    const { isAdding, newTodoValue } = this.state;
    const todoList = this.state.todos.map((val, index) => (
      <TodoItem key={`todoItem${index}`} index={index} todo={val} handleDone={this.handleDone} />
    ));

    return (
      <div id={'todo-container'}>
        <h1>Todos</h1>
        <div className={'toolbar'}>
          <AddTodoButton
            onClick={this.addTodo}
            isAdding={isAdding}
            newTodoValue={newTodoValue}
            handleNewTodoChange={this.handleNewTodoChange}
            toggleAdd={this.toggleAdd}
          />
        </div>
        <div className={'todo-list'}>{todoList}</div>
      </div>
    );
  }
}

export default TodoContainer;
