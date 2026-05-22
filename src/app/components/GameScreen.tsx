import { useState, useEffect, useRef } from 'react';
import { GameState } from '../App';
import { removeDiacritics } from '../data/questions';

interface GameScreenProps {
  gameState: GameState;
  onCorrect: () => void;
  onWrong: () => void;
  onUseHint: () => void;
}

export function GameScreen({ gameState, onCorrect, onWrong, onUseHint }: GameScreenProps) {
  const currentQuestion = gameState.questions[gameState.currentQuestionIndex];

  const [userInput, setUserInput] = useState('');
  const [timeLeft, setTimeLeft] = useState(() => currentQuestion.timeLimit);
  const [revealedLetters, setRevealedLetters] = useState<Set<number>>(new Set());
  const [isCorrect, setIsCorrect] = useState(false);
  const [isShowingAnswer, setIsShowingAnswer] = useState(false);
  const [shake, setShake] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const maxHints = 10;
  const hintsRemaining = maxHints - gameState.hintsUsed;

  useEffect(() => {
    setUserInput('');
    setRevealedLetters(new Set());
    setIsCorrect(false);
    setIsShowingAnswer(false);
    setTimeLeft(currentQuestion.timeLimit);
  }, [gameState.currentQuestionIndex, currentQuestion.timeLimit]);

  const onWrongRef = useRef(onWrong);
  useEffect(() => { onWrongRef.current = onWrong; }, [onWrong]);

  useEffect(() => {
    if (isCorrect || isShowingAnswer) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsShowingAnswer(true);
          setTimeout(() => onWrongRef.current(), 3000);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameState.currentQuestionIndex, isCorrect, isShowingAnswer]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isShowingAnswer) return;

    const normalized = removeDiacritics(userInput);
    const correctNormalized = currentQuestion.normalizedAnswer;

    if (normalized === correctNormalized) {
      setIsCorrect(true);
      setTimeout(onCorrect, 800);
    } else {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      setUserInput('');
    }
  };

  const handleHint = () => {
    if (hintsRemaining <= 0 || isShowingAnswer) return;

    const answer = currentQuestion.answer.replace(/\s/g, '');
    const unrevealed = Array.from({ length: answer.length }, (_, i) => i)
      .filter(i => !revealedLetters.has(i));

    if (unrevealed.length > 0) {
      const randomIndex = unrevealed[Math.floor(Math.random() * unrevealed.length)];
      setRevealedLetters(prev => new Set([...prev, randomIndex]));
      onUseHint();
    }
  };

  const renderLetterSlots = () => {
    const words = currentQuestion.answer.split(' ');
    let letterIndex = 0;

    return (
      <div className="flex flex-wrap justify-center gap-3">
        {words.map((word, wordIdx) => (
          <div key={wordIdx} className="flex gap-1">
            {word.split('').map((letter, idx) => {
              const globalIdx = letterIndex++;
              const isRevealed = revealedLetters.has(globalIdx);
              const showLetter = isRevealed || isCorrect || isShowingAnswer;

              let bgColor = '#f4ead5';
              let textColor = '#1a0a0a';
              if (isCorrect) { bgColor = '#c8341e'; textColor = '#f4ead5'; }
              else if (isShowingAnswer) { bgColor = '#e84a30'; textColor = '#f4ead5'; }
              else if (isRevealed) { bgColor = '#f0c040'; }

              return (
                <div
                  key={globalIdx}
                  className="flex items-center justify-center border-[3px] border-black"
                  style={{
                    width: '44px',
                    height: '56px',
                    backgroundColor: bgColor,
                    color: textColor,
                    fontFamily: '"Oswald", sans-serif',
                    fontWeight: 700,
                    fontSize: '1.8rem',
                    boxShadow: '3px 3px 0 rgba(0, 0, 0, 0.3)',
                    transition: 'all 0.3s'
                  }}
                >
                  {showLetter ? letter : ''}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-full flex flex-col p-6">
      {/* Top bar */}
      <div className="flex items-center justify-between mb-8">
        <div className="bg-[#2a6f6a] px-4 py-2 border-2 border-black" style={{
          fontFamily: '"Oswald", sans-serif',
          fontWeight: 700,
          fontSize: '0.85rem',
          color: '#f4ead5',
          letterSpacing: '0.05em'
        }}>
          {gameState.playerName}
        </div>

        <div className="bg-[#f0c040] px-5 py-2 border-[3px] border-black" style={{
          fontFamily: '"Oswald", sans-serif',
          fontWeight: 700,
          fontSize: '1.1rem',
          color: '#1a0a0a',
          letterSpacing: '0.08em',
          boxShadow: '4px 4px 0 rgba(0, 0, 0, 0.3)'
        }}>
          CÂU {String(gameState.currentQuestionIndex + 1).padStart(2, '0')}/10
        </div>

        <div className="bg-[#2a6f6a] px-4 py-2 border-2 border-black" style={{
          fontFamily: '"Be Vietnam Pro", sans-serif',
          fontWeight: 700,
          fontSize: '0.85rem',
          color: '#f0c040',
          letterSpacing: '0.03em'
        }}>
          💡 {hintsRemaining}/10 GỢI Ý CÒN LẠI
        </div>
      </div>

      <div className="flex-1 flex gap-6 max-w-7xl mx-auto w-full">
        {/* Main area */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Image card */}
          {(() => {
            const count = currentQuestion.imageUrls.length;
            const imgHeight = count === 1 ? 500 : count === 2 ? 340 : count === 3 ? 260 : 240;
            const cols = Math.min(count, 2);
            return (
              <div className="bg-[#f4ead5] border-[3px] border-black p-4 border-dashed" style={{
                boxShadow: '8px 8px 0 rgba(0, 0, 0, 0.3)'
              }}>
                <div
                  className="grid gap-2"
                  style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
                >
                  {currentQuestion.imageUrls.map((url, idx) => (
                    <img
                      key={url}
                      src={url}
                      alt={`Hình minh họa ${idx + 1}`}
                      className="w-full object-contain border-2 border-dashed border-black"
                      style={{
                        height: `${imgHeight}px`,
                        gridColumn:
                          count % 2 !== 0 && idx === count - 1 ? '1 / -1' : undefined,
                        background: 'repeating-linear-gradient(45deg, #e8dfc8, #e8dfc8 10px, #f4ead5 10px, #f4ead5 20px)'
                      }}
                    />
                  ))}
                </div>
              </div>
            );
          })()}

          {/* Letter slots */}
          <div className="py-6">
            {renderLetterSlots()}
          </div>

          {/* "Hết giờ" banner OR input */}
          {isShowingAnswer ? (
            <div
              className="w-full border-[3px] border-black px-6 py-4 text-center"
              style={{
                backgroundColor: '#e84a30',
                fontFamily: '"Oswald", sans-serif',
                fontWeight: 700,
                fontSize: '1.2rem',
                letterSpacing: '0.1em',
                color: '#f4ead5',
                boxShadow: '4px 4px 0 rgba(0, 0, 0, 0.2)'
              }}
            >
              ⏰ HẾT GIỜ! — Đáp án: <span style={{ color: '#f0c040' }}>{currentQuestion.answer}</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="relative">
                <input
                  ref={inputRef}
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  placeholder="Nhập đáp án (có dấu hoặc không dấu)..."
                  className={`w-full bg-white border-[3px] px-6 py-4 pr-24 ${shake ? 'animate-shake' : ''}`}
                  style={{
                    fontFamily: '"Be Vietnam Pro", sans-serif',
                    fontWeight: 500,
                    fontSize: '1.2rem',
                    borderColor: shake ? '#c8341e' : '#000',
                    outline: 'none',
                    boxShadow: shake ? '0 0 0 3px rgba(200, 52, 30, 0.3)' : '4px 4px 0 rgba(0, 0, 0, 0.2)'
                  }}
                  autoFocus
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2" style={{
                  fontFamily: '"Oswald", sans-serif',
                  fontWeight: 700,
                  fontSize: '0.75rem',
                  color: '#717182',
                  letterSpacing: '0.1em'
                }}>
                  ↵ ENTER
                </div>
              </div>
            </form>
          )}
        </div>

        {/* Right sidebar */}
        <div className="w-48 flex flex-col gap-4">
          {/* Timer */}
          <div className="bg-black border-[3px] border-[#d4a82c] p-6 text-center" style={{
            boxShadow: timeLeft <= 10 ? '0 0 20px rgba(228, 74, 48, 0.5)' : '6px 6px 0 rgba(0, 0, 0, 0.4)'
          }}>
            <div style={{
              fontFamily: '"Bungee", sans-serif',
              fontSize: '2.5rem',
              color: isShowingAnswer ? '#e84a30' : timeLeft <= 10 ? '#e84a30' : '#f0c040',
              textShadow: timeLeft <= 10 ? '0 0 10px rgba(228, 74, 48, 0.8)' : '0 0 10px rgba(240, 192, 64, 0.6)',
              animation: timeLeft <= 10 && !isShowingAnswer ? 'pulse 0.5s infinite' : 'none'
            }}>
              {isShowingAnswer
                ? '00:00'
                : `${String(Math.floor(timeLeft / 60)).padStart(2, '0')}:${String(timeLeft % 60).padStart(2, '0')}`
              }
            </div>
          </div>

          {/* Hint button */}
          <button
            onClick={handleHint}
            disabled={hintsRemaining <= 0 || isShowingAnswer}
            className="bg-[#d4a82c] border-[3px] border-black px-4 py-4 disabled:opacity-30 disabled:cursor-not-allowed"
            style={{
              fontFamily: '"Be Vietnam Pro", sans-serif',
              fontWeight: 700,
              fontSize: '0.95rem',
              color: '#1a0a0a',
              boxShadow: '5px 5px 0 rgba(0, 0, 0, 0.4)',
              transition: 'transform 0.1s'
            }}
            onMouseDown={(e) => !e.currentTarget.disabled && (e.currentTarget.style.transform = 'translate(2px, 2px)')}
            onMouseUp={(e) => e.currentTarget.style.transform = 'translate(0, 0)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translate(0, 0)'}
          >
            💡 DÙNG GỢI Ý
            <div className="text-xs mt-1">({hintsRemaining} còn lại)</div>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-10px); }
          75% { transform: translateX(10px); }
        }
        .animate-shake {
          animation: shake 0.3s;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
      `}</style>
    </div>
  );
}
