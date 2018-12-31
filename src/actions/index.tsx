export const ADD_TODO_ITEM = "ADD_TODO_IITEM";

export const addTodoItem = (todo: string) => ({
  todo,
  type: ADD_TODO_ITEM
});
