import React, { useState, useEffect, useContext } from 'react';

//COMPONENTS
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import Header from './Header';
import Footer from './Footer';

import { DarkModeContext } from '../utils/context/index';


const TodoContainer = () => {
  const [list, setList] = useState([]);
  const [filterStatus, setFilterStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState(list);

  const removeItem = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

  const { darkMode } = useContext(DarkModeContext);

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

  // useEffect(() => {
  //   let list = localStorage.getItem('list');
  //   if (list) {
  //    setList(list)
  //   }
  // }, []);
  
  return (
    <div className={darkMode ? 'wrapper dark' : 'wrapper light'}>
      <div className="container">
        <Header />
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
};;

export default TodoContainer;
