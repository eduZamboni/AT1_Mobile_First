export default function Question({
  question,
  options,
  questionNumber,
  totalQuestions,
  handleAnswerSelection,
}) {
  return (
    <div className="question-container">
      <h2>
        Questão {questionNumber} de {totalQuestions}
      </h2>
      <p className="question-text">{question}</p>
      <ul className="options-list">
        {options.map((option, index) => (
          <li key={index}>
            <button
              className="option-button"
              onClick={() => handleAnswerSelection(index)}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}