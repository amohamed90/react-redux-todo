import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

const INITIAL_STATE = {
  text: ""
}

function TodoForm({ add }) {
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
    formData.id = uuid();
    add(formData);
    setFormData(INITIAL_STATE);
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
        <button id="submitButton">Add</button>
      </form>
    </div>
  );
};

export default TodoForm;