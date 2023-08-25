import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { databaseConfig } from './config/database.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresDBService } from './config/databaseConfig.service';

@Module({
  //https://dev.to/raphael_haecker/nestjs-and-typeorm-database-configuration-15ob
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forRootAsync({
      useClass: PostgresDBService,
      inject: [PostgresDBService]
    })
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
