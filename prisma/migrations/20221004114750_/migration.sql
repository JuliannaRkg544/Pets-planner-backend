-- CreateEnum
CREATE TYPE "GenreType" AS ENUM ('macho', 'femea');

-- CreateTable
CREATE TABLE "pets" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "birthdate" TIMESTAMP(3) NOT NULL,
    "genre" "GenreType" NOT NULL,
    "breed" TEXT NOT NULL,

    CONSTRAINT "pets_pkey" PRIMARY KEY ("id")
);
