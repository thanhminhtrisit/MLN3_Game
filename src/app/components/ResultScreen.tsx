import { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { GameState } from '../App';

interface ResultScreenProps {
  gameState: GameState;
  onRestart: () => void;
}

interface ScoreRow {
  player_name: string;
  score: string;
  correct_answers: number;
  hints_used: number;
  played_at: string;
}

export function ResultScreen({ gameState, onRestart }: ResultScreenProps) {
  const { correctAnswers, hintsUsed, playerName } = gameState;
  const finalScore = Math.max(0, correctAnswers - (hintsUsed * 0.2));
  const isPerfect = correctAnswers === 10;

  const [leaderboard, setLeaderboard] = useState<ScoreRow[]>([]);
  const [loadingBoard, setLoadingBoard] = useState(true);

  // Confetti cho điểm tuyệt đối
  useEffect(() => {
    if (!isPerfect) return;
    let rafId: number;
    const end = Date.now() + 3000;
    const frame = () => {
      confetti({ particleCount: 3, angle: 60,  spread: 55, origin: { x: 0 }, colors: ['#f0c040', '#c8341e', '#e84a30', '#d4a82c'] });
      confetti({ particleCount: 3, angle: 120, spread: 55, origin: { x: 1 }, colors: ['#f0c040', '#c8341e', '#e84a30', '#d4a82c'] });
      if (Date.now() < end) rafId = requestAnimationFrame(frame);
    };
    rafId = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(rafId);
  }, [isPerfect]);

  // Submit điểm + lấy bảng xếp hạng
  useEffect(() => {
    const run = async () => {
      try {
        await fetch('/api/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            playerName,
            score: finalScore,
            correctAnswers,
            hintsUsed,
          }),
        });
      } catch { /* không chặn nếu lỗi mạng */ }

      try {
        const res = await fetch('/api/scores');
        if (res.ok) setLeaderboard(await res.json());
      } catch { /* bảng xếp hạng không hiện nếu lỗi */ }

      setLoadingBoard(false);
    };
    run();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getHeadline = () => {
    if (isPerfect) return 'HOÀN HẢO!';
    if (correctAnswers >= 7) return 'GẦN LẮM RỒI!';
    if (correctAnswers >= 4) return 'CỐ LÊN BẠN ƠI!';
    return 'TRIẾT HỌC THẬT THÚ VỊ!';
  };

  const getEncouragement = () => {
    if (isPerfect) return `Xuất sắc ${playerName}! Bạn đã trả lời đúng tất cả các câu hỏi triết học. Kiến thức của bạn thật ấn tượng!`;
    if (correctAnswers >= 7) return `Tuyệt vời ${playerName}! Bạn đã nắm vững được phần lớn các khái niệm triết học. Chỉ cần thêm chút nỗ lực nữa thôi!`;
    if (correctAnswers >= 4) return `Không tồi ${playerName}! Bạn đã có nền tảng về triết học. Hãy tiếp tục tìm hiểu thêm nhé!`;
    return `${playerName} ơi, triết học là một hành trình dài! Hãy khám phá thêm về các chủ đề như hiện hữu, lương tâm, và bản chất của sự vật.`;
  };

  return (
    <div className="min-h-full flex flex-col items-center justify-center p-8 relative">
      <div className="fixed top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-[#d4a82c]"></div>
      <div className="fixed top-4 right-4 w-12 h-12 border-r-2 border-t-2 border-[#d4a82c]"></div>
      <div className="fixed bottom-4 left-4 w-12 h-12 border-l-2 border-b-2 border-[#d4a82c]"></div>
      <div className="fixed bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-[#d4a82c]"></div>

      <div className="max-w-3xl w-full space-y-8 text-center">
        {/* Emoji */}
        <div className={isPerfect ? 'animate-bounce' : ''} style={{ fontSize: '5rem' }}>
          {isPerfect ? '👑' : correctAnswers >= 7 ? '🌟' : correctAnswers >= 4 ? '💪' : '📚'}
        </div>

        {/* Headline */}
        <h1 style={{
          fontFamily: '"Oswald", sans-serif', fontWeight: 700, fontStyle: 'italic',
          fontSize: '5rem', lineHeight: 1, letterSpacing: '-0.02em',
          textTransform: 'uppercase', color: '#f0c040', textShadow: '6px 6px 0 #c8341e'
        }}>
          {getHeadline()}
        </h1>

        {/* Score */}
        <div>
          <div style={{
            fontFamily: '"Bungee", sans-serif', fontSize: '6rem',
            color: '#f0c040', lineHeight: 1, textShadow: '0 0 30px rgba(240,192,64,0.5)'
          }}>
            {correctAnswers} / 10
          </div>
          <div className="mt-4" style={{
            fontFamily: '"Be Vietnam Pro", sans-serif', fontWeight: 500,
            fontSize: '1.2rem', color: '#f4ead5'
          }}>
            💡 đã dùng {hintsUsed} gợi ý · điểm cuối: {finalScore.toFixed(1)}
          </div>
        </div>

        {/* Star divider */}
        <div className="flex items-center justify-center gap-4">
          <div className="h-px bg-[#d4a82c] flex-1 max-w-32"></div>
          <div className="flex gap-3 text-[#f0c040] text-xl"><span>★</span><span>★</span><span>★</span></div>
          <div className="h-px bg-[#d4a82c] flex-1 max-w-32"></div>
        </div>

        {/* Encouragement */}
        <div className="bg-[#f4ead5] border-[3px] border-black p-8" style={{ boxShadow: '8px 8px 0 rgba(0,0,0,0.3)' }}>
          <p style={{ fontFamily: '"Be Vietnam Pro", sans-serif', fontWeight: 500, fontSize: '1.15rem', lineHeight: 1.8, color: '#1a0a0a' }}>
            {getEncouragement()}
          </p>
        </div>

        {/* Answer breakdown */}
        <div className="bg-[#f4ead5] border-[3px] border-black border-dashed p-6" style={{ boxShadow: '6px 6px 0 rgba(0,0,0,0.2)' }}>
          <div className="flex justify-center gap-2">
            {gameState.answers.map((correct, idx) => (
              <div key={idx} className="w-10 h-10 flex items-center justify-center border-2 border-black"
                style={{
                  backgroundColor: correct ? '#2a6f6a' : '#c8341e',
                  color: '#f4ead5', fontFamily: '"Oswald", sans-serif',
                  fontWeight: 700, fontSize: '1rem'
                }}>
                {correct ? '✓' : '✗'}
              </div>
            ))}
          </div>
        </div>

        {/* Leaderboard */}
        <div className="bg-[#f4ead5] border-[3px] border-black p-6" style={{ boxShadow: '8px 8px 0 rgba(0,0,0,0.3)' }}>
          <div className="mb-4" style={{
            fontFamily: '"Oswald", sans-serif', fontWeight: 700, fontSize: '1.3rem',
            letterSpacing: '0.1em', color: '#c8341e', textTransform: 'uppercase'
          }}>
            🏆 BẢNG XẾP HẠNG
          </div>

          {loadingBoard ? (
            <div style={{ fontFamily: '"Be Vietnam Pro", sans-serif', color: '#717182', fontSize: '0.95rem' }}>
              Đang tải...
            </div>
          ) : leaderboard.length === 0 ? (
            <div style={{ fontFamily: '"Be Vietnam Pro", sans-serif', color: '#717182', fontSize: '0.95rem' }}>
              Chưa có dữ liệu
            </div>
          ) : (
            <table className="w-full" style={{ fontFamily: '"Be Vietnam Pro", sans-serif', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #1a0a0a' }}>
                  <th className="text-left py-2 px-2" style={{ color: '#c8341e', fontWeight: 700, width: '2rem' }}>#</th>
                  <th className="text-left py-2 px-2" style={{ color: '#c8341e', fontWeight: 700 }}>Tên</th>
                  <th className="text-center py-2 px-2" style={{ color: '#c8341e', fontWeight: 700 }}>Điểm</th>
                  <th className="text-center py-2 px-2" style={{ color: '#c8341e', fontWeight: 700 }}>Đúng</th>
                  <th className="text-center py-2 px-2" style={{ color: '#c8341e', fontWeight: 700 }}>Gợi ý</th>
                  <th className="text-right py-2 px-2" style={{ color: '#c8341e', fontWeight: 700 }}>Thời gian</th>
                </tr>
              </thead>
              <tbody>
                {leaderboard.map((row, idx) => {
                  const isMe = row.player_name === playerName && Number(row.score) === finalScore;
                  const d = new Date(row.played_at);
                  const timeStr = d.toLocaleString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });
                  return (
                    <tr key={idx}
                      style={{
                        borderBottom: '1px solid #e8dfc8',
                        backgroundColor: isMe ? '#fdf3c8' : 'transparent',
                        fontWeight: isMe ? 700 : 400,
                      }}>
                      <td className="py-2 px-2" style={{ color: idx === 0 ? '#d4a82c' : '#717182' }}>
                        {idx === 0 ? '👑' : idx === 1 ? '🥈' : idx === 2 ? '🥉' : `${idx + 1}`}
                      </td>
                      <td className="py-2 px-2" style={{ color: '#1a0a0a' }}>
                        {row.player_name}{isMe ? ' ← bạn' : ''}
                      </td>
                      <td className="py-2 px-2 text-center" style={{ color: '#c8341e', fontWeight: 700 }}>
                        {Number(row.score).toFixed(1)}
                      </td>
                      <td className="py-2 px-2 text-center" style={{ color: '#2a6f6a' }}>
                        {row.correct_answers}/10
                      </td>
                      <td className="py-2 px-2 text-center" style={{ color: '#717182' }}>
                        {row.hints_used}💡
                      </td>
                      <td className="py-2 px-2 text-right" style={{ color: '#717182', fontSize: '0.8rem' }}>
                        {timeStr}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>

        {/* Restart button */}
        <button onClick={onRestart}
          className="bg-[#c8341e] border-[3px] border-black px-12 py-5"
          style={{
            fontFamily: '"Oswald", sans-serif', fontWeight: 700, fontSize: '1.5rem',
            letterSpacing: '0.08em', color: '#f4ead5', textTransform: 'uppercase',
            boxShadow: '8px 8px 0 rgba(0,0,0,0.4)', transition: 'transform 0.1s',
          }}
          onMouseDown={(e) => e.currentTarget.style.transform = 'translate(2px, 2px)'}
          onMouseUp={(e) => e.currentTarget.style.transform = 'translate(0, 0)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translate(0, 0)'}
        >
          ▶ CHƠI LẠI
        </button>
      </div>

      <style>{`
        @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
        .animate-bounce { animation: bounce 1s infinite; }
      `}</style>
    </div>
  );
}
