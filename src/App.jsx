import { useState } from 'react';
import Home from './Pages/Home';
import Quiz from './Pages/quiz';
import Result from './Pages/Result';
import { quizData } from './data/QuizData';


function App() {
  const [currentView, setCurrentView] = useState('Home'); // 'landing', 'quiz', 'result'
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [score, setScore] = useState(0);

  const handleTopicSelect = (topicId) => {
    setSelectedTopic(topicId);
    setCurrentView('quiz');
  };

  const handleQuizComplete = (finalScore) => {
    setScore(finalScore);
    setCurrentView('Result');
  };

  const handleRestart = () => {
    setCurrentView('Home');
    setSelectedTopic(null);
    setScore(0);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-[#A8D0E6] to-[#EEF7FF]">
      {currentView === 'Home' && (
        <Home onTopicSelect={handleTopicSelect} />
      )}
      
      {currentView === 'quiz' && selectedTopic && (
        <Quiz
          topic={quizData[selectedTopic].title}
          questions={quizData[selectedTopic].questions}
          onComplete={handleQuizComplete}
        />
      )}

      {currentView === 'Result' && (
        <Result score={score} onRestart={handleRestart} />
      )}
    </div>
  );
}

export default App;
