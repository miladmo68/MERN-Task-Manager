
export default function TaskList({ tasks, onDelete }) {
  if (!tasks.length) return <p className="text-center">No tasks yet.</p>;

  return (
    <ul className="space-y-2">
      {tasks.map(task => (
        <li key={task._id} className="card bg-base-100 shadow p-4 flex justify-between items-center">
          <span>{task.title}</span>
          <button className="btn btn-error btn-xs" onClick={() => onDelete(task._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
