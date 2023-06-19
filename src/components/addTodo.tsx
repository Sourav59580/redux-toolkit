import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { addTodo as addTodoApi } from '../features/todos/todoApi'

export const AddTodo: React.FunctionComponent<any> = () => {
  const dispatch = useDispatch<any>();

  let [title, setTitle] = useState('');
  
  const addTodoHandel = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    if(title) {
      setTitle('');
      dispatch(addTodoApi({ title: title, completed: false}))
    }
  }
  return (
    <form onSubmit={addTodoHandel}>
      <input type="text" value={title} onChange={(e)=> setTitle(e.target.value) }/>
      <button type='submit'>Submit</button>
    </form>
  )
}