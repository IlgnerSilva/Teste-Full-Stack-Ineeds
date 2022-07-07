import { prismaClient } from "../../../database/prismaCliente";

interface IConsultaRequest {
    busca: string;
}

class BuscaConsultaUseCase {
    async execute({ busca }: IConsultaRequest) {
        const consulta = await prismaClient.consulta.findMany({
            where: {
                OR: [
                    { cpf_paciente: { startsWith: busca } },

                    {
                        AND:
                            { data: { startsWith: busca } }
                    }
                ]
            },
            include: {paciente: true}
        });
        return consulta;
    }
}

export {BuscaConsultaUseCase}