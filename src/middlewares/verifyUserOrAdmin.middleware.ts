import { NextFunction, Request, Response } from "express";
import { AppError } from "../error";
import format from "pg-format"
import { client } from "../database"
import { QueryResult } from "pg"

const verifyUserPermission = (
    request : Request,
    response : Response,
    next : NextFunction
) : void =>{
    const { id } = request.params
    const { sub, admin } = response.locals.decoded

    if(admin) return next()


    if(sub != id && !admin){
        throw new AppError("Insufficient permission", 403)
    }

    return next()
}

const verifyAdminPermission = (
    request : Request,
    response : Response,
    next : NextFunction
) : void =>{
    
    const { admin } = response.locals.decoded

    if(!admin){
        throw new AppError("Insufficient permission", 403)
    }

    return next()
}

const verifyClientPermissionOnContact = async (
    request : Request,
    response : Response,
    next : NextFunction
) : Promise <void> =>{
    const { contact_id } = request.params
    const { sub, admin } = response.locals.decoded

    if(admin) return next()
    
    const queryString : string = format(`
    SELECT * FROM "contacts"
    WHERE id = $1 AND client_id = $2;
    `)

    const queryResult : QueryResult = await client.query(queryString, [contact_id, sub])

    if(!queryResult.rowCount){
        throw new AppError("Insufficient permission", 403)
    }
    return next()
}

export {
    verifyUserPermission,
    verifyAdminPermission,
    verifyClientPermissionOnContact
}