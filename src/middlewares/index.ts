import { handleError } from "./handleError.middleware";
import { validateBody } from "./validateBody.middleware";
import { verifyEmail } from "./verifyClientEmail.middleware";	
import { verifyToken } from "./verifyToken.middleware";
import { verifyUserPermission, verifyAdminPermission, verifyClientPermissionOnContact } from "./verifyUserOrAdmin.middleware";

export default {
    handleError,
    validateBody, 
    verifyEmail,
    verifyToken,
    verifyUserPermission,
    verifyAdminPermission,
    verifyClientPermissionOnContact
}