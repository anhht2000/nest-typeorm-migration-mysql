import { DataSource, DataSourceOptions } from 'typeorm';

export const typeOrmConfig: DataSourceOptions = {
  type: 'mysql',
  host: 'localhost',
  database: 'nest-sql',
  port: 9000,
  username: 'develop',
  password: 'password',
  logging: true,
  logger: 'advanced-console',
  synchronize: false,
  timezone: 'Z',
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/database/migrations/*{.ts,.js}'],
  migrationsTableName: 'migrations',
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
    charset: 'utf8mb4_unicode_ci',
  },
};

export default new DataSource(typeOrmConfig);
