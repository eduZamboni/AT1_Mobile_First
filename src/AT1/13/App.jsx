import { useState } from 'react';
import Quiz from './Components/Quiz';
import Result from './Components/Result';
import './styles.css';

export default function App() {
  const questions = [
    {
      question: 'O que significa Mobile-First?',
      options: [
        'Desenvolver para dispositivos móveis primeiro',
        'Desenvolver para desktops primeiro',
        'Desenvolver para tablets primeiro',
        'Desenvolver para laptops primeiro'
      ],
      answer: 0,
    },
    {
      question: 'O que é responsividade?',
      options: [
        'Capacidade de um site se adaptar a diferentes tamanhos de tela',
        'Capacidade de um site responder rapidamente a comandos',
        'Capacidade de um site ser acessível',
        'Capacidade de um site ser mais rápido'
      ],
      answer: 0,
    },
    {
      question: 'Qual unidade é mais recomendada para medidas responsivas?',
      options: ['px', 'em', 'rem', 'pt'],
      answer: 2,
    },
    {
      question: 'O que é usabilidade em design?',
      options: [
        'A facilidade com que os usuários podem usar um site',
        'A aparência visual de um site',
        'O tempo de carregamento de um site',
        'A segurança de um site'
      ],
      answer: 0,
    },
    {
      question: 'O que é uma Media Query?',
      options: [
        'Uma forma de testar o site em diferentes dispositivos',
        'Um código CSS para criar animações',
        'Uma técnica para melhorar a performance de um site',
        'Uma regra CSS usada para aplicar estilos condicionais'
      ],
      answer: 3,
    },
    {
      question: 'O que é design adaptativo?',
      options: [
        'Design que adapta o conteúdo de acordo com o dispositivo',
        'Design feito exclusivamente para um único dispositivo',
        'Design focado apenas em cores',
        'Design feito sem usar CSS'
      ],
      answer: 0,
    },
    {
      question: 'Qual é o principal benefício do Mobile-First?',
      options: [
        'Otimização de performance em dispositivos móveis',
        'Melhoria da acessibilidade para todos os dispositivos',
        'Maior controle de layout para grandes telas',
        'Melhor visualização para laptops'
      ],
      answer: 0,
    },
    {
      question: 'Qual ferramenta é mais usada para verificar responsividade?',
      options: [
        'Console do navegador',
        'Ferramentas de desenvolvimento do navegador',
        'CSS Validator',
        'HTML Validator'
      ],
      answer: 1,
    },
    {
      question: 'O que são breakpoints em design responsivo?',
      options: [
        'Pontos em que o layout deve mudar para se ajustar a diferentes tamanhos de tela',
        'Pontos em que o site quebra',
        'Ferramentas de depuração',
        'Tamanhos de fontes usados no layout'
      ],
      answer: 0,
    },
    {
      question: 'Qual destas não é uma prática recomendada de usabilidade?',
      options: [
        'Navegação clara e acessível',
        'Uso de links ocultos',
        'Botões grandes o suficiente para toque',
        'Textos legíveis em todos os dispositivos'
      ],
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
      <h1>Quiz sobre Responsividade e Usabilidade</h1>
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