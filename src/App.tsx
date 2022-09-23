import * as React from 'react';
//@ts-expect-error
import TodoContainer from './components/TodoContainer.tsx';

import './App.css';
//@ts-expect-error
import { DarkModeProvider } from './utils/context/index.tsx';

function App() {
  return (
    <DarkModeProvider>
      <TodoContainer />
    </DarkModeProvider>
  );
}

export default App;
