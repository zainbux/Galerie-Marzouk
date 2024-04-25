import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import ProductCard from "../ProductCard"
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function getProducts(category:any) {
  const products = await prisma.products.findMany({
    where: {
      category: category
    }
  })
    await prisma.$disconnect()
    return products
    
}

type Props = {
  category?:string,
}

export default async function CategoryCarousel ({ category }:Props) {

  const Products = await getProducts(category);
  

  return (
    <div className="flex justify-center my-10 mx-20 md:mx-36">              
    
      <Carousel className="w-full md:w-[80vw]">
        <CarouselContent className="-ml-1">

          {Products.map((product, idx) => (

            <CarouselItem key={idx} className="px-5 basis-full md:basis-auto  ">

              <ProductCard
                id={product.id}
                name={product.title}
                price={product.price} 
                discount={product.discount} 
                length={product.length} 
                width={product.width} 
                ThumbnailImage={product.ThumbnailImage} 
                soldOut={product.soldOut}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

    </div>
  )
}

