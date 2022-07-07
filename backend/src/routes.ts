import { Router } from "express";
import { CreateFuncionarioController } from "./useCases/funcionarioUseCase/createFuncionario/CreateFuncionarioController";
import { LoginFuncionarioController } from "./useCases/funcionarioUseCase/loginFuncionarioUseCase/LoginFuncionarioController";
import { CreatePacienteController } from "./useCases/pacienteUseCase/createPaciente/CreatePacienteController";
import { middlewareLogin } from "./middlewares/middlewareLogin";
import { CreateConsultaController } from "./useCases/consultaUseCase/createConsulta/CreateConsultaController";

const router = Router();


const loginFuncionarioController = new LoginFuncionarioController();
const createFuncionarioController = new CreateFuncionarioController();
router.post('/auth/register/funcionario', createFuncionarioController.handle);
router.post('/auth/login/funcionario', loginFuncionarioController.handle);


const createPacienteController = new CreatePacienteController();
router.post('/auh/register/paciente', middlewareLogin, createPacienteController.handle);

const createConsultaConstroller = new CreateConsultaController();
router.post('/auth/register/consulta', middlewareLogin, createConsultaConstroller.handle)







export { router }