// api.js
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function getReviews() {
  const reviews = await prisma.review.findMany()
  await prisma.$disconnect()
  return reviews
}

export async function getDetails(name:any) {
  
  const product = await prisma.categoryPage.findUnique({
    where: { 
      name: name
    }
  })
    await prisma.$disconnect()
    return product
}

export async function getProducts(category:any) {
  const products = await prisma.products.findMany({
    where: {
      category: category
    }
  })
    await prisma.$disconnect()
    return products
    
}

export async function getProduct(id:any) {
  const product = await prisma.products.findUnique({
    where: {
      id: Number(id)
    }
  })
    await prisma.$disconnect()
    return product
}

export async function getCategoryProducts(category:any) {
  const products = await prisma.products.findMany({
    where: {
      category: category
    }
  })
    await prisma.$disconnect()
    return products
    
}