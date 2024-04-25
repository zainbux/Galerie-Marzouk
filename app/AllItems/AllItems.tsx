import React from 'react'
import { Products } from '../constants'
import ProductCard from '../components/ProductCard'
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
  category: string
}

export default async function AllItems(props: Props){

  const Products = await getProducts(props.category);

  if (!Products[0]) {
    return <div className='text-3xl text-center '>More Items coming soon!</div>
  }

  return (
    <div className='flex gap-5 flex-wrap justify-center'>

        {Products.map((product, idx) =>(

            <ProductCard key={idx}
            id={product.id}
            name={product.title}
            price={product.price} 
            discount={product.discount} 
            length={product.length} 
            width={product.width} 
            ThumbnailImage={product.ThumbnailImage} 
            soldOut={product.soldOut}
            
            />

        ))}

    </div>
  )
}
