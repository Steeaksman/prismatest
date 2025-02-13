-- CreateTable
CREATE TABLE "Casinos" (
    "id" SERIAL NOT NULL,
    "city" TEXT NOT NULL,
    "cstate" TEXT NOT NULL,
    "photo" TEXT NOT NULL,
    "casinotype" TEXT NOT NULL,
    "crapstables" TEXT NOT NULL,
    "website" TEXT NOT NULL,
    "tablereports" TEXT NOT NULL,
    "tripreports" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Casinos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tableReports" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "title" TEXT NOT NULL,
    "casinoName" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "casinoLocation" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "published" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "tableReports_pkey" PRIMARY KEY ("id")
);
