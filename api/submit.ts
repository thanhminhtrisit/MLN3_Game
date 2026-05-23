import type { VercelRequest, VercelResponse } from '@vercel/node';
import pool, { dbReady } from './db';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { playerName, score, correctAnswers, hintsUsed } = req.body ?? {};

  if (!playerName || score === undefined || correctAnswers === undefined || hintsUsed === undefined) {
    return res.status(400).json({ error: 'Thiếu dữ liệu' });
  }

  try {
    await dbReady;
    await pool.query(
      `INSERT INTO scores (player_name, score, correct_answers, hints_used)
       VALUES ($1, $2, $3, $4)`,
      [String(playerName).slice(0, 100), Number(score), Number(correctAnswers), Number(hintsUsed)]
    );
    return res.status(200).json({ success: true });
  } catch {
    return res.status(500).json({ error: 'Database error' });
  }
}
