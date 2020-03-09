const local = JSON.parse(localStorage.getItem("TodoState"));

const DEFAULT_STATE = {
  todos: local.todos ? local.todos : []
};

function rootReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case 'ADD':
      return { ...state, todos: [...state.todos, action.payload] }
    case 'REMOVE':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload.id)
      }
    default:
      return state;
  }
}

export default rootReducer;