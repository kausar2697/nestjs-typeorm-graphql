import { Entity, Column,PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field, ID, Float, Int } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class Product{
  // constructor(public id: string ,public title: string ,public desc: string ,public price: number){};
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: string;

  @Field()
  @Column()
  title: string;

  @Field()
  @Column()
  desc: string;

  @Field()
  @Column()
  price: number;


  @Field()
  @Column()
  updatedBy: string;

  @Field()
  @Column()
  updatedAt: Date;

  @Field()
  @Column()
  createdBy: string;

  @Field()
  @Column()
  createdAt: Date;
}




// @Entity({ database: "order-db" })
// export class Order{
//   // constructor(public id: string ,public title: string ,public desc: string ,public price: number){};
//   @Field(() => ID)
//   @PrimaryGeneratedColumn()
//   id: string;
  
//   @Field()
//   @Column()
//   title: string;
// }

