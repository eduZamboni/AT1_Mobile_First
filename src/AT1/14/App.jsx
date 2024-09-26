import { useState } from 'react';
import Quiz from './Components/Quiz';
import Result from './Components/Result';
import './styles.css';

export default function App() {
  const questions = [
    {
      question: 'Qual é a capital da França?',
      options: ['Berlim', 'Madri', 'Paris', 'Roma'],
      answer: 2,
    },
    {
      question: 'Quem escreveu "Dom Quixote"?',
      options: [
        'Miguel de Cervantes',
        'William Shakespeare',
        'Leon Tolstói',
        'Victor Hugo',
      ],
      answer: 0,
    },
    {
      question: 'Qual é o maior planeta do sistema solar?',
      options: ['Terra', 'Marte', 'Júpiter', 'Saturno'],
      answer: 2,
    },
    {
      question: 'Em que ano o homem pisou na Lua pela primeira vez?',
      options: ['1959', '1969', '1979', '1989'],
      answer: 1,
    },
    {
      question: 'Quem pintou a Mona Lisa?',
      options: [
        'Vincent van Gogh',
        'Pablo Picasso',
        'Leonardo da Vinci',
        'Michelangelo',
      ],
      answer: 2,
    },
    {
      question: 'Qual é a fórmula química da água?',
      options: ['CO2', 'H2O', 'O2', 'NaCl'],
      answer: 1,
    },
    {
      question: 'Quem é conhecido como o Pai da Programação?',
      options: [
        'Alan Turing',
        'Charles Babbage',
        'Steve Jobs',
        'Bill Gates',
      ],
      answer: 0,
    },
    {
      question: 'Qual é a língua mais falada no mundo?',
      options: ['Inglês', 'Espanhol', 'Chinês Mandarim', 'Hindi'],
      answer: 2,
    },
    {
      question: 'Em que país as Olimpíadas de 2016 foram realizadas?',
      options: ['Brasil', 'China', 'Reino Unido', 'Japão'],
      answer: 0,
    },
    {
      question: 'Qual é a camada mais externa da Terra?',
      options: ['Manto', 'Crosta', 'Núcleo Externo', 'Núcleo Interno'],
      answer: 1,
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerSelection = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="app-container">
      <h1>Quiz de Conhecimentos Gerais</h1>
      {showResult ? (
        <Result score={score} total={questions.length} resetQuiz={resetQuiz} />
      ) : (
        <Quiz
          questionData={questions[currentQuestion]}
          questionNumber={currentQuestion + 1}
          totalQuestions={questions.length}
          handleAnswerSelection={handleAnswerSelection}
        />
      )}
    </div>
  );
}