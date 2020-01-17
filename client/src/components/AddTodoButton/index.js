import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';
import './styles/index.scss';

function AddTodoButton({ onClick, isAdding, newTodoValue, handleNewTodoChange, toolbarRef }) {
  const [ clickCount, setClickCount ] = useState(0);

  const percentToPxw = () => (toolbarRef ? `${toolbarRef.current.clientWidth}px` : '50px');

  const addButtonAnimatedProps = useSpring({
    width: isAdding ? percentToPxw() : '50px',
    height: isAdding ? '75px' : '50px',
    borderRadius: isAdding ? '15px' : '50px',
    config: {
      duration: 200,
    },
    // TODO: onRest item to resize add div on window resize
  });

  // TODO: Set up this transition to it can replace the timeouts setting #addInputWrapper
  // const inputAnimatedProps = useSpring({
  //   to: async (next, cancel) => {
  //     await next({ opacity: 0 });
  //     await next({ display: 'none' });
  //   },
  //   from: {
  //     display: 'block',
  //   },
  // });

  return (
    <animated.div
      id={'add-button-container'}
      style={addButtonAnimatedProps}
      className={`add-button ${isAdding ? '' : 'closed'}`}
    >
      <animated.div id={'addInputWrapper'} className={`add-form closed`}>
        <input
          id={'addInput'}
          type={'text'}
          className={'todo-edit'}
          name={'newTodoValue'}
          value={newTodoValue}
          onChange={handleNewTodoChange}
        />
      </animated.div>
      <button
        onClick={() => {
          setClickCount(clickCount + 1);
          onClick();
        }}
      >
        {isAdding ? '+' : '+'}
      </button>
    </animated.div>
  );
}

AddTodoButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  isAdding: PropTypes.bool,
  newTodoValue: PropTypes.string.isRequired,
  handleNewTodoChange: PropTypes.func.isRequired,
  toolbarRef: PropTypes.object,
};

AddTodoButton.defaultProps = {
  onClick: () => console.log('Button clicked! Now add a real function.'),
  isAdding: false,
};

export default AddTodoButton;
