import { Request, Response } from "express";
import { contactsServices } from "../services";
import { Contact, ContactList } from "../interfaces";

const create = async (
    request: Request,
    response: Response
) : Promise<Response> => {

    const payload = {...request.body, client_id: request.params.id};

    const newContact : Contact = await contactsServices.createContact(payload);

    return response.status(201).json(newContact);
}

const getAllContacts = async (
    request: Request,
    response: Response
) : Promise<Response> => {

    const contacts : ContactList = await contactsServices.getAllContacts();

    return response.status(200).json(contacts);
}

const getContactByClientId = async (
    request: Request,
    response: Response
) : Promise<Response> => {
    
    const contacts : ContactList = await contactsServices.getContactByClientId(request.params.id);

    return response.status(200).json(contacts);
}

const getContactById = async (
    request: Request,
    response: Response
) : Promise<Response> => {

    const contact : Contact = await contactsServices.getContactById(request.params.contact_id);

    return response.status(200).json(contact);
}

const updateContact = async (
    request: Request,
    response: Response
) : Promise<Response> => {

    const contact : Contact = await contactsServices.updateContact(request.params.contact_id, request.body);

    return response.status(200).json(contact);
}

const deleteContact = async (
    request: Request,
    response: Response
) : Promise<Response> => {

    await contactsServices.deleteContact(request.params.contact_id);

    return response.status(204).json();
}

export default {
    create,
    getAllContacts,
    getContactByClientId,
    getContactById,
    updateContact,
    deleteContact
}