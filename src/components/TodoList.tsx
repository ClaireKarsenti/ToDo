import * as React from 'react';
import { FC } from 'react';

// @ts-expect-error
import TodoItems from './TodoItems.tsx';
// @ts-expect-error
import TodoFilterButton from './TodoFilterButton.tsx';

import { Todos as TODOS_TYPES } from '../utils/types';

interface TodoListProps {
  todos: TODOS_TYPES[]; //!!!!!!!!!! A revoir;
  list: any;
  setList: any;
  removeItem: any;
  filterStatus: string;
  setFilterStatus: any;
}

const TodoList: FC<TodoListProps> = ({
  list,
  setList,
  removeItem,
  filterStatus,
  setFilterStatus,
}) => {
  //To delete all the completed tasks
  const clearCompleted = () => {
    setList(list.filter((todo: { completed: any }) => !todo.completed));
    setFilterStatus('all');
  };

  const noTodoText = filterStatus === 'completed' ? 'completed task' : 'task';

  return (
    <>
      <section className="todo-list-section">
        {/* The todo list */}
        {list.length < 1 ? (
          <>
            <p className="info-text">There's no {noTodoText}.</p>
            <div className="todo-filter">
              <div className="control-btn group filter-control-for-desktop">
                <TodoFilterButton
                  filterStatus={filterStatus}
                  setFilterStatus={setFilterStatus}
                />
              </div>
            </div>
            {/* For Mobile */}
            <section className="filter-control-for-mobile">
              <div className="control-btn group">
                <TodoFilterButton
                  filterStatus={filterStatus}
                  setFilterStatus={setFilterStatus}
                />
              </div>
            </section>
          </>
        ) : (
          <ul>
            <TodoItems tasks={list} setList={setList} removeItem={removeItem} />

            <div className="todo-footer">
              <button className="btn">
                {list.length === 1 ? (
                  <div>{list.length} item left</div>
                ) : (
                  <div>{list.length} items left</div>
                )}
              </button>

              <div className="control-btn group filter-control-for-desktop">
                <TodoFilterButton
                  filterStatus={filterStatus}
                  setFilterStatus={setFilterStatus}
                />
              </div>

              <div className="control-btn">
                {/* Clear button appears only when there is item in the list */}
                <button className="btn" onClick={clearCompleted}>
                  clear completed
                </button>
              </div>
            </div>
          </ul>
        )}
      </section>

      {/* For Mobile */}
      <section className="filter-control-for-mobile">
        <div className="control-btn group">
          <TodoFilterButton
            filterStatus={filterStatus}
            setFilterStatus={setFilterStatus}
          />
        </div>
      </section>
    </>
  );
};

export default TodoList;
