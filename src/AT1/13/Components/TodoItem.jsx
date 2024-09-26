import { useState } from 'react';

export default function TodoItem({
  index,
  id,
  task,
  isCompleted,
  completeTask,
  deleteTask,
  updateTask,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTaskText, setEditedTaskText] = useState(task);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    const newText = e.target.value;
    setEditedTaskText(newText);
    updateTask(id, newText);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  return (
    <li className={`task-item ${isCompleted ? 'completed' : ''}`}>
      <span>{index}. </span>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTaskText}
            onChange={handleInputChange}
          />
          <button onClick={handleSaveClick}>Salvar</button>
        </>
      ) : (
        <>
          <span>{task}</span>
          <button onClick={() => completeTask(id)} disabled={isCompleted}>
            Concluir
          </button>
          <button onClick={handleEditClick}>Editar</button>
          <button onClick={() => deleteTask(id)}>Excluir</button>
        </>
      )}
    </li>
  );
}