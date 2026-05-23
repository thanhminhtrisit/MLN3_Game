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
      SELECT
        ROW_NUMBER() OVER (ORDER BY score DESC, played_at ASC) AS rank,
        player_name,
        score,
        correct_answers,
        hints_used,
        played_at
      FROM scores
      ORDER BY score DESC, played_at ASC
      LIMIT 100
    `);
    return res.status(200).json(result.rows);
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return res.status(500).json({ error: message });
  }
}
