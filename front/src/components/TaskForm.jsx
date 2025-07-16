
import { useState } from 'react';

export default function TaskForm({ onAdd }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd(title);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        placeholder="New task"
        className="input input-bordered w-full"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button className="btn btn-primary">Add</button>
    </form>
  );
}
