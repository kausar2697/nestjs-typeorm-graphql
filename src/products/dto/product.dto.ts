import { ObjectType, Field, Int, ID } from 'type-graphql';

@ObjectType()
export class ProductType {
    @Field(() => ID)
    id: string;
    @Field()
    title: string;
    @Field()
    desc: string;
    @Field()
    price: number;
    @Field()
    updatedBy: string;
    @Field()
    updatedAt: Date;
    @Field()
    createdBy: string;
    @Field()
    createdAt: Date;
}