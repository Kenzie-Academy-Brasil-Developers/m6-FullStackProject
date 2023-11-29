import format from "pg-format"
import { client } from "../database"
import { ContactCreate,
    Contact,
    ContactUpdate,
    ContactResult,
    ContactList,
    ContactListResult
 } from "../interfaces"
import { contactCreateSchema, 
    contactUpdate, 
    contactSchema, 
    contactListSchema 
} from "../schemas/contact.schema"

const createContact = async (
    payload: ContactCreate
) : Promise<Contact> => {
    
    const queryString : string = format(
    `INSERT INTO "contacts"
    (%I)
    VALUES (%L)
    RETURNING *;`
    , Object.keys(payload), 
    Object.values(payload))

    const queryResult : ContactResult = await client.query(queryString)

    return contactSchema.parse(queryResult.rows[0])
}

const updateContact = async (
    contact_id: string,
    payload: ContactUpdate
) : Promise<Contact> => {

    const queryString : string = format(
    `UPDATE "contacts"
    SET (%I) = ROW(%L)
    WHERE "id" = $1
    RETURNING *;`
    , Object.keys(payload), 
    Object.values(payload))

    const queryResult : ContactResult = await client.query(queryString, [contact_id])

    return contactSchema.parse(queryResult.rows[0])
}

const getAllContacts = async () : Promise<ContactList> => {

    const queryString : string = format(
    `SELECT * FROM "contacts";`)

    const queryResult : ContactListResult = await client.query(queryString)

    return contactListSchema.parse(queryResult.rows)
}

const getContactByClientId = async (
    client_id: string
) : Promise<ContactList> => {

    const queryString : string = format(
    `SELECT * FROM "contacts"
    WHERE "client_id" = $1;`)

    const queryResult : ContactListResult = await client.query(queryString, [client_id])

    return contactListSchema.parse(queryResult.rows)
}

const getContactById = async (
    contact_id: string
) : Promise<Contact> => {

    const queryString : string = format(
    `SELECT * FROM "contacts"
    WHERE "id" = $1;`)

    const queryResult : ContactResult = await client.query(queryString, [contact_id])

    return contactSchema.parse(queryResult.rows[0])
}

const deleteContact = async (
    contact_id: string
): Promise<void> => {

    const queryString : string = format(
    `DELETE FROM "contacts"
    WHERE "id" = $1;`)

    await client.query(queryString, [contact_id])
}

export default {
    createContact,
    updateContact,
    getAllContacts,
    getContactByClientId,
    getContactById,
    deleteContact
}