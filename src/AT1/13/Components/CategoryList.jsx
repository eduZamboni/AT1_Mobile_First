export default function CategoryList({ categories, onSelectCategory }) {
    return (
      <div className="category-list">
        <h2>Selecione uma Categoria</h2>
        <p>OBS: Eu aproveitei o script de TodoList das aulas de fundamentos de React </p>
        <ul>
          {categories.map((category, index) => (
            <li key={index}>
              <button onClick={() => onSelectCategory(category)}>
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }