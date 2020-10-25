import { Query, Resolver } from "@nestjs/graphql";
import { ProductService} from "./products.service";
import { Product } from './product.entity';
import { ProductType } from './dto/product.dto';

@Resolver()
export class ProductResolver {
    constructor(private readonly ProductService: ProductService ) {}

  // @Query(() => String)
  // async hello() {
  //   return 'hello';
  //   return this.ProductService.getProducts();
  // }

  // @Query(() => [Product])
  // async product() {
  //   return this.ProductService.getProducts();
  // }

  // @Query(() => [Product])
  // async singleProduct(id) {
  //   return this.ProductService.getSingleProduct(id);
  // }

//   @Mutation(() => CatType)
//   async createCat(@Args('input') input: CatInput) {
//     return this.catsService.create(input);
//   }
  }
