/*
  Warnings:

  - A unique constraint covering the columns `[petId]` on the table `healthCat` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[petId]` on the table `healthDog` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "healthCat" ADD COLUMN     "verm1" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "verm2" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "healthDog" ADD COLUMN     "verm1" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "verm2" BOOLEAN NOT NULL DEFAULT false;

-- CreateIndex
CREATE UNIQUE INDEX "healthCat_petId_key" ON "healthCat"("petId");

-- CreateIndex
CREATE UNIQUE INDEX "healthDog_petId_key" ON "healthDog"("petId");
