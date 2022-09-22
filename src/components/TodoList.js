import React from 'react';
import TodoItems from './TodoItems';
import TodoFilterButton from './TodoFilterButton';

const TodoList = ({
  list,
  setList,
  removeItem,
  filterStatus,
  setFilterStatus,
}) => {
  //To delete all the completed tasks
  const clearCompleted = () => {
    setList(list.filter((todo) => !todo.completed));
    setFilterStatus('all');
  };

  const noTodoText = filterStatus === 'completed' ? 'closed task' : 'task';

  return (
    <>
      <div className='todo-list-section'>
        {/* The todo list */}
        {list.length < 1 ? (
          <p className="info-text">There's no {noTodoText}.</p>
        ) : (
          <ul >
            <TodoItems tasks={list} setList={setList} removeItem={removeItem} />

            <div className="todo-footer">
              <span className="btn">
                {list.length === 1 ? (
                  <div>{list.length} item left</div>
                ) : (
                  <div>{list.length} items left</div>
                )}
              </span>
              <div className="control-btn group filter-control-for-desktop">
                <TodoFilterButton
                  filterStatus={filterStatus}
                  setFilterStatus={setFilterStatus}
                />
              </div>

              <div className="control-btn">
                {/* Clear button appears only when there is item in the list */}
                <button className='btn' onClick={clearCompleted}>clear completed</button>
              </div>
            </div>
          </ul>
        )}
      </div>

      {/* For Mobile 
      <section className="filter-control-for-mobile">
        <div className="control-btn group">
          <TodoFilterButton
            filterStatus={filterStatus}
            setFilterStatus={setFilterStatus}
          />
        </div>
      </section>*/}
    </>
  );
};

export default TodoList;
