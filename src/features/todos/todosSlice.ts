import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { fetchList, addTodo as addTodoApi } from "./todoApi";

const initialState: TodosState = {
  list: [],
  isLoading: false,
  error: null,
};

export const todoSlice = createSlice({
  name: "todos",
  // The initial state:
  initialState,
  //responds to the action, takes the current state, handles the action similar to database tables
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        _id: action.payload._id,
        title: action.payload.title,
        completed: false,
      };
      state.list.push(todo);
    },

    toggleComplete: (state, action) => {
      const index = state.list.findIndex(
        (todo) => todo._id === action.payload._id
      );
      state.list[index].completed = action.payload.completed;
    },
    deleteTodo: (state, action) => {
      state.list = state.list.filter((todo) => todo._id !== action.payload._id);
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchList.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchList.fulfilled, (state, action) => {
      state.isLoading = false
      state.list = action.payload
    })
    builder.addCase(fetchList.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error.message
    })


    builder.addCase(addTodoApi.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(addTodoApi.fulfilled, (state, action) => {
      state.isLoading = false
      state.list.push(action.payload)
    })
    builder.addCase(addTodoApi.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error.message
    })





  },
});

export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
