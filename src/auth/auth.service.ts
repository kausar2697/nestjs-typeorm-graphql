import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { MongoRepository} from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import {Auth} from '../users/user.entity'
import jwt_decode from "jwt-decode";


@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    @InjectRepository(Auth)
    private readonly authRepository: MongoRepository<Auth>
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    console.log(user[0].password);
    
    if (user && user[0].password == pass) {
      const { ...result } = user;
      
        const logedUser = new Auth
      logedUser.username = result[0].username
      logedUser.userId = result[0].id
      logedUser.logTime = new Date().toString()
    
       await this.authRepository.save(logedUser)
      
      return result;
    }
    return null;
  }

  

  async login(user: any) {
  
    const payobj = {} as any
    if( user ){
        if(user[0].id!="")
          payobj.sub = user[0].id;
        if(user[0].username!="")
          payobj.username = user[0].username;
    }
    return {
      access_token: this.jwtService.sign(payobj),
      
    };
    
  }
  
}