-- AlterTable
ALTER TABLE "pets" ADD COLUMN     "isCat" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isDog" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "tasks" ADD COLUMN     "done" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "healthCat" (
    "id" SERIAL NOT NULL,
    "quadrupla" BOOLEAN NOT NULL DEFAULT false,
    "quadrupla_date" TEXT NOT NULL,
    "antirabica" BOOLEAN NOT NULL DEFAULT false,
    "antirabica_date" TEXT NOT NULL,
    "petId" INTEGER NOT NULL,

    CONSTRAINT "healthCat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "healthDog" (
    "id" SERIAL NOT NULL,
    "gripe" BOOLEAN NOT NULL DEFAULT false,
    "gripe_date" TEXT NOT NULL,
    "antirabica" BOOLEAN NOT NULL DEFAULT false,
    "antirabica_date" TEXT NOT NULL,
    "V8_V10" BOOLEAN NOT NULL DEFAULT false,
    "V8_V10_date" TEXT NOT NULL,
    "petId" INTEGER NOT NULL,

    CONSTRAINT "healthDog_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "healthCat" ADD CONSTRAINT "healthCat_petId_fkey" FOREIGN KEY ("petId") REFERENCES "pets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "healthDog" ADD CONSTRAINT "healthDog_petId_fkey" FOREIGN KEY ("petId") REFERENCES "pets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
