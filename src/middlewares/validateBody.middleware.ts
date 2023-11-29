import { NextFunction, Request, Response } from "express";
import { z } from "zod";

export const validateBody = (schema: z.ZodTypeAny) => (
    request: Request,
    response: Response,
    next: NextFunction
): void => {
    const validateBody = schema.parse(request.body)

    request.body = validateBody

    return next()
}

