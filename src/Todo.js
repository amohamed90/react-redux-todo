import React from 'react';
import EditTodoForm from './EditTodoForm';

function Todo({ remove, todo, edit }) {
  return (
    <div>
      <span>{todo.text}</span>
      <button onClick={remove}>Remove</button>
      <EditTodoForm todo={todo}/>
    </div>
  )
}

export default Todo;