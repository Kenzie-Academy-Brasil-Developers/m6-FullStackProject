import { Router } from "express";
import middlewares from "../middlewares";
import { loginControllers } from "../controllers";
import { loginPostSchema } from "../schemas/login.schema";

const loginRouter : Router = Router();

loginRouter.post("",
    middlewares.validateBody(loginPostSchema),
    loginControllers.login
)

export default loginRouter