import { z } from 'zod'

const clientSchema = z.object({
    id: z.number().positive(),
    name: z.string().max(50),
    email: z.string().email().max(50),
    phone: z.string().max(20),
    password: z.string().max(120),
    picture: z.string().max(200),
    admin: z.boolean().default(false),
    clientSince: z.date().default(new Date()),
})

const clientCreateSchema = clientSchema.omit({id: true})

const clienstsListSchema = clientSchema.array()

const clientReturnSchema = clientSchema.omit({password: true})

const clientUpdate = clientSchema.partial()

export { clientSchema, 
    clientCreateSchema, 
    clientReturnSchema,
    clienstsListSchema, 
    clientUpdate }