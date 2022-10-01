import * as React from 'react';
import { useState, FC } from 'react';

import CheckIcon from '../assets/icons/icon-check.svg';

import { Todos as TODOS_TYPES } from '../utils/types';

interface TodoFormTypes {
  list: TODOS_TYPES[];
  setList: any;
}

const TodoForm: FC<TodoFormTypes> = ({ list, setList }) => {
  const [completed, setCompleted] = useState(false);
  const [title, setTitle] = useState('');

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const newItem = {
      id: new Date().getTime().toString(), //custom id
      title,
      completed,
    };
    // Every time a new item is added to the list, the list is updated accordingly
    setList([...list, newItem]);
    setTitle('');
  };

  return (
    <div className="form-control">
      <div className="checkbox-border-wrap">
        <span onClick={() => setCompleted(!completed)} className="checkbox">
          {completed && <img src={CheckIcon} alt="done" />}
        </span>
      </div>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="todo-input"
          className="todo-input"
          placeholder="Create a new todo..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </form>
    </div>
  );
};

export default TodoForm;
