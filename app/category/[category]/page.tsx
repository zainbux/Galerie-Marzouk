import React from 'react';
import CategoryHeader from './CategoryHeader';
import AllItems from '@/app/AllItems/AllItems';
import { PrismaClient } from '@prisma/client';
import { getDetails } from '@/lib/api';

const prisma = new PrismaClient()


type Props = {
    params: {category:string}
}

export default async function home({ params }: Props)  {

  const name = params.category




  return (
    <div className='mt-10 mx-20'>
      
      h1

    </div>
  )
}

