// api.js
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function getReviews() {
  const reviews = await prisma.review.findMany()
  await prisma.$disconnect()
  return reviews
}

