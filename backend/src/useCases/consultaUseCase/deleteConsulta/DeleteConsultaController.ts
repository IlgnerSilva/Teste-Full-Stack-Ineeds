
import { Request, Response } from "express";
import { DeleteConsultaUseCase } from "./DeleteConsultaUseCase";

class DeleteConsultaConstroller{
    async handle(req: Request, res: Response){
        try{
            const { id } = req.params;
            const deleteConsultaUseCase = new DeleteConsultaUseCase();
            await deleteConsultaUseCase.execute(id);
            return res.status(201).json({message: 'Consulta cancelada.'});
        }catch(err){
            return res.status(400).json({
                Error: true,
                message: err.message
            });
        }
        
    }
}

export {DeleteConsultaConstroller}