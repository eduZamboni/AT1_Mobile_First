import { useState } from 'react';
import List from './List';

export default function TodoList({ category, tasks, setTasks, goBack }) {
  const [newTaskText, setNewTaskText] = useState('');

  const addTask = (text) => {
    if (text.trim() === '') return;
    const newTask = {
      id: Date.now(),
      text,
      isCompleted: false,
      category,
    };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  const completeTask = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, isCompleted: true } : task
    );
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  const updateTask = (id, newText) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, text: newText } : task
    );
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  const saveTasks = (tasksToSave) => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const otherTasks = storedTasks.filter((task) => task.category !== category);
    localStorage.setItem(
      'tasks',
      JSON.stringify([...otherTasks, ...tasksToSave])
    );
  };

  return (
    <div className="todo-list">
      <button onClick={goBack} className="back-button">
        &larr; Voltar
      </button>
      <h2>{category}</h2>
      <input
        type="text"
        value={newTaskText}
        onChange={(e) => setNewTaskText(e.target.value)}
        placeholder="Digite uma nova tarefa"
      />
      <button onClick={() => addTask(newTaskText)}>Adicionar</button>

      <List
        tarefas={tasks}
        completeTask={completeTask}
        deleteTask={deleteTask}
        updateTask={updateTask}
      />
    </div>
  );
}