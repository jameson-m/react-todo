import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles/index.scss';

const AddTodoButton = ({ onClick, isAdding, newTodoValue, handleNewTodoChange, toggleAdd }) => {
  const [ clickCount, setClickCount ] = useState(0);

  return (
    <div className={`add-button ${clickCount > 0 && isAdding && 'open'} ${!isAdding && 'closed'}`}>
      <div id={'addInputWrapper'} className={`add-form closed`}>
        <input
          id={'addInput'}
          type={'text'}
          className={'todo-edit'}
          name={'newTodoValue'}
          value={newTodoValue}
          onChange={handleNewTodoChange}
        />
      </div>
      <button
        onClick={() => {
          setClickCount(clickCount + 1);
          onClick();
        }}
      >
        {isAdding ? '+' : '+'}
      </button>
    </div>
  );
};

AddTodoButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  isAdding: PropTypes.bool,
  newTodoValue: PropTypes.string.isRequired,
  handleNewTodoChange: PropTypes.func.isRequired,
  toggleAdd: PropTypes.func.isRequired,
};

AddTodoButton.defaultProps = {
  onClick: () => console.log('Button clicked! Now add a real function.'),
  isAdding: false,
};

export default AddTodoButton;
