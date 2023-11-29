import { z } from "zod"
import { clientSchema, 
    clientCreateSchema, 
    clientReturnSchema, 
    clientUpdate 
} from "../schemas/client.schemas"
import { QueryResult } from "pg";


type Client = z.infer<typeof clientSchema>

type ClientCreate = z.infer<typeof clientCreateSchema>

type ClientReturn = z.infer<typeof clientReturnSchema>

type ClientResult = QueryResult<Client>

type ClientUpdate = z.infer<typeof clientUpdate>

type ClientsList = Client[]

type ClientsListResult = QueryResult<ClientsList>

export {
    Client,
    ClientCreate,
    ClientReturn,
    ClientResult,
    ClientUpdate,
    ClientsList,
    ClientsListResult
}