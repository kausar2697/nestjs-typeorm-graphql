import { Injectable } from '@nestjs/common';
import { MongoRepository , createConnection,getConnection} from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User,Auth} from './user.entity';

@Injectable()
export class UsersService {
  // private readonly users: User[];

  constructor(
    @InjectRepository(User)
        private readonly userRepository: MongoRepository<User>,
  ) {
    // this.users = [
    //   {
    //     userId: 1,
    //     username: 'john',
    //     password: 'changeme',
    //   },
    //   {
    //     userId: 2,
    //     username: 'chris',
    //     password: 'secret',
    //   },
    //   {
    //     userId: 3,
    //     username: 'maria',
    //     password: 'guess',
    //   },
    // ];
  }


  async getUser(){
    return await this.userRepository;
       
       
   }

   async getAuth(){
    return await this.userRepository.find();
       
       
   }

  async findOne(username: string){
    const result = await this.userRepository.find({username: username});
    // console.log(result);
    return result;
    
  }
}