import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.development.env', isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      database: 'nest-sql',
      port: Number(process.env.MYSQL_DATABASE_PORT),
      username: 'develop',
      password: 'password',
      logging: true,
      logger: 'advanced-console',
      synchronize: false,
      dropSchema: false,
      migrationsRun: false,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      migrationsTableName: 'migrations',
      migrations: [__dirname + '../database/migrations/*{.ts,.js}'],
      extra: {
        ssl: {
          rejectUnauthorized: false,
        },
        charset: 'utf8mb4_unicode_ci',
      },
      subscribers: [],
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
