import type { VercelRequest, VercelResponse } from '@vercel/node';
import pool, { dbReady } from './db';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  try {
    await dbReady;
    const result = await pool.query(`
      SELECT player_name, score, correct_answers, hints_used, played_at
      FROM scores
      ORDER BY score DESC, played_at ASC
      LIMIT 10
    `);
    return res.status(200).json(result.rows);
  } catch {
    return res.status(500).json({ error: 'Database error' });
  }
}
