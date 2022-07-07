
import { Request, Response } from "express";
import { LoginFuncionarioUseCase } from "./LoginFuncionarioUseCase";

class LoginFuncionarioController{
    async handle(req: Request, res: Response){
        const { matricula, hash_senha } = req.body;
        console.log(req.body)
        try{
            const loginFuncionarioUseCase = new LoginFuncionarioUseCase();
            const tokenFuncionario = await loginFuncionarioUseCase.execute({
                matricula,
                hash_senha
            });
            return res.status(200).json(tokenFuncionario);
        }catch(err){
            return res.status(401).json(err.message);
        }
    }
}

export { LoginFuncionarioController }