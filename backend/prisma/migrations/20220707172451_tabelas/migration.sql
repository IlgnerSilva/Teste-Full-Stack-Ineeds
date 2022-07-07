-- CreateTable
CREATE TABLE "funcionario" (
    "id" TEXT NOT NULL,
    "matricula" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "hash_senha" TEXT NOT NULL,

    CONSTRAINT "funcionario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "paciente" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,

    CONSTRAINT "paciente_pkey" PRIMARY KEY ("cpf")
);

-- CreateTable
CREATE TABLE "consulta" (
    "id" TEXT NOT NULL,
    "cpf_paciente" TEXT NOT NULL,
    "data" TEXT NOT NULL,

    CONSTRAINT "consulta_pkey" PRIMARY KEY ("cpf_paciente")
);

-- CreateIndex
CREATE UNIQUE INDEX "funcionario_matricula_key" ON "funcionario"("matricula");

-- AddForeignKey
ALTER TABLE "consulta" ADD CONSTRAINT "consulta_cpf_paciente_fkey" FOREIGN KEY ("cpf_paciente") REFERENCES "paciente"("cpf") ON DELETE RESTRICT ON UPDATE CASCADE;
