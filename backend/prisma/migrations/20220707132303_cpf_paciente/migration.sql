/*
  Warnings:

  - You are about to drop the column `pacienteId` on the `consulta` table. All the data in the column will be lost.
  - The primary key for the `paciente` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `cpf_paciente` to the `consulta` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cpf` to the `paciente` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "consulta" DROP CONSTRAINT "consulta_pacienteId_fkey";

-- AlterTable
ALTER TABLE "consulta" DROP COLUMN "pacienteId",
ADD COLUMN     "cpf_paciente" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "paciente" DROP CONSTRAINT "paciente_pkey",
ADD COLUMN     "cpf" TEXT NOT NULL,
ADD CONSTRAINT "paciente_pkey" PRIMARY KEY ("cpf");

-- AddForeignKey
ALTER TABLE "consulta" ADD CONSTRAINT "consulta_cpf_paciente_fkey" FOREIGN KEY ("cpf_paciente") REFERENCES "paciente"("cpf") ON DELETE RESTRICT ON UPDATE CASCADE;
