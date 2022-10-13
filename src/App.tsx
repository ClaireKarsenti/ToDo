import * as React from 'react';
import { useState, useEffect } from 'react';

//@ts-expect-error
import TodoContainer from './components/TodoContainer.tsx';

import './App.css';
//@ts-expect-error
import { DarkModeProvider } from './utils/context/index.tsx';

function App() {
  const [list, setList] = useState<any[]>([]);
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [filteredTodos, setFilteredTodos] = useState<any[]>(list);

  useEffect(() => {
    const handleFilter = () => {
      switch (filterStatus) {
        case 'active':
          return setFilteredTodos(list.filter((todo) => !todo.completed));

        case 'completed':
          return setFilteredTodos(list.filter((todo) => todo.completed));

        default:
          return setFilteredTodos(list);
      }
    };
    handleFilter();
  }, [list, filterStatus]);

  return (
    <DarkModeProvider>
      <TodoContainer
        list={list}
        setList={setList}
        filterStatus={filterStatus}
        filteredTodos={filteredTodos}
        setFilterStatus={setFilterStatus}
      />
    </DarkModeProvider>
  );
}

export default App;
