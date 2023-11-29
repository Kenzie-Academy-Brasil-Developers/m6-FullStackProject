import { z } from 'zod'
import { loginPostSchema } from '../schemas/login.schema'

type LoginPost = z.infer<typeof loginPostSchema>

type LoginReturn = { token: string }

export { LoginPost, LoginReturn }