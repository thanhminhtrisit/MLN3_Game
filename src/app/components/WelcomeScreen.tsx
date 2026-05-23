import { useState } from 'react';

interface WelcomeScreenProps {
  onStart: (name: string) => void;
  onLeaderboard: () => void;
}

export function WelcomeScreen({ onStart, onLeaderboard }: WelcomeScreenProps) {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onStart(name.trim());
    }
  };

  const handleStart = () => {
    if (name.trim()) {
      onStart(name.trim());
    }
  };

  return (
    <div className="min-h-full flex flex-col items-center justify-center p-8 relative">
      {/* Corner brackets decoration */}
      <div className="fixed top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-[#d4a82c]"></div>
      <div className="fixed top-4 right-4 w-12 h-12 border-r-2 border-t-2 border-[#d4a82c]"></div>
      <div className="fixed bottom-4 left-4 w-12 h-12 border-l-2 border-b-2 border-[#d4a82c]"></div>
      <div className="fixed bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-[#d4a82c]"></div>

      <div className="max-w-2xl w-full space-y-8">
        {/* Title */}
        <div className="text-center">
          <h1 className="mb-2" style={{
            fontFamily: '"Oswald", sans-serif',
            fontWeight: 700,
            fontStyle: 'italic',
            fontSize: '4.5rem',
            lineHeight: 0.9,
            letterSpacing: '-0.02em',
            textTransform: 'uppercase',
            color: '#f4ead5'
          }}>
            ĐUỔI HÌNH
          </h1>
          <h1 className="relative" style={{
            fontFamily: '"Oswald", sans-serif',
            fontWeight: 700,
            fontStyle: 'italic',
            fontSize: '4.5rem',
            lineHeight: 0.9,
            letterSpacing: '-0.02em',
            textTransform: 'uppercase',
            color: '#f0c040',
            textShadow: '4px 4px 0 #c8341e'
          }}>
            BẮT CHỮ
          </h1>
        </div>

        {/* Star divider */}
        <div className="flex items-center justify-center gap-4">
          <div className="h-px bg-[#d4a82c] flex-1 max-w-24"></div>
          <div className="flex gap-3 text-[#f0c040] text-xl">
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>
          <div className="h-px bg-[#d4a82c] flex-1 max-w-24"></div>
        </div>

        {/* Name input card */}
        <form onSubmit={handleSubmit}>
          <div className="bg-[#f4ead5] border-[3px] border-black p-8 relative" style={{
            boxShadow: '8px 8px 0 rgba(0, 0, 0, 0.3)'
          }}>
            <label className="block mb-4" style={{
              fontFamily: '"Oswald", sans-serif',
              fontWeight: 700,
              fontSize: '0.9rem',
              letterSpacing: '0.15em',
              color: '#c8341e',
              textTransform: 'uppercase'
            }}>
              TÊN CỦA BẠN
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-white border-2 border-black px-6 py-4 text-2xl"
              style={{
                fontFamily: '"Be Vietnam Pro", sans-serif',
                fontWeight: 700,
                outline: 'none'
              }}
              placeholder="Nhập tên..."
              autoFocus
            />
          </div>
        </form>

        {/* Subtitle pill */}
        <div className="text-center">
          <div className="inline-block bg-[#2a6f6a] px-6 py-2 border-2 border-black" style={{
            fontFamily: '"Oswald", sans-serif',
            fontWeight: 700,
            fontSize: '0.85rem',
            letterSpacing: '0.12em',
            color: '#f0c040',
            textTransform: 'uppercase'
          }}>
            10 CÂU NGẪU NHIÊN · 1 NGƯỜI CHƠI
          </div>
        </div>

        {/* Rules card */}
        <div className="bg-[#f4ead5] border-[3px] border-black p-6 border-dashed" style={{
          boxShadow: '6px 6px 0 rgba(0, 0, 0, 0.2)'
        }}>
          <div className="space-y-2" style={{
            fontFamily: '"Be Vietnam Pro", sans-serif',
            fontSize: '0.95rem',
            lineHeight: 1.6,
            color: '#1a0a0a'
          }}>
            <div><strong>⏱</strong> 38s (2 từ) · 45s (3 từ) · 50s (4 từ)</div>
            <div><strong>💡</strong> 10 lượt gợi ý cho TOÀN GAME (−0.2đ mỗi lượt)</div>
            <div><strong>✓</strong> chấp nhận có dấu hoặc không dấu</div>
          </div>
        </div>

        {/* Start button */}
        <button
          type="button"
          onClick={handleStart}
          disabled={!name.trim()}
          className="w-full bg-[#c8341e] border-[3px] border-black px-8 py-5 disabled:opacity-50 disabled:cursor-not-allowed"
          style={{
            fontFamily: '"Oswald", sans-serif',
            fontWeight: 700,
            fontSize: '1.5rem',
            letterSpacing: '0.08em',
            color: '#f4ead5',
            textTransform: 'uppercase',
            boxShadow: '8px 8px 0 rgba(0, 0, 0, 0.4)',
            transition: 'transform 0.1s',
          }}
          onMouseDown={(e) => e.currentTarget.style.transform = 'translate(2px, 2px)'}
          onMouseUp={(e) => e.currentTarget.style.transform = 'translate(0, 0)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translate(0, 0)'}
        >
          ▶ BẮT ĐẦU CHƠI
        </button>

        {/* Leaderboard button */}
        <button
          type="button"
          onClick={onLeaderboard}
          className="w-full bg-transparent border-2 border-[#d4a82c] px-8 py-3"
          style={{
            fontFamily: '"Oswald", sans-serif',
            fontWeight: 700,
            fontSize: '1rem',
            letterSpacing: '0.1em',
            color: '#d4a82c',
            textTransform: 'uppercase',
            transition: 'transform 0.1s',
          }}
          onMouseDown={(e) => e.currentTarget.style.transform = 'translate(2px, 2px)'}
          onMouseUp={(e) => e.currentTarget.style.transform = 'translate(0, 0)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translate(0, 0)'}
        >
          🏆 XEM BẢNG XẾP HẠNG
        </button>
      </div>
    </div>
  );
}
