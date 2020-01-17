import React from 'react';
import './App.scss';
import TodoContainer from '../TodoContainer';

function App() {
  return (
    <div className="App">
      <div className={'border-container'}>
        <TodoContainer />
      </div>
    </div>
  );
}

export default App;
