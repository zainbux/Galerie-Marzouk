import React from 'react';
import CategoryHeader from './CategoryHeader';
import AllItems from '@/app/AllItems/AllItems';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

async function getDetails(name:any) {
  
  const product = await prisma.categoryPage.findUnique({
    where: { 
      name: name
    }
  })
    await prisma.$disconnect()
    return product
}


type Props = {
    params: {category:string}
}

export default async function page({ params }: Props)  {

  const name = params.category

  const details = await getDetails(name);

  if (!details) {
    return <div>No product found</div>
  }

  return (
    <div className='mt-10 mx-20'>
      
      <CategoryHeader header={details.title} CategoryImage={details.images} description={details.description}/>
      <AllItems category={details.name}/>

    </div>
  )
}

