export default function VisitList({ visitList, onRemoveFromVisitList }) {
    const totalPrice = visitList.reduce(
      (total, item) => total + item.attraction.price * item.peopleCount,
      0
    );
  
    return (
      <div className="visit-list">
        <h2>Pontos Selecionados para Visita</h2>
        {visitList.length === 0 ? (
          <p>Nenhum ponto turístico selecionado.</p>
        ) : (
          <ul>
            {visitList.map((item) => (
              <li key={item.attraction.id}>
                <p>
                  <strong>{item.attraction.name}</strong>
                </p>
                <p>
                  Valor: R$ {item.attraction.price.toFixed(2)} x {item.peopleCount} pessoa(s) = R${' '}
                  {(item.attraction.price * item.peopleCount).toFixed(2)}
                </p>
                <button
                  onClick={() => onRemoveFromVisitList(item.attraction.id)}
                  className="remove-button"
                >
                  Remover
                </button>
              </li>
            ))}
          </ul>
        )}
        <h3>Total: R$ {totalPrice.toFixed(2)}</h3>
      </div>
    );
  }