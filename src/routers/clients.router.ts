import { Router } from "express";
import middlewares from "../middlewares";
import { clientControllers } from "../controllers";
import { clientCreateSchema, clientUpdate } from "../schemas/client.schemas";

const clientsRouter : Router = Router();

clientsRouter.post("/",
    middlewares.validateBody(clientCreateSchema),
    middlewares.verifyEmail,
    clientControllers.create
)
clientsRouter.get("/",
    middlewares.verifyToken,
    middlewares.verifyAdminPermission,
    clientControllers.getAllClients
)

clientsRouter.get("/:id",
    middlewares.verifyToken,
    middlewares.verifyUserPermission,
    clientControllers.getClientById
)

clientsRouter.patch("/:id",
    middlewares.validateBody(clientUpdate),
    middlewares.verifyToken,
    middlewares.verifyUserPermission,
    clientControllers.updateClient
)

clientsRouter.delete("/:id",
    middlewares.verifyToken,
    middlewares.verifyUserPermission,
    clientControllers.deleteClient
)



export default clientsRouter