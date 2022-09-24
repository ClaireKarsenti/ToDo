import * as React from 'react';
import { FC } from 'react';

import CrossIcon from '../assets/icons/icon-cross.svg';
import CheckIcon from '../assets/icons/icon-check.svg';

import { Todos as TODOS_TYPES } from '../utils/types';

interface TodoItemsTypes {
  todos: TODOS_TYPES[]; //!!!!!!!!!! A revoir;
  tasks: any;
  removeItem: any;
  setList: any;
}

const TodoItems: FC<TodoItemsTypes> = ({ tasks, removeItem, setList }) => {
  const checked = (id: any) => {
    const updatedTodos = [...tasks];
    // eslint-disable-next-line array-callback-return
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
      {/* //!!!!!!!!!! A revoir */}
      {tasks?.map(
        (
          item: { id: string; title: string; completed: boolean },
          index: React.Key | null | undefined
        ) => {
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
        }
      )}
    </section>
  );
};

export default TodoItems;
