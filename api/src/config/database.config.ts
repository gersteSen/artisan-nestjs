export const databaseConfig = () => ({
  database: {
    type: process.env.DATABASE_TYPE,
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
    database: process.env.DATABASE_DB,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD
  }
});
