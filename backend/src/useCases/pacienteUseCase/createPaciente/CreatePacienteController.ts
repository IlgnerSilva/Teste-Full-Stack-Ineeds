import { Request, Response } from "express";
import { CreatePacienteUseCase } from "./CreatePacienteUseCase";

class CreatePacienteController{
    async handle(req: Request, res: Response){
        try{
            const { nome, cpf, telefone } = req.body;
            const createPacienteUseCase = new CreatePacienteUseCase();
            
            const paciente = await createPacienteUseCase.execute({
                nome,
                cpf,
                telefone
            });
            return res.status(201).json(paciente);

        }catch(err: any){
            return res.status(400).json({
                Error: true,
                message: err.message
            });
        }
    }
}

export {CreatePacienteController}