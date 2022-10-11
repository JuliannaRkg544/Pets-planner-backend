-- CreateEnum
CREATE TYPE "GenreType" AS ENUM ('macho', 'femea', 'Macho', 'Femea');

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pets" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "birthdate" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "breed" TEXT NOT NULL,
    "isCat" BOOLEAN NOT NULL DEFAULT false,
    "isDog" BOOLEAN NOT NULL DEFAULT false,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "pets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tasks" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "done" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "tasks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "healthCat" (
    "id" SERIAL NOT NULL,
    "quadrupla" BOOLEAN NOT NULL DEFAULT false,
    "quadrupla_date" TEXT,
    "antirabica" BOOLEAN NOT NULL DEFAULT false,
    "antirabica_date" TEXT,
    "verm1" BOOLEAN NOT NULL DEFAULT false,
    "verm1_date" TEXT,
    "verm2" BOOLEAN NOT NULL DEFAULT false,
    "verm2_date" TEXT,
    "petId" INTEGER NOT NULL,

    CONSTRAINT "healthCat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "healthDog" (
    "id" SERIAL NOT NULL,
    "gripe" BOOLEAN NOT NULL DEFAULT false,
    "gripe_date" TEXT,
    "antirabica" BOOLEAN NOT NULL DEFAULT false,
    "antirabica_date" TEXT,
    "V8_V10" BOOLEAN NOT NULL DEFAULT false,
    "V8_V10_date" TEXT,
    "petId" INTEGER NOT NULL,
    "verm1" BOOLEAN NOT NULL DEFAULT false,
    "verm1_date" TEXT,
    "verm2" BOOLEAN NOT NULL DEFAULT false,
    "verm2_date" TEXT,

    CONSTRAINT "healthDog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "healthCat_petId_key" ON "healthCat"("petId");

-- CreateIndex
CREATE UNIQUE INDEX "healthDog_petId_key" ON "healthDog"("petId");

-- AddForeignKey
ALTER TABLE "pets" ADD CONSTRAINT "pets_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tasks" ADD CONSTRAINT "tasks_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "healthCat" ADD CONSTRAINT "healthCat_petId_fkey" FOREIGN KEY ("petId") REFERENCES "pets"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "healthDog" ADD CONSTRAINT "healthDog_petId_fkey" FOREIGN KEY ("petId") REFERENCES "pets"("id") ON DELETE CASCADE ON UPDATE CASCADE;
