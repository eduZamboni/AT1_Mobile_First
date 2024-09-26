import './Card.css';

export default function Card() {
  return (
    <div className="card">
      <div className="photo-section">
        <div className="photo" alt="Employee photo"></div>
        <div className="info">
          <h2>Nome Completo</h2>
          <p>Data de Nascimento</p>
          <p>Setor</p>
          <p>Cargo</p>
        </div>
        <div className="icons">
          <div className="icon">📞</div>
          <div className="icon">✉️</div>
          <div className="icon">📍</div>
        </div>
      </div>

      <table className="task-table">
        <thead>
          <tr>
            <th>Estado</th>
            <th>Tarefas</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="checkbox" /></td>
            <td>Tarefa 1</td>
          </tr>
          <tr>
            <td><input type="checkbox" /></td>
            <td>Tarefa 2</td>
          </tr>
          <tr>
            <td><input type="checkbox" /></td>
            <td>Tarefa 3</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}