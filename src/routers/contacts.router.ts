import { Router } from "express";
import middlewares from "../middlewares";
import { contactControllers } from "../controllers";
import { contactCreateSchema, contactUpdate } from "../schemas/contact.schema";

const contactsRouter : Router = Router();

contactsRouter.post("/client/:id/",
    middlewares.validateBody(contactCreateSchema),
    middlewares.verifyToken,
    contactControllers.create
)

contactsRouter.get("/",
    middlewares.verifyToken,
    middlewares.verifyAdminPermission,
    contactControllers.getAllContacts
)

contactsRouter.get("/:contact_id/",
    middlewares.verifyToken,
    middlewares.verifyClientPermissionOnContact,
    contactControllers.getContactById
)

contactsRouter.get("/client/:id/",
    middlewares.verifyToken,
    contactControllers.getContactByClientId
)

contactsRouter.patch("/:contact_id",
    middlewares.validateBody(contactUpdate),
    middlewares.verifyToken,
    middlewares.verifyClientPermissionOnContact,
    contactControllers.updateContact
)

contactsRouter.delete("/:contact_id",
    middlewares.verifyToken,
    middlewares.verifyClientPermissionOnContact,
    contactControllers.deleteContact
)

export default contactsRouter