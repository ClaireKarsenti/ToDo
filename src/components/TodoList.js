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
    // setList(list.filter((items) => !items.done));
    setList([]);
  };

  return (
    <>
      {/* The todo list */}
      {list.length > 0 && (
        <div>
          <TodoItems tasks={list} setList={setList} removeItem={removeItem} />

          <div className="todo-footer">
            <span className="btn">
              {list.length === 1 ? (
                <div>{list.length} item left</div>
              ) : (
                <div>{list.length} items left</div>
              )}
            </span>
            <div className="control-btn">
              <TodoFilterButton
                filterStatus={filterStatus}
                setFilterStatus={setFilterStatus}
              />
            </div>
            <div>
              {/* Clear button appears only when there is item in the list */}
              <button className="btn" onClick={clearCompleted}>
                clear completed
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TodoList;
