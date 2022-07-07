import { AtualizaConsultaUseCase } from "./AtualizaConsultaUseCase";
import { Request, Response } from "express";

class AtualizaConsultaController{
    async handle(req: Request, res: Response){
        try{
            const { id, data } = req.body;
            const atualizaConsultaUseCase = new AtualizaConsultaUseCase();

            const consulta = await atualizaConsultaUseCase.execute({
                id,
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