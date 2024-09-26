import { useState } from 'react';

export default function AttractionDetails({ attraction, onAddToVisitList }) {
  const [peopleCount, setPeopleCount] = useState(1);

  const handleAdd = () => {
    onAddToVisitList(attraction, peopleCount);
  };

  return (
    <div className="attraction-details">
      <h2>{attraction.name}</h2>
      <p>{attraction.description}</p>
      <p><strong>Valor por pessoa:</strong> R$ {attraction.price.toFixed(2)}</p>
      <p><strong>Meios de Transporte:</strong> {attraction.transport}</p>
      <div className="people-count">
        <label>
          Quantidade de pessoas:
          <input
            type="number"
            min="1"
            value={peopleCount}
            onChange={(e) => setPeopleCount(parseInt(e.target.value))}
          />
        </label>
      </div>
      <button onClick={handleAdd} className="add-button">Adicionar à Lista</button>
    </div>
  );
}