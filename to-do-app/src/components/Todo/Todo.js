import React, { useState } from 'react';
import Form from '../Form/Form';

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <Form edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map(todo => (
    <div>
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div>
        <button onClick={() => removeTodo(todo.id)}>Delete</button>
        <button onClick={() => setEdit({ id: todo.id, value: todo.text })}>Edit</button>
      </div>
    </div>
  ));
};

export default Todo;
