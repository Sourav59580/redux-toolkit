import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const domain = "http://localhost:3002";

export const fetchList = createAsyncThunk("list/fetchList", async () => {
  const res = await axios(`${domain}/fetchList`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.data;
  console.log("data: ", data);
  return data;
});

export const addTodo = createAsyncThunk("list/addTodo", async (payload: any) => {
    console.log("payload", payload);
    
  const res = await axios(`${domain}/addTodo`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: payload,
  });
  const data = await res.data;
  console.log("data: ", data);
  return data;
});
