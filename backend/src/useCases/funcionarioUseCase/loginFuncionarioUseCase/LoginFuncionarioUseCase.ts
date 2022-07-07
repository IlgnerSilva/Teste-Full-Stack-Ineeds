import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { prismaClient } from "../../../database/prismaCliente";

interface IRequest{
    matricula: string;
    hash_senha: string;
}

class LoginFuncionarioUseCase{
    async execute({ matricula, hash_senha }: IRequest){
        const funcionarioJaExiste = await prismaClient.funcionario.findUnique({
            where: {matricula}
        });

        if(!funcionarioJaExiste){
            throw new Error('Matricula ou senha Incorreta!');
        }

        const verificaSenha = await compare(hash_senha, funcionarioJaExiste.hash_senha);
        if(!verificaSenha){
            throw new Error('Matricula ou senha Incorreta!')
        }

        const payload = {
            id: funcionarioJaExiste.id
        }

        const token = sign(payload, process.env.KEY_TOKEN, {
            subject: funcionarioJaExiste.matricula,
            expiresIn: "1d"
        });

        return {
            matricula: funcionarioJaExiste.matricula,
            nome: funcionarioJaExiste.nome,
            token: token
        }
    }
}

export {LoginFuncionarioUseCase}