import { from } from "rxjs";
import { Injectable, NotFoundException} from '@nestjs/common'
import { Product} from './product.entity'
import { ProductController } from "./product.controller";
import { MongoRepository , createConnection,getConnection} from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import jwt_decode from "jwt-decode";



@Injectable()
export class ProductService{
    constructor(
        @InjectRepository(Product)
        private readonly userRepository: MongoRepository<Product>,
      ) {}
    // private products: Product[] = []

    // async insertProduct(title: string , desc: string , price: number){
    //     const newProduct = new Product
    //     newProduct.title = title
    //     newProduct.desc = desc
    //     newProduct.price = price


    //     await this.userRepository.save(newProduct)
    // }


    async insertProduct(prod: any ){
        console.log("prod",prod.decoded);
        prod.body.createdBy = prod.decoded.sub
        prod.body.createdAt = new Date()
        console.log(prod.body);
        await this.userRepository.save(prod.body)
        

    }

   

    

     async getProducts(){
     return await this.userRepository.find();
        
        
    }
    

    getSingleProduct(productId: string){
        console.log((productId));
        
        return this.userRepository.findOne(productId);
        // const product = this.searchProduct(productId)[0]
        // return {...product}
    }

    async updateProduct(productId:string, updProd){
        const updateProduct =await this.userRepository.findOne(productId);
      
        updateProduct.updatedBy=updProd.decoded.sub
        updateProduct.updatedAt=new Date()
        if(updProd.body.title){
            updateProduct.title=updProd.body.title
        }
        if(updProd.body.desc){
            updateProduct.desc = updProd.body.desc
        }
        if(updProd.body.price){
            updateProduct.price=updProd.body.price
        }
        
        console.log(updateProduct);
        
        await this.userRepository.save(updateProduct)
        
        
    }

    // updateProduct(productId:string, title:string, desc:string, price:number){
    //     const [product , index] = this.searchProduct(productId)
    //     const updatedProduct = {...product}
    //     if(title){
    //         updatedProduct.title=title
    //     }

    //     if(desc){
    //         updatedProduct.desc=desc
    //     }
    //     if(price){
    //         updatedProduct.price=price
    //     }
    //     this.products[index] = updatedProduct
    // }

    async deleteProduct(prodid:string){
        // const timber = await this.userRepository.findOneAndDelete({ id: "5f8a62567e1b4c0e38d2bcac"})
        await this.userRepository.delete(prodid);
    
    //     // const index = this.searchProduct(id)[1]
    //     // const product = this.products[index]
    //     // this.products.splice(index,1)
    //     // return product
    
    }

    // searchProduct(id:string):[Product,number]{
    //     const productIndex = this.products.findIndex(prod=>prod.id == id)
    //     const product = this.products[productIndex]
    //     if(!product){
    //         throw new NotFoundException('Could not find Product')
    //     }
    //     return [product , productIndex]
    // }

    
    
}