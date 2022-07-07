import { prismaClient } from "../../../database/prismaCliente";

interface IPacienteRequest{
    nome: string;
    cpf: string;
    telefone: string;
}

class CreatePacienteUseCase{
    async execute({nome, cpf, telefone}: IPacienteRequest){
        const pacienteJaExiste = await prismaClient.paciente.findUnique({
            where: {cpf}
        }) 
        
        if(pacienteJaExiste){
            throw new Error('Paciente já cadastrado!');
        }
        
        const pacinete = await prismaClient.paciente.create({
            data: {
                nome,
                cpf,
                telefone
            }
        });
        return pacinete;
    }
}

export {CreatePacienteUseCase}