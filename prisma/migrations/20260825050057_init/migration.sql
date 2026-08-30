/*
  Warnings:

  - You are about to drop the column `name` on the `specialties` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "specialties_name_key";

-- AlterTable
ALTER TABLE "specialties" DROP COLUMN "name";
