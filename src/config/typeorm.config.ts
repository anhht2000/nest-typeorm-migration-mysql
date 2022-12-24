import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'mysql',
  host: 'localhost',
  database: 'nest-sql',
  port: Number(process.env.MYSQL_DATABASE_PORT),
  username: 'root',
  password: '12346789aA',
  logging: true,
  logger: 'advanced-console',
  synchronize: false,
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/database/migrations/*{.ts,.js}'],
  migrationsTableName: 'migrations',
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
    charset: 'utf8mb4_unicode_ci',
  },
});
