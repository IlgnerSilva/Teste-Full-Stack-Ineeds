import { prismaClient } from "../../../database/prismaCliente";

interface IConsulta {
    id: string; 
    data: string;
}

function verificaData(dataRecebida: string){
    const partesData: any = dataRecebida.split("-");
    const dataAtual = new Date(partesData[2], partesData[1] - 1, partesData[0]);
    if(dataAtual < new Date()){
        throw new Error('Data inválida');
    }
    return
}

class AtualizaConsultaUseCase{
    async execute({id, data}: IConsulta){
        verificaData(data)
        const consultaJaExiste = await prismaClient.paciente.findMany({
            where: {id: id}
        });

        if(!consultaJaExiste){
            throw new Error('Não existe nenhum consulta com esse ID.');
        }
        const consulta = await prismaClient.consulta.update({
            where: {id: id},
            data: {data: data}
        });
        return consulta;
    }
}

export {AtualizaConsultaUseCase}