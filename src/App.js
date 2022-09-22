import React from 'react';

import TodoContainer from './components/TodoContainer';

import './App.css';

import { DarkModeProvider } from './utils/context/index';

function App() {
  return (
    <DarkModeProvider>
      <TodoContainer />
    </DarkModeProvider>
  );
}

export default App;
