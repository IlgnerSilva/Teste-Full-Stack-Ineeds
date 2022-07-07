import { prismaClient } from "../../../database/prismaCliente";

class DeleteConsultaUseCase{
    async execute(id: string){
        const pacineteJaExiste = await prismaClient.consulta.findUnique({
            where: {id: id}
        });

        if(!pacineteJaExiste){
            throw new Error('Não existe nenhum consulta com esse ID.');
        }

        await prismaClient.consulta.delete({
            where: {id}
        });
        return
    }
}

export { DeleteConsultaUseCase }