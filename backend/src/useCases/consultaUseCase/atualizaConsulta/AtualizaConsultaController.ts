import { AtualizaConsultaUseCase } from "./AtualizaConsultaUseCase";
import { Request, Response } from "express";

class AtualizaConsultaController{
    async handle(req: Request, res: Response){
        try{
            const { cpf_paciente, data } = req.body;
            const atualizaConsultaUseCase = new AtualizaConsultaUseCase();

            const consulta = await atualizaConsultaUseCase.execute({
                cpf_paciente,
                data
            });
            return res.status(201).json(consulta);
        }catch(err){
            return res.status(400).json({
                Error: true,
                message: err.message
            });
        }
    }
}

export {AtualizaConsultaController}