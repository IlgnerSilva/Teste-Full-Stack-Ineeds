
import { verify } from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";

export function middlewareLogin(req: Request, res: Response, next: NextFunction){
    const authToken = req.headers.authorization;
    if(!authToken){
        return res.status(401).json({
            message: "Token faltando ou inválido."
        });
    }

    const [, token] = authToken.split(" ");
    try{
        verify(token, process.env.KEY_TOKEN);
        next();
    }catch(err){
        return res.status(401).json({
            message: "Token inválido."
        })
    }
}