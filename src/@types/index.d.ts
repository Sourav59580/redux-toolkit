type TodoId = number;

type Todo = {
  _id: TodoId;
  title: string;
  completed: boolean;
};

type TodosState = {
  list: Todo[];
  isLoading: boolean;
  error: any
};