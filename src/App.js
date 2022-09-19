import React, { useState, useEffect } from 'react';

//COMPONENTS
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import Header from './components/Header';
import Footer from './components/Footer';

import './App.css';

function App() {
  const [list, setList] = useState([]);
  const [themeDark, setThemeDark] = useState(true);
  const [filterStatus, setFilterStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState(list);

  const removeItem = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

  const themeClass = themeDark ? 'dark' : 'light';

  // useEffect(() => {
  //   let list = localStorage.getItem('list');
  //   if (list) {
  //    setList(list)
  //   }
  // }, []);

  useEffect(() => {
    const handleFilter = () => {
      switch (filterStatus) {
        case 'active':
          return setFilteredTodos(list.filter((todo) => !todo.done));

        case 'completed':
          return setFilteredTodos(list.filter((todo) => todo.done));

        default:
          return setFilteredTodos(list);
      }
    };
    handleFilter();
  }, [list, filterStatus]);

  return (
    <div className={`wrapper ${themeClass}`}>
      <div className="container">
        <Header themeDark={themeDark} setThemeDark={setThemeDark} />
        <main>
          <TodoForm list={list} setList={setList} />
          <TodoList
            list={list}
            setList={setList}
            removeItem={removeItem}
            filteredTodos={filteredTodos}
            filterStatus={filterStatus}
            setFilterStatus={setFilterStatus}
          />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
