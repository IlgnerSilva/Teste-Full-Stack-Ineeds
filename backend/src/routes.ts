import { Router } from "express";
import { CreateFuncionarioController } from "./useCases/funcionarioUseCase/createFuncionario/CreateFuncionarioController";
import { CreatePacienteController } from "./useCases/pacienteUseCase/createPaciente/CreatePacienteController";

const router = Router();

const createFuncionarioController = new CreateFuncionarioController();
router.post('/auth/register/funcionario', createFuncionarioController.handle);

const createPacienteController = new CreatePacienteController();
router.post('/auh/register/paciente', createPacienteController.handle)



export { router }