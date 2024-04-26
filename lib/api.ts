// api.js
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function getReviews() {
  const reviews = await prisma.review.findMany()
  await prisma.$disconnect()
  return reviews
}

async function getDetails(name:any) {
  
  const product = await prisma.categoryPage.findUnique({
    where: { 
      name: name
    }
  })
    await prisma.$disconnect()
    return product
}