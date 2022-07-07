import { Request, Response } from "express";
import { CreateConsultaUseCase } from "./CreateConsultaUseCase";

class CreateConsultaController{
    async handle(req: Request, res: Response){
        try{
            const { cpf_paciente, data } = req.body;
            const createConsultaUseCase = new CreateConsultaUseCase();

            const consulta = await createConsultaUseCase.execute({
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

export { CreateConsultaController }