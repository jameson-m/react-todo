import React from 'react';
import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';
import './TodoItem.scss';

function TodoItem({ index, todo, handleDone }) {
  const { title, isDone } = todo;

  const todoItemProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 },
  });

  return (
    <animated.div style={todoItemProps} className={'todo-item'}>
      {/* <div className={'todo-item'}> */}
      <button
        className={`todo-radio-button ${isDone ? 'done' : ''}`}
        onClick={() => handleDone(index)}
      />
      <div className={'todo-item-body'}>
        <div>{title}</div>
      </div>
    </animated.div>
    // </div>
  );
}

TodoItem.propTypes = {
  index: PropTypes.number.isRequired,
  todo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    isDone: PropTypes.bool.isRequired,
  }),
  handleDone: PropTypes.func.isRequired,
};

export default TodoItem;
