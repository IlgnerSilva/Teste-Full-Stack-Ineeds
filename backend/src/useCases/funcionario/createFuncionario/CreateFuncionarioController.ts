import { Request, Response } from "express";
import { CreateFuncionarioUseCase } from "./CreateFuncionarioUseCase";

class CreateFuncionarioController{
    async handle(req: Request, res: Response){
        try{
            const { matricula, nome, hash_senha } = req.body;
            const createFuncionarioUseCase = new CreateFuncionarioUseCase();
            
            const funcionario = await createFuncionarioUseCase.execute({
                matricula,
                nome,
                hash_senha
            });
            return res.status(201).json(funcionario);

        }catch(err: any){
            return res.status(400).json({
                Error: true,
                message: err.message
            });
        }
    }
}

export {CreateFuncionarioController}