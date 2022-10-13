import * as React from 'react';
import { FC, useRef } from 'react';

import CrossIcon from '../assets/icons/icon-cross.svg';
import CheckIcon from '../assets/icons/icon-check.svg';

import { Todos as TODOS_TYPES } from '../utils/types';

interface TodoItemsTypes {
  list: TODOS_TYPES[];
  removeItem: any;
  setList: any;
  filteredTodos: any;
}

const TodoItems: FC<TodoItemsTypes> = ({
  list,
  removeItem,
  setList,
  filteredTodos,
}) => {
  const checked = (id: any) => {
    const updatedTodos = [...list];
    // eslint-disable-next-line array-callback-return
    updatedTodos.find((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
    });
    setList(updatedTodos);
    localStorage.setItem('list', JSON.stringify(updatedTodos));
  };

  //Drag and drop
  const dragItem = useRef();
  const dragOverItem = useRef();

  const dragStart = (
    e: { target: { innerHTML: any } },
    position: undefined
  ) => {
    dragItem.current = position;
    console.log(e.target.innerHTML);
  };

  const dragEnter = (
    e: { target: { innerHTML: any } },
    position: undefined
  ) => {
    dragOverItem.current = position;
    console.log(e.target.innerHTML);
  };

  const drop = (e: any) => {
    const copyListItems = [...list];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setList(copyListItems);
  };

  return (
    <section>
      {filteredTodos?.map(
        (
          item: { id: string; title: string; completed: boolean },
          index: React.Key
        ) => {
          const { id, title, completed } = item;
          return (
            <ul className="todo-list" key={id}>
              <li
                key={index}
                className={completed ? 'done' : ''}
                onDragStart={(e) => dragStart(e, index)}
                onDragEnter={(e) => dragEnter(e, index)}
                onDragEnd={drop}
                draggable
              >
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
                    data-testid="remove"
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
