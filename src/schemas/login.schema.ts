import { clientSchema } from "./client.schemas";

export const loginPostSchema = clientSchema.pick({email: true, password: true})

