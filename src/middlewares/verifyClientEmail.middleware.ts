import { NextFunction, Request, Response } from "express";
import format from "pg-format";
import { client } from "../database";
import { AppError } from "../error";


export const verifyEmail = async (
    request: Request,
    response: Response,
    next: NextFunction
): Promise<void> => {

    const queryString: string = format(`
    SELECT * FROM "clients"
    WHERE email = $1;
    `)
    
    const queryResult = await client.query(queryString, [request.body.email])
    if (queryResult.rowCount) {
        throw new AppError("Email already registered", 409)
    }
    console.log(queryResult.rows[0])

    return next()
}