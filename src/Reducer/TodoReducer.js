const initialDataState = {
  todoList: [],
};

const TodoReducer = (state = initialDataState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const { id, data } = action.payload;
      return {
        ...state,
        todoList: [
          ...state.todoList,
          {
            id: id,
            data: data,
          },
        ],
      };

    case "DELETE_TODO":
      const newTodoList = state.todoList.filter(
        (item) => item.id !== action.id
      );
      return {
        ...state,
        todoList: newTodoList,
      };
    case "REMOVE_TODO":
      return {
        ...state,
        todoList: [],
      };

    default:
      return state;
  }
};

export default TodoReducer;
