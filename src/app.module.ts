import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [ProductsModule,GraphQLModule.forRoot({
    typePaths: ['**/*.graphql'],
    include: [ProductsModule,AuthModule, UsersModule]
  }),TypeOrmModule.forRoot({
    type: 'mongodb',
    host: 'localhost',
    port: 27017,
    database: 'test-db',
    entities: [join(__dirname, '**/**.entity{.ts,.js}')],
    synchronize: true}),
    
    TypeOrmModule.forRoot({

    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '12345',
    database: 'test-db',
    entities: [join(__dirname, '**/**.entity{.ts,.js}')],
    synchronize: true}), AuthModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
