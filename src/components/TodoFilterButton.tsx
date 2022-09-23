import * as React from 'react';
import { FC } from 'react';

import { Todos as TODOS_TYPES } from '../utils/types';

interface TodoFilterControlTypes {
  todos: TODOS_TYPES[]; //!!!!!!!!!! A revoir;
  filterStatus: any;
  setFilterStatus: any;
}

const TodoFilterControl: FC<TodoFilterControlTypes> = ({
  filterStatus,
  setFilterStatus,
}) => {
  const handleClick = (status: any) => {
    setFilterStatus(status);
  };

  return (
    <div className="filter-btn-group">
      <button
        className={filterStatus === 'all' ? 'btn active' : 'btn'}
        onClick={() => handleClick('all')}
      >
        all
      </button>
      <button
        className={filterStatus === 'active' ? 'btn active' : 'btn'}
        onClick={() => handleClick('active')}
      >
        active
      </button>
      <button
        className={filterStatus === 'completed' ? 'btn active' : 'btn'}
        onClick={() => handleClick('completed')}
      >
        completed
      </button>
    </div>
  );
};

export default TodoFilterControl;
