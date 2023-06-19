import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import todoReducer from '../features/todos/todosSlice';




//Store holds state and combines reducers
export default configureStore({
    reducer: {
        todos: todoReducer,
    },
    middleware: [thunkMiddleware],
})