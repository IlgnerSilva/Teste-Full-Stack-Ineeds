
import express, { Request, Response, NextFunction } from "express";
import { router } from "./routes";
import 'dotenv/config';
import cors from 'cors';


const app = express();

app.use(cors())

app.use(express.json());
app.use(router);

export { app }