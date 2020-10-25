
import { Module,NestModule,MiddlewareConsumer } from '@nestjs/common'
import { ProductController } from "./product.controller";
import { ProductService } from "./products.service";
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product} from './product.entity';
import {LoggerMiddleware} from './logger.middleware'
import { ProductResolver } from './product.resolver';




@Module({
    imports: [TypeOrmModule.forFeature([Product])],
    controllers: [ProductController],
    providers: [ProductService,ProductResolver]
})
export class ProductsModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
          .apply(LoggerMiddleware)
          .forRoutes('products');
      }
}