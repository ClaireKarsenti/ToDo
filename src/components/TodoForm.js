import React from "react";

const TodoForm = ({ todoForm, setTodoForm, list, setList }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoForm) {
      const newItem = {
        id: new Date().getTime().toString(), //custom id
        title: todoForm,
        completed: false,
      };
      // Every time a new item is added to the list, the list is updated accordingly
      setList([...list, newItem]);
      setTodoForm("");
    }
  };

  return (
    <div className="form-control">
      <div className="checkbox-border-wrap">
        <span className="checkbox"></span>
      </div>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="todo-input"
          className="todo-input"
          placeholder="Create a new todo..."
          value={todoForm}
          onChange={(e) => setTodoForm(e.target.value)}
        />
      </form>
    </div>
  );
};

export default TodoForm;
