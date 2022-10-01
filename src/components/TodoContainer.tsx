import * as React from 'react';
import { useState, useEffect, useContext, FC } from 'react';

//COMPONENTS
// @ts-expect-error
import TodoList from './TodoList.tsx';
// @ts-expect-error
import TodoForm from './TodoForm.tsx';
// @ts-expect-error
import Header from './Header.tsx';
// @ts-expect-error
import Footer from './Footer.tsx';
// @ts-expect-error
import { DarkModeContext } from '../utils/context/index.tsx';
import { Todos as TODOS_TYPES } from '../utils/types';

interface TodoContainerTypes {
  list: TODOS_TYPES[];
  setList: any;
  filterStatus: any;
  filteredTodos: any;
  setFilterStatus: any;
}

const TodoContainer: FC<TodoContainerTypes> = ({
  list,
  setList,
  filterStatus,
  filteredTodos,
  setFilterStatus,
}) => {
  const removeItem = (id: any) => {
    setList(list.filter((item: any) => item.id !== id));
  };

  const { darkMode } = useContext(DarkModeContext);

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
            filterStatus={filterStatus}
            filteredTodos={filteredTodos}
            setFilterStatus={setFilterStatus}
          />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default TodoContainer;
