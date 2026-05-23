import { useState, useEffect } from 'react';
import { WelcomeScreen } from './components/WelcomeScreen';
import { GameScreen } from './components/GameScreen';
import { ResultScreen } from './components/ResultScreen';
import { LeaderboardScreen } from './components/LeaderboardScreen';
import { getRandomQuestions, Question } from './data/questions';

type Screen = 'welcome' | 'game' | 'result' | 'leaderboard';

export interface GameState {
  playerName: string;
  questions: Question[];
  currentQuestionIndex: number;
  correctAnswers: number;
  hintsUsed: number;
  answers: boolean[];
}

const STORAGE_KEY = 'ddb-game-state-v1';

interface SavedState {
  screen: Screen;
  gameState: GameState;
}

function loadSavedState(): SavedState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as SavedState;
    // Kiểm tra dữ liệu hợp lệ: phải có screen và questions đã được chọn
    if (!parsed.screen) return null;
    // leaderboard không cần questions; các màn chơi khác thì cần
    if (parsed.screen !== 'leaderboard' && (!Array.isArray(parsed.gameState?.questions) || parsed.gameState.questions.length === 0)) {
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

const defaultGameState: GameState = {
  playerName: '',
  questions: [],
  currentQuestionIndex: 0,
  correctAnswers: 0,
  hintsUsed: 0,
  answers: [],
};

export default function App() {
  const saved = loadSavedState();
  const [screen, setScreen] = useState<Screen>(saved?.screen ?? 'welcome');
  const [gameState, setGameState] = useState<GameState>(saved?.gameState ?? defaultGameState);

  // Lưu state mỗi khi thay đổi; xóa khi về welcome
  useEffect(() => {
    if (screen === 'welcome') {
      localStorage.removeItem(STORAGE_KEY);
    } else {
      const toSave: SavedState = { screen, gameState };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
    }
  }, [screen, gameState]);

  const startGame = (name: string) => {
    const questions = getRandomQuestions();
    setGameState({
      playerName: name,
      questions,
      currentQuestionIndex: 0,
      correctAnswers: 0,
      hintsUsed: 0,
      answers: new Array(10).fill(false),
    });
    setScreen('game');
  };

  const handleCorrectAnswer = () => {
    setGameState(prev => {
      const newAnswers = [...prev.answers];
      newAnswers[prev.currentQuestionIndex] = true;
      return { ...prev, correctAnswers: prev.correctAnswers + 1, answers: newAnswers };
    });
    nextQuestion();
  };

  const handleWrongAnswer = () => {
    nextQuestion();
  };

  const handleUseHint = () => {
    setGameState(prev => ({ ...prev, hintsUsed: prev.hintsUsed + 1 }));
  };

  const nextQuestion = () => {
    setTimeout(() => {
      setGameState(prev => {
        if (prev.currentQuestionIndex < 9) {
          return { ...prev, currentQuestionIndex: prev.currentQuestionIndex + 1 };
        }
        setScreen('result');
        return prev;
      });
    }, 800);
  };

  const restartGame = () => {
    setScreen('welcome');
    setGameState(defaultGameState);
  };

  return (
    <div className="size-full overflow-auto" style={{
      background: 'radial-gradient(circle at center, #2a0f10 0%, #1a0a0a 100%)',
      fontFamily: '"Be Vietnam Pro", sans-serif'
    }}>
      {screen === 'welcome' && <WelcomeScreen onStart={startGame} onLeaderboard={() => setScreen('leaderboard')} />}
      {screen === 'game' && (
        <GameScreen
          gameState={gameState}
          onCorrect={handleCorrectAnswer}
          onWrong={handleWrongAnswer}
          onUseHint={handleUseHint}
        />
      )}
      {screen === 'result' && (
        <ResultScreen
          gameState={gameState}
          onRestart={restartGame}
        />
      )}
      {screen === 'leaderboard' && (
        <LeaderboardScreen onBack={() => setScreen('welcome')} />
      )}
    </div>
  );
}
