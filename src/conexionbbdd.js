import pool from 'pg';

export const conexionbbdd = new pool({
  user: 'postgres.snuzpjwolxlygxasqfwp', // Usuario de la base de datos
  host: 'aws-0-eu-central-1.pooler.supabase.com', // Dirección del host
  database: 'postgres', // Nombre de la base de datos
  password: 'boXzfjOgLtGTwPVp', // Contraseña de la base de datos
  port: 5432, // Puerto (por defecto, 5432)
});