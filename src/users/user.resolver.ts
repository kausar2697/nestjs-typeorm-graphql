
import { Query, Resolver, ResolveField ,Parent} from "@nestjs/graphql";
import { Auth, User } from "./user.entity";
import { UsersService } from "./users.service";



@Resolver(of => User)
export class UserResolver {
    constructor(private readonly usersService: UsersService ) {}

  @Query(() => [User])
  async user() {
    return this.usersService.getUser();
  }

  @ResolveField(() => [User])
  async auth(@Parent() user: User){
    return this.usersService.getUser();
  }


//   @Mutation(() => CatType)
//   async createCat(@Args('input') input: CatInput) {
//     return this.catsService.create(input);
//   }
  }
