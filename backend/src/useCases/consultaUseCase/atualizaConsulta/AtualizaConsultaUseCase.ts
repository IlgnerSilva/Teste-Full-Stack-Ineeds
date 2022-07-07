import { prismaClient } from "../../../database/prismaCliente";

interface IConsulta {
    cpf_paciente: string;
    data: string
}

function verificaData(dataRecebida: string){
    const partesData: any = dataRecebida.split("/");
    const dataAtual = new Date(partesData[2], partesData[1] - 1, partesData[0]);

    if(dataAtual < new Date()){
        throw new Error('Data inválida');
    }

    return
}

class AtualizaConsultaUseCase{
    async execute({cpf_paciente, data}: IConsulta){
        verificaData(data)
        const pacineteJaExiste = await prismaClient.paciente.findUnique({
            where: {cpf: cpf_paciente}
        });

        if(!pacineteJaExiste){
            throw new Error('Não existe nenhum paciente com esse CPF.');
        }
        const consulta = await prismaClient.consulta.update({
            where: {cpf_paciente: cpf_paciente},
            data: {data: data}
        });
        return consulta;
    }
}

export {AtualizaConsultaUseCase}