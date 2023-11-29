import { sign } from "jsonwebtoken";
import { LoginPost, LoginReturn, Client, ClientResult } from "../interfaces";
import format from "pg-format";
import { client } from "../database";
import { AppError } from "../error";
import { compare } from "bcryptjs";	

const login = async (
    payload: LoginPost
): Promise<LoginReturn> => {

    const queryString : string = format(`
    SELECT * FROM "clients"
    WHERE email = $1;`)

    const queryResult : ClientResult = await client.query(queryString, [payload.email])

    if(queryResult.rowCount === 0) {
        throw new AppError("Wrong email or password", 401)
    }

    const user : Client = queryResult.rows[0]
    const passwordMatch = await compare(payload.password, user.password)

    if(!passwordMatch) {
        throw new AppError("Wrong email or password", 401)
    }

    const token = sign(
        {username: user.name, admin: user.admin, id: user.id},
        process.env.SECRET_KEY!,
        {subject: user.id.toString(), expiresIn: process.env.EXPIRES_IN!}
    )

    return { token }
}

export default { login }