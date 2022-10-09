/*
  Warnings:

  - Added the required column `verm1_date` to the `healthCat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `verm2_date` to the `healthCat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `verm1_date` to the `healthDog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `verm2_date` to the `healthDog` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "healthCat" ADD COLUMN     "verm1_date" TEXT NOT NULL,
ADD COLUMN     "verm2_date" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "healthDog" ADD COLUMN     "verm1_date" TEXT NOT NULL,
ADD COLUMN     "verm2_date" TEXT NOT NULL;
