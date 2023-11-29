import { NextFunction, Request, Response } from "express";
import { LoginReturn } from "../interfaces";
import { loginServices } from "../services";

const login = async (
    request: Request,
    response: Response,
    next: NextFunction
) : Promise<Response> => {
    
    const token : LoginReturn = await loginServices.login(request.body);

    return response.status(200).json(token);
}

export default { 
    login
}