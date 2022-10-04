/*
  Warnings:

  - Changed the type of `genre` on the `pets` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "pets" DROP COLUMN "genre",
ADD COLUMN     "genre" TEXT NOT NULL;
