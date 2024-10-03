export default function Result({ score, total, resetQuiz }) {
    return (
      <div className="result-container">
        <h2>Resultado</h2>
        <p>
          Você acertou {score} de {total} questões.
        </p>
        <button onClick={resetQuiz}>Reiniciar Quiz</button>
      </div>
    );
  }