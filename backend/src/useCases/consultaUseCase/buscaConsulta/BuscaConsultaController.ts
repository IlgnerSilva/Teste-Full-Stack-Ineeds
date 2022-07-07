import { Request, Response } from "express";
import { BuscaConsultaUseCase } from "./BuscaConsultaUseCase";

class BuscaConsultaConstroller{
    async handle(req: Request, res: Response){
        try{
            const { busca } = req.params;
            const buscaConsultaUseCase = new BuscaConsultaUseCase();
            const consulta = await buscaConsultaUseCase.execute({busca});
            return res.status(201).json(consulta);
        }catch(err){
            return res.status(400).json({
                Error: true,
                message: err.message
            });
        }
    }
}

export {BuscaConsultaConstroller}