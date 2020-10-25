
import { Query, Resolver } from "@nestjs/graphql";
import { Auth, User } from "./user.entity";
import { UsersService } from "./users.service";



@Resolver()
export class UserResolver {
    constructor(private readonly usersService: UsersService ) {}

  @Query()
  async user() {
    return this.usersService.getUser();
  }

//   @Query(() => [Auth])
//   async auth() {
//     return this.usersService.getUser();
//   }


//   @Mutation(() => CatType)
//   async createCat(@Args('input') input: CatInput) {
//     return this.catsService.create(input);
//   }
  }
