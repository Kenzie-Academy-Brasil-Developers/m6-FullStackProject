import format from "pg-format"
import { client } from "../database"
import { 
    ClientCreate, 
    Client, 
    ClientResult,
    ClientUpdate, 
    ClientReturn,
    ClientsList,
    ClientsListResult
} from "../interfaces"
import { hash } from "bcryptjs"
import { clientReturnSchema, clienstsListSchema } from "../schemas/client.schemas"

const createClient = async (
    payload : ClientCreate
) : Promise<ClientReturn> => {
    
    payload.password = await hash(payload.password, 10)

    const queryString : string = format(`
    INSERT INTO "clients"
    (%I)
    VALUES (%L)
    RETURNING *;`, Object.keys(payload), Object.values(payload))

    const queryResult : ClientResult = await client.query(queryString)

    return clientReturnSchema.parse(queryResult.rows[0])
}

const getClientById = async (
    client_id : string
) : Promise<ClientReturn>=>{
    const queryString : string = format(`
    SELECT * FROM "clients"
    WHERE id = $1;`)

    const queryResult : ClientResult = await client.query(queryString, [client_id])

    return clientReturnSchema.parse(queryResult.rows[0])
}

const getAllClients = async () : Promise<ClientsList> => {
    const queryString : string = format(`
    SELECT * FROM "clients";`)

    const queryResult : ClientsListResult = await client.query(queryString)

    return clienstsListSchema.parse(queryResult.rows)
}

const updateClient = async (
    client_id : string, 
    payload : ClientUpdate
)=>{
    const queryString : string = format(`
    UPDATE "clients"
    SET (%I) = ROW(%L)
    WHERE "id" = $1
    RETURNING *;`, Object.keys(payload), Object.values(payload))	

    const queryResult : ClientResult = await client.query(queryString, [client_id])

    return clientReturnSchema.parse(queryResult.rows[0])
}

const deleteClient = async (
    client_id: string
)=>{

    const queryString : string = format(`
    DELETE FROM "clients"
    WHERE id = $1;`)

    await client.query(queryString, [client_id])

}

export default {
    createClient,
    getClientById,
    updateClient,
    deleteClient,
    getAllClients
}