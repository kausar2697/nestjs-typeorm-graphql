import { Entity, Column, ObjectIdColumn,PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { ObjectType, Field, ID, Float, Int } from '@nestjs/graphql';
import { authenticate } from 'passport';


@ObjectType()
@Entity()
export class User{
  
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: string;


  

  @Field()
  @Column()
  username: string;


  @Field()
  @Column()
  password: string;

  // @ManyToMany(type => Auth, auth =>  auth)
  // @JoinTable()
  // auth: Auth[];
}


@ObjectType()
@Entity()
export class Auth{
  // constructor(public id: string ,public title: string ,public desc: string ,public price: number){};
  @Field()
  @PrimaryGeneratedColumn()
  id: string;
  
  @Field()
  @Column()
  username: string;
  
  @Field()
  @Column()
  userId: string;
  
  @Field()
  @Column()
  logTime: string;
}


