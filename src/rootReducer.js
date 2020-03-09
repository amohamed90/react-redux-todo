const local = JSON.parse(localStorage.getItem("TodoState"));
const storage = local ? local : null;

const DEFAULT_STATE = {
  todos: storage ? storage.todos : []
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
    case 'EDIT':
      let removedTodo = state.todos.filter(todo => todo.id !== action.payload.id)
      let addedTodo = [...removedTodo, { text: action.payload.text, id: action.payload.id }]
      return {
        ...state, todos: addedTodo
      }
    default:
      return state;
  }
}

export default rootReducer;