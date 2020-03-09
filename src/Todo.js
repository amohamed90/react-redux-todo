import React from 'react';

function Todo({ remove, todo }) {
  return (
    <div>
      <span>{todo.text}</span>
      <button onClick={remove}>Remove</button>
    </div>
  )
}

export default Todo;