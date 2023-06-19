import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { TodoItem } from "./TodoItem";
import { fetchList } from "../features/todos/todoApi";

export const TodoList: React.FunctionComponent<any> = () => {
  const dispatch = useDispatch<any>();
  
  useEffect(() => {
    dispatch(fetchList())
  }, [dispatch])

  const todos = useSelector((state: any) => state?.todos?.list);
  const isLoading = useSelector((state: any) => state.isLoading)
  const error = useSelector((state: any) => state.error)


  console.log("todos: ", todos);

  return (
    <>
      {isLoading ? '<span>Loading</span>' : ''}
      <ul>
        {todos?.map((todo: Todo) => {
          return <li key={todo._id}>
            <TodoItem title={todo.title} id={todo._id} completed={todo.completed} />
          </li>;
        })}
      </ul>
    </>
  );
};
