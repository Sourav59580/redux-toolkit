import React from "react";

import { useDispatch } from "react-redux";
import { toggleComplete, deleteTodo } from "../features/todos/todosSlice";

export const TodoItem: React.FunctionComponent<any> = (props) => {
  const dispatch = useDispatch();

  const handleCheckboxClick = () => {
    dispatch(toggleComplete({ id, completed: !completed }));
  };

  const handleDeleteClick = () => {
    dispatch(deleteTodo({ id }));
  };

  const { title, completed, id } = props;
  return (
    <div>
      <input
        type="checkbox"
        checked={completed}
        onChange={handleCheckboxClick}
      />
      <span style={{ margin: "15px" }}>{title}</span>
      <button onClick={handleDeleteClick}>X</button>
    </div>
  );
};
