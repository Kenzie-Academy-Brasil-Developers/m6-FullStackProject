import { z } from "zod";
import { contactSchema, 
    contactCreateSchema, 
    contactUpdate 
} from "../schemas/contact.schema";
import { QueryResult } from "pg";

type Contact = z.infer<typeof contactSchema>;

type ContactCreate = z.infer<typeof contactCreateSchema>;

type ContactResult = QueryResult<Contact>;

type ContactUpdate = z.infer<typeof contactUpdate>;

type ContactList = Contact[];

type ContactListResult = QueryResult<Contact>;

export {
    Contact,
    ContactCreate,
    ContactResult,
    ContactUpdate, 
    ContactList,
    ContactListResult
}