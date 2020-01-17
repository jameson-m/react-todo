import React from 'react';
import PropTypes from 'prop-types';
import './TodoItem.scss';

const TodoItem = ({ index, todo, handleDone }) => {
  const { title, isDone } = todo;

  return (
    <div className={'todo-item'}>
      <button
        className={`todo-radio-button ${isDone ? 'done' : ''}`}
        onClick={() => handleDone(index)}
      />
      <div className={'todo-item-body'}>
        <div>{title}</div>
      </div>
    </div>
  );
};

TodoItem.propTypes = {
  index: PropTypes.number.isRequired,
  todo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    isDone: PropTypes.bool.isRequired,
  }),
  handleDone: PropTypes.func.isRequired,
};

export default TodoItem;
