import { z } from 'zod'

const contactSchema = z.object({
    id: z.number().positive(),
    name: z.string().max(50),
    email: z.string().email().max(50),
    phone: z.string().max(20),
    picture: z.string().max(200),
    client_id: z.number().positive(),
})

const contactCreateSchema = contactSchema.omit({id: true, client_id: true})

const contactUpdate = contactSchema.partial()

const contactListSchema = contactSchema.array()

export { contactSchema, 
    contactListSchema, 
    contactCreateSchema, 
    contactUpdate 
}