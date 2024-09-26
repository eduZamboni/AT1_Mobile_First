import TodoItem from './TodoItem';

export default function List({ tarefas, completeTask, deleteTask, updateTask }) {
  if (tarefas.length === 0) {
    return <p>A lista está vazia</p>;
  }

  return (
    <ul className="task-list">
      {tarefas.map((tarefa, index) => (
        <TodoItem
          key={tarefa.id}
          index={index + 1}
          id={tarefa.id}
          task={tarefa.text}
          isCompleted={tarefa.isCompleted}
          completeTask={completeTask}
          deleteTask={deleteTask}
          updateTask={updateTask}
        />
      ))}
    </ul>
  );
}