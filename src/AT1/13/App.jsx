import { useState } from 'react';
import CategoryList from './Components/CategoryList';
import TodoList from './Components/TodoList';
import './styles.css';

export default function App() {
  const [categories, setCategories] = useState([
    'Mercado',
    'Farmácia',
    'Estudos',
  ]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [tasks, setTasks] = useState([]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks.filter((task) => task.category === category));
  };

  return (
    <div className="app-container">
      <h1>Lista de Tarefas</h1>
      {!selectedCategory ? (
        <CategoryList
          categories={categories}
          onSelectCategory={handleCategorySelect}
        />
      ) : (
        <TodoList
          category={selectedCategory}
          tasks={tasks}
          setTasks={setTasks}
          goBack={() => setSelectedCategory(null)}
        />
      )}
    </div>
  );
}