/*
  Warnings:

  - You are about to drop the `Category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `VideoCategory` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "VideoCategory" DROP CONSTRAINT "VideoCategory_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "VideoCategory" DROP CONSTRAINT "VideoCategory_videoId_fkey";

-- DropTable
DROP TABLE "Category";

-- DropTable
DROP TABLE "VideoCategory";
