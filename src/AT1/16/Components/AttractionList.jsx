import attractions from './data';

export default function AttractionList({ onSelectAttraction }) {
  return (
    <div className="attraction-list">
      <h2>Lista de Pontos Turísticos</h2>
      <ul>
        {attractions.map((attraction) => (
          <li key={attraction.id}>
            <button
              onClick={() => onSelectAttraction(attraction)}
              className="attraction-button"
            >
              {attraction.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}