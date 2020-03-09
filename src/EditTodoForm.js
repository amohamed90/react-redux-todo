import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Todo from './Todo';


function TodoForm({ edit, todo }) {
  console.log(todo.text)
  const INITIAL_STATE = todo.text
  console.log(INITIAL_STATE)
  const [formData, setFormData] = useState(INITIAL_STATE);
  
  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }));
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    formData.id = todo.id;
    edit(formData);
    setFormData("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <div>
          <label htmlFor="text">Text</label>
          <input
            onChange={handleChange}
            type="text"
            name="text"
            value={formData.text}
            id="text"
          />
        </div>
        <button id="submitButton">Edit</button>
      </form>
    </div>
  );
};

export default TodoForm;