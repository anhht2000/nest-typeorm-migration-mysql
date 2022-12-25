"use strict";
exports.__esModule = true;
var typeorm_1 = require("typeorm");
exports["default"] = new typeorm_1.DataSource({
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
            rejectUnauthorized: false
        },
        charset: 'utf8mb4_unicode_ci'
    }
});
