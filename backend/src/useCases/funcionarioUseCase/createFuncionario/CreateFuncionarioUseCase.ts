import { hash } from "bcryptjs"
import { prismaClient } from "../../../database/prismaCliente";

interface IFuncionarioRequest{
    matricula: string;
    nome: string;
    hash_senha: string;
}

class CreateFuncionarioUseCase{
    async execute({matricula, nome, hash_senha}: IFuncionarioRequest){
        const funcionarioJaExiste = await prismaClient.funcionario.findUnique({
            where: {matricula}
        });
        
        if(funcionarioJaExiste){
            throw new Error('Funcionario já cadastrado!');
        }
        
        const senhaHash = await hash(hash_senha, 8);
        
        const funcionario = await prismaClient.funcionario.create({
            data: {
                matricula,
                nome,
                hash_senha: senhaHash
            }
        });
        return funcionario;
    }
}

export {CreateFuncionarioUseCase}