import React, { useState } from 'react';

import CrossIcon from '../assets/icons/icon-cross.svg';
import CheckIcon from '../assets/icons/icon-check.svg';

const TodoItems = ({ tasks, removeItem, list, setList }) => {
  const checked = (id) => {
    const updatedTodos = [...tasks];
    updatedTodos.find((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
    });
    setList(updatedTodos);
    localStorage.setItem('list', JSON.stringify(updatedTodos));
  };

  return (
    <section>
      {tasks?.map((item, index) => {
        const { id, title, completed } = item;
        return (
          <ul className="todo-list" key={id}>
            <li key={index} className={completed ? 'done' : ''}>
              <label htmlFor={`todoCheckbox-${id}`}>Completed Checkbox</label>
              <div className="checkbox-border-wrap">
                <span className="checkbox" onClick={() => checked(id)}>
                  {completed && <img src={CheckIcon} alt="done" />}
                </span>
              </div>
              {title}

              {/* Delete button */}
              <div className="btn-container">
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
