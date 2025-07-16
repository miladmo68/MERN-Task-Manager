
import { useEffect, useState } from 'react';
import axios from 'axios';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const API_BASE = 'http://localhost:5000/api/tasks';

function App() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const { data } = await axios.get(API_BASE);
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async (title) => {
    const { data } = await axios.post(API_BASE, { title });
    setTasks([...tasks, data]);
  };

  const deleteTask = async (id) => {
    await axios.delete(`${API_BASE}/${id}`);
    setTasks(tasks.filter(t => t._id !== id));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Task Manager</h1>
      <TaskForm onAdd={addTask}/>
      <TaskList tasks={tasks} onDelete={deleteTask}/>
    </div>
  );
}

export default App;
