'use server';

import { getSharedPool } from './postgres';

export async function getTodosAction() {
  const pool = getSharedPool(process.env.POSTGRES_URL!);
  const client = await pool.connect();

  try {
    throw new Error('This is a test error');
    const result = await client.query('SELECT * FROM todos');
    console.log('Fetched todos:', result.rows);

    return [
      { id: 1, desc: 'buy banana 222' },
      { id: 2, desc: 'record codecast' },
    ];

    return result.rows;
  } finally {
    client.release();
  }
}
