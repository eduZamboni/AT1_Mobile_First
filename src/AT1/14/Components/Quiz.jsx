import Question from './Question';

export default function Quiz({
  questionData,
  questionNumber,
  totalQuestions,
  handleAnswerSelection,
}) {
  return (
    <div className="quiz-container">
      <Question
        question={questionData.question}
        options={questionData.options}
        questionNumber={questionNumber}
        totalQuestions={totalQuestions}
        handleAnswerSelection={handleAnswerSelection}
      />
    </div>
  );
}