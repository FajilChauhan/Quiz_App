import { Routes, Route, useNavigate, useLocation, useParams } from 'react-router-dom';
import Home from './Pages/Home';
import Quiz from './Pages/quiz';
import Result from './Pages/Result';
import { quizData } from './data/QuizData';

function App() {
  return (
    <div className="min-h-screen bg-linear-to-br from-[#A8D0E6] to-[#EEF7FF]">
      <Routes>
        {/* Home page */}
        <Route path="/" element={<HomeWithRouting />} />

        {/* Quiz page with topicId in URL */}
        <Route path="/quiz/:topicId" element={<QuizWithRouting />} />

        {/* Result page */}
        <Route path="/result" element={<ResultWithRouting />} />
      </Routes>
    </div>
  );
}

function HomeWithRouting() {
  const navigate = useNavigate();

  const handleTopicSelect = (topicId) => {
    // navigate to /quiz/topicId
    navigate(`/quiz/${topicId}`);
  };

  return <Home onTopicSelect={handleTopicSelect} />;
}

function QuizWithRouting() {
  const { topicId } = useParams();
  const navigate = useNavigate();

  const topic = quizData[topicId];

  if (!topic) {
    return <div className="p-4">Invalid topic. Please go back.</div>;
  }

  const handleQuizComplete = (finalScore) => {
    navigate('/result', { state: { score: finalScore } });
  };

  return (
    <Quiz
      topic={topic.title}
      questions={topic.questions}
      onComplete={handleQuizComplete}
    />
  );
}

function ResultWithRouting() {
  const location = useLocation();
  const navigate = useNavigate();

  const score = location.state?.score ?? 0;

  const handleRestart = () => {
    navigate('/');
  };

  return <Result score={score} onRestart={handleRestart} />;
}

export default App;
