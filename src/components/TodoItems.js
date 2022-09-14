import React, { useState } from 'react';

import CrossIcon from '../assets/icons/icon-cross.svg';
import CheckIcon from '../assets/icons/icon-check.svg';

const TodoItems = ({ tasks, removeItem, list, setList }) => {
  const [checkTodo, setCheckTodo] = useState(false);

  const checked = () => {
    setCheckTodo({ ...checkTodo, done: !checkTodo.done });
    const updatedTodos = list.map((item) =>
      item.id === tasks.id ? { ...list, completed: !item.completed } : list
    );
    setList(updatedTodos);
  };

  return (
    <section className="todo-list-section">
      {tasks?.map((item, index) => {
        const { id, title, completed } = item;
        return (
          <ul className="todo-list" key={id}>
            <li key={index} className={checkTodo.done ? 'done' : ''}>
              {/*<label htmlFor={`todoCheckbox-${id}`}>
                Completed Checkbox
              </label>*/}
              <input
                id={`todoCheckbox-${id}`}
                type="checkbox"
                name="completed"
                //defaultChecked
                checked={checkTodo}
                onChange={() => setCheckTodo(!checkTodo)}
              />
              <div className="checkbox-border-wrap">
                <span className="checkbox" onClick={() => checked(id)}>
                  {checkTodo ? <img src={CheckIcon} alt="done" /> : ''}
                </span>
              </div>
              {title}
              <div className="btn-container">
                {/* Delete button */}
                <button
                  type="button"
                  className="btn"
                  onClick={() => removeItem(id)}
                >
                  <img src={CrossIcon} alt="delete" />
                </button>
              </div>
            </li>
          </ul>
        );
      })}
    </section>
  );
};

export default TodoItems;
