import React, { useState } from "react";

const Crud = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(null);

  // ADD or UPDATE
  const handleAdd = () => {
    if (!text) return;

    if (editId) {
      // UPDATE
      const updated = todos.map((item) =>
        item.id === editId ? { ...item, text } : item
      );
      setTodos(updated);
      setEditId(null);
    } else {
      // ADD
      setTodos([...todos, { id: Date.now(), text }]);
    }

    setText("");
  };

  // DELETE
  const handleDelete = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  // EDIT
  const handleEdit = (item) => {
    setText(item.text);
    setEditId(item.id);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>CRUD Page</h2>

      <h4>Total Records: {todos.length}</h4>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={handleAdd}>
        {editId ? "Update" : "Add"}
      </button>

      <ul>
        {todos.map((item) => (
          <li key={item.id}>
            {item.text}
            <button onClick={() => handleEdit(item)}>Edit</button>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Crud;