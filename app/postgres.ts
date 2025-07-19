import { Pool, PoolClient } from 'pg';

export type PostgresPoolClient = PoolClient;

declare global {
  // Avoid TypeScript errors on reassigning globalThis
  // This will persist across hot reloads in dev
  var _pgPool: Pool | undefined;
}

export const getSharedPool = (connectionString: string) => {
  if (!global._pgPool) {
    global._pgPool = new Pool({ connectionString });
  }
  return global._pgPool;
};
