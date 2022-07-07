import { Router } from "express";
import { CreateFuncionarioController } from "./useCases/funcionarioUseCase/createFuncionario/CreateFuncionarioController";
import { LoginFuncionarioController } from "./useCases/funcionarioUseCase/loginFuncionarioUseCase/LoginFuncionarioController";
import { CreatePacienteController } from "./useCases/pacienteUseCase/createPaciente/CreatePacienteController";
import { middlewareLogin } from "./middlewares/middlewareLogin";
import { CreateConsultaController } from "./useCases/consultaUseCase/createConsulta/CreateConsultaController";
import { AtualizaConsultaController } from "./useCases/consultaUseCase/atualizaConsulta/AtualizaConsultaController";

const router = Router();


const loginFuncionarioController = new LoginFuncionarioController();
const createFuncionarioController = new CreateFuncionarioController();
router.post('/auth/register/funcionario', createFuncionarioController.handle);
router.post('/auth/login/funcionario', loginFuncionarioController.handle);


const createPacienteController = new CreatePacienteController();
router.post('/auh/register/paciente', middlewareLogin, createPacienteController.handle);

const createConsultaConstroller = new CreateConsultaController();
const atualizaConsultaController = new AtualizaConsultaController();
router.post('/auth/register/consulta', middlewareLogin, createConsultaConstroller.handle);
router.put('/auth/update/consulta', middlewareLogin, atualizaConsultaController.handle);







export { router }