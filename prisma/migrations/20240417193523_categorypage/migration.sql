/*
  Warnings:

  - You are about to drop the `Addresses` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Addresses";

-- CreateTable
CREATE TABLE "CategoryPage" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "images" TEXT NOT NULL,

    CONSTRAINT "CategoryPage_pkey" PRIMARY KEY ("id")
);
