import React, { useState, useEffect } from "react";

const API_BASE_URL = import.meta.env.VITE_BACKEND_URL;

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editingTaskId, setEditingTaskId] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/tasks`)
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((error) => console.error("Error fetching tasks:", error));
  }, []);

  function handleInput(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() === "") return;

    const requestData = { name: newTask };
    const method = editingTaskId ? "PUT" : "POST";
    const url = editingTaskId
      ? `${API_BASE_URL}/api/tasks/${editingTaskId}`
      : `${API_BASE_URL}/api/tasks`;

    fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestData),
    })
      .then((res) => res.json())
      .then((task) => {
        if (editingTaskId) {
          setTasks((prev) => prev.map((t) => (t._id === editingTaskId ? task : t)));
          setEditingTaskId(null);
        } else {
          setTasks((prev) => [...prev, task]);
        }
        setNewTask("");
      })
      .catch((error) => console.error("Error adding/updating task:", error));
  }

  function deleteTask(id) {
    fetch(`${API_BASE_URL}/api/tasks/${id}`, { method: "DELETE" })
      .then(() => setTasks((prev) => prev.filter((t) => t._id !== id)))
      .catch((error) => console.error("Error deleting task:", error));
  }

  function editTask(id, name) {
    setNewTask(name);
    setEditingTaskId(id);
  }

  return (
    <div className="TODO">
      <h1>To-Do List</h1>
      <div>
        <input type="text" placeholder="Enter a task" value={newTask} onChange={handleInput} />
        <button onClick={addTask}>{editingTaskId ? "Update" : "Add"}</button>
      </div>
      <ul>
        {tasks.map((t) => (
          <li key={t._id}>
            {t.name}
            <button onClick={() => editTask(t._id, t.name)}>✏️ Edit</button>
            <button onClick={() => deleteTask(t._id)}>🗑️ Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
