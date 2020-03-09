import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {
  const todos = useSelector(st => st.todos);
  const dispatch = useDispatch();
  const add = (formData) => dispatch({type: "ADD", payload: formData});
  const remove = (todo) => dispatch({type:"REMOVE", payload: todo});

  return (
    <div>
      <TodoForm add={add} />
      <ul>
        {todos.map(todo => <li key={todo.id}>
                              <Todo todo={todo} remove={() => remove(todo)} />
                            </li>)}
      </ul>
    </div>
  )
}

export default TodoList;