import * as React from 'react';
import { FC, ReactElement, useState, useEffect } from 'react';

// @ts-expect-error
import TodoItems from './TodoItems.tsx';
// @ts-expect-error
import TodoFilterButton from './TodoFilterButton.tsx';

import { Todos as TODOS_TYPES } from '../utils/types';

interface TodoListProps {
  list: TODOS_TYPES[];
  setList: any;
  removeItem: any;
  filteredTodos: any;
  filterStatus: any;
  setFilterStatus: any;
}

const TodoList: FC<TodoListProps> = ({
  list,
  setList,
  removeItem,
  filteredTodos,
  filterStatus,
  setFilterStatus,
}: TodoListProps): ReactElement => {
  const [leftTodoCount, setLeftTodoCount] = useState(0);

  //To decrease the number of items in the list when some are checked
  useEffect(() => {
    const unCompletedTodos = list.filter((todo) => !todo.completed);
    setLeftTodoCount(unCompletedTodos.length);
  }, [list]);

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
        {filteredTodos?.length < 1 ? (
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
            <TodoItems
              list={list}
              setList={setList}
              removeItem={removeItem}
              filteredTodos={filteredTodos}
            />

            <div className="todo-footer">
              <button className="btn">
                {leftTodoCount <= 1 ? (
                  <div>{leftTodoCount} item left</div>
                ) : (
                  <div>{leftTodoCount} items left</div>
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
