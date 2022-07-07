import { Router } from "express";
import { CreateFuncionarioController } from "./useCases/funcionario/createFuncionario/CreateFuncionarioController";

const router = Router();

const createFuncionarioController = new CreateFuncionarioController();
router.post('/auth/register/funcionario', createFuncionarioController.handle)

export { router }