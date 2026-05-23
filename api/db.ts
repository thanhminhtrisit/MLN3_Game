import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

export const dbReady = pool.query(`
  CREATE TABLE IF NOT EXISTS scores (
    id            SERIAL PRIMARY KEY,
    player_name   VARCHAR(100) NOT NULL,
    score         DECIMAL(4,1) NOT NULL,
    correct_answers INTEGER NOT NULL,
    hints_used    INTEGER NOT NULL,
    played_at     TIMESTAMPTZ DEFAULT NOW()
  )
`).catch(console.error);

export default pool;
