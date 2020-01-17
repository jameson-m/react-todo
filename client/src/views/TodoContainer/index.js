import React, { useState, useRef, useEffect } from 'react';
import './TodoContainer.scss';
import TodoItem from '../../components/TodoItem';
import AddTodoButton from '../../components/AddTodoButton';

function TodoContainer() {
  const tRef = useRef(null);
  const [ todos, setTodos ] = useState([
    { title: 'task 1', isDone: false },
    { title: 'task 2', isDone: false },
    { title: 'task 3', isDone: false },
    { title: 'task 4', isDone: false },
    { title: 'task 5', isDone: false },
  ]);
  const [ isAdding, setIsAdding ] = useState(false);
  const [ newTodoValue, setNewTodoValue ] = useState('');
  const [ toolbarRef, setToolbarRef ] = useState(null);

  useEffect(() => {
    setToolbarRef(tRef);
  }, []);

  function addTodo() {
    const addInputWrapper = document.querySelector('#addInputWrapper');

    if (isAdding) {
      setTodos([ ...todos, { title: newTodoValue, isDone: false } ]);
      setIsAdding(false);
      setNewTodoValue('');
      (() => {
        setTimeout(() => {
          addInputWrapper.classList.add('closed');
        }, 225);
      })();
    } else {
      addInputWrapper.classList.remove('closed');
      setIsAdding(true);
      (() => {
        setTimeout(() => {
          const addInput = document.querySelector('#addInput');
          addInput.focus();
        }, 50);
      })();
    }
  }

  function handleNewTodoChange(e) {
    const newTodoValue = e.target.value;
    setNewTodoValue(newTodoValue);
  }

  function handleDone(index) {
    const updatedTodos = todos.map((todo, i) => {
      if (i === index) {
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      } else return todo;
    });

    setTodos(updatedTodos);
  }

  return (
    <div id={'todo-container'}>
      <h1>Todos</h1>
      <div className={'toolbar'} ref={tRef}>
        <AddTodoButton
          onClick={addTodo}
          isAdding={isAdding}
          newTodoValue={newTodoValue}
          handleNewTodoChange={handleNewTodoChange}
          toolbarRef={toolbarRef}
        />
      </div>
      <div className={'todo-list'}>
        {todos.map((val, index) => (
          <TodoItem key={`todoItem${index}`} index={index} todo={val} handleDone={handleDone} />
        ))}
      </div>
    </div>
  );
}

export default TodoContainer;
