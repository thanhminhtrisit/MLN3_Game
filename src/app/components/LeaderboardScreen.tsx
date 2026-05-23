import { useState, useEffect } from 'react';

interface LeaderboardRow {
  rank: number;
  player_name: string;
  score: string;
  correct_answers: number;
  hints_used: number;
  played_at: string;
}

interface LeaderboardScreenProps {
  onBack: () => void;
}

const PASSWORD = 'mln3se184190';

const STORAGE_KEY = 'leaderboard_unlocked';

export function LeaderboardScreen({ onBack }: LeaderboardScreenProps) {
  const [input, setInput] = useState('');
  const [unlocked, setUnlocked] = useState(() => localStorage.getItem(STORAGE_KEY) === '1');
  const [shake, setShake] = useState(false);
  const [rows, setRows] = useState<LeaderboardRow[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/leaderboard');
      if (!res.ok) throw new Error();
      setRows(await res.json());
    } catch {
      setError('Không thể tải dữ liệu. Vui lòng thử lại.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (unlocked) fetchData();
  }, [unlocked]);

  const handleUnlock = async (e: React.FormEvent) => {
    e.preventDefault();
    if (input !== PASSWORD) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      setInput('');
      return;
    }
    localStorage.setItem(STORAGE_KEY, '1');
    setUnlocked(true);
  };

  const formatDate = (iso: string) => {
    const d = new Date(iso);
    return d.toLocaleString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="min-h-full flex flex-col items-center justify-center p-8 relative">
      {/* Corner brackets */}
      <div className="fixed top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-[#d4a82c]"></div>
      <div className="fixed top-4 right-4 w-12 h-12 border-r-2 border-t-2 border-[#d4a82c]"></div>
      <div className="fixed bottom-4 left-4 w-12 h-12 border-l-2 border-b-2 border-[#d4a82c]"></div>
      <div className="fixed bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-[#d4a82c]"></div>

      <div className="max-w-4xl w-full space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <button
            onClick={onBack}
            className="bg-[#2a6f6a] border-2 border-black px-4 py-2"
            style={{
              fontFamily: '"Oswald", sans-serif', fontWeight: 700,
              fontSize: '0.9rem', color: '#f4ead5', letterSpacing: '0.05em',
              boxShadow: '3px 3px 0 rgba(0,0,0,0.3)', transition: 'transform 0.1s'
            }}
            onMouseDown={(e) => e.currentTarget.style.transform = 'translate(2px,2px)'}
            onMouseUp={(e) => e.currentTarget.style.transform = 'translate(0,0)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translate(0,0)'}
          >
            ← QUAY LẠI
          </button>

          <h1 style={{
            fontFamily: '"Oswald", sans-serif', fontWeight: 700, fontStyle: 'italic',
            fontSize: '2.5rem', color: '#f0c040', textShadow: '4px 4px 0 #c8341e',
            letterSpacing: '-0.02em', textTransform: 'uppercase'
          }}>
            🏆 BẢNG XẾP HẠNG
          </h1>

          <div style={{ width: '120px' }} />
        </div>

        {!unlocked ? (
          /* Password gate */
          <div className="max-w-md mx-auto">
            <div className="bg-[#f4ead5] border-[3px] border-black p-8" style={{ boxShadow: '8px 8px 0 rgba(0,0,0,0.3)' }}>
              <div className="text-center mb-6" style={{ fontSize: '3rem' }}>🔒</div>
              <label className="block mb-3" style={{
                fontFamily: '"Oswald", sans-serif', fontWeight: 700,
                fontSize: '0.9rem', letterSpacing: '0.15em', color: '#c8341e', textTransform: 'uppercase'
              }}>
                NHẬP MẬT KHẨU
              </label>
              <form onSubmit={handleUnlock}>
                <input
                  type="password"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className={`w-full bg-white border-2 border-black px-4 py-3 text-xl mb-4 ${shake ? 'animate-shake' : ''}`}
                  style={{
                    fontFamily: '"Be Vietnam Pro", sans-serif',
                    outline: 'none',
                    borderColor: shake ? '#c8341e' : '#000',
                    boxShadow: shake ? '0 0 0 3px rgba(200,52,30,0.3)' : '3px 3px 0 rgba(0,0,0,0.2)'
                  }}
                  placeholder="Mật khẩu..."
                  autoFocus
                />
                {error && (
                  <div className="mb-4 text-center" style={{ color: '#c8341e', fontFamily: '"Be Vietnam Pro", sans-serif', fontSize: '0.9rem' }}>
                    {error}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={loading || !input}
                  className="w-full bg-[#c8341e] border-[3px] border-black py-4 disabled:opacity-50"
                  style={{
                    fontFamily: '"Oswald", sans-serif', fontWeight: 700,
                    fontSize: '1.2rem', color: '#f4ead5', letterSpacing: '0.08em',
                    boxShadow: '5px 5px 0 rgba(0,0,0,0.3)', transition: 'transform 0.1s'
                  }}
                  onMouseDown={(e) => !e.currentTarget.disabled && (e.currentTarget.style.transform = 'translate(2px,2px)')}
                  onMouseUp={(e) => e.currentTarget.style.transform = 'translate(0,0)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translate(0,0)'}
                >
                  {loading ? 'ĐANG TẢI...' : '🔓 MỞ KHÓA'}
                </button>
              </form>
            </div>
          </div>
        ) : (
          /* Leaderboard table */
          <div className="bg-[#f4ead5] border-[3px] border-black" style={{ boxShadow: '8px 8px 0 rgba(0,0,0,0.3)' }}>
            {/* Stats bar */}
            <div className="bg-[#c8341e] border-b-[3px] border-black px-6 py-3 flex items-center gap-6">
              <span style={{ fontFamily: '"Oswald", sans-serif', fontWeight: 700, fontSize: '0.9rem', color: '#f4ead5', letterSpacing: '0.1em' }}>
                TỔNG LƯỢT CHƠI: {rows.length}
              </span>
            </div>

            {rows.length === 0 ? (
              <div className="p-12 text-center" style={{ fontFamily: '"Be Vietnam Pro", sans-serif', color: '#717182' }}>
                Chưa có dữ liệu nào.
              </div>
            ) : (
              <div className="overflow-auto">
                <table className="w-full">
                  <thead>
                    <tr style={{ borderBottom: '3px solid #1a0a0a', backgroundColor: '#e8dfc8' }}>
                      {['#', 'Tên', 'Điểm', 'Đúng', 'Gợi ý', 'Thời gian'].map((h) => (
                        <th key={h} className="px-4 py-3 text-left" style={{
                          fontFamily: '"Oswald", sans-serif', fontWeight: 700,
                          fontSize: '0.85rem', letterSpacing: '0.1em',
                          color: '#c8341e', textTransform: 'uppercase'
                        }}>
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((row, idx) => (
                      <tr key={idx} style={{
                        borderBottom: '1px solid #e8dfc8',
                        backgroundColor: idx % 2 === 0 ? 'transparent' : '#faf6ed'
                      }}>
                        <td className="px-4 py-3" style={{
                          fontFamily: '"Bungee", sans-serif', fontSize: '1.1rem',
                          color: idx === 0 ? '#d4a82c' : idx === 1 ? '#9e9e9e' : idx === 2 ? '#c87941' : '#1a0a0a'
                        }}>
                          {idx === 0 ? '👑' : idx === 1 ? '🥈' : idx === 2 ? '🥉' : row.rank}
                        </td>
                        <td className="px-4 py-3" style={{
                          fontFamily: '"Be Vietnam Pro", sans-serif', fontWeight: 600,
                          fontSize: '1rem', color: '#1a0a0a'
                        }}>
                          {row.player_name}
                        </td>
                        <td className="px-4 py-3" style={{
                          fontFamily: '"Bungee", sans-serif', fontSize: '1.2rem', color: '#c8341e'
                        }}>
                          {Number(row.score).toFixed(1)}
                        </td>
                        <td className="px-4 py-3 text-center" style={{
                          fontFamily: '"Oswald", sans-serif', fontWeight: 700,
                          fontSize: '1rem', color: '#2a6f6a'
                        }}>
                          {row.correct_answers}/10
                        </td>
                        <td className="px-4 py-3 text-center" style={{
                          fontFamily: '"Be Vietnam Pro", sans-serif', fontSize: '0.9rem', color: '#717182'
                        }}>
                          {row.hints_used} 💡
                        </td>
                        <td className="px-4 py-3" style={{
                          fontFamily: '"Be Vietnam Pro", sans-serif', fontSize: '0.8rem', color: '#717182'
                        }}>
                          {formatDate(row.played_at)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-8px); }
          75% { transform: translateX(8px); }
        }
        .animate-shake { animation: shake 0.3s; }
      `}</style>
    </div>
  );
}
