import { Request, Response } from "express";
import { clientsServices } from "../services";
import { ClientReturn, ClientsList } from "../interfaces";

const create = async (
    request: Request,
    response: Response,
) : Promise<Response>=>{

    const newClient : ClientReturn = await clientsServices.createClient(request.body);

    return response.status(201).json(newClient);
}

const getClientById = async (
    request: Request,
    response: Response
) : Promise<Response> => {
    
    const foundClient : ClientReturn = await clientsServices.getClientById(request.params.id);

    return response.status(200).json(foundClient);

}

const getAllClients = async (
    request: Request,
    response: Response
) : Promise<Response> =>{

    const allclients : ClientsList = await clientsServices.getAllClients();

    return response.status(200).json(allclients);
}

const updateClient = async (
    request: Request,
    response: Response
) : Promise<Response> =>{

    const updatedClient : ClientReturn = await clientsServices.updateClient(request.params.id, request.body);

    return response.status(200).json(updatedClient);
}

const deleteClient = async (
    request: Request,
    response: Response
) : Promise<Response> =>{

    await clientsServices.deleteClient(request.params.id);

    return response.status(204).json();
}

export default {
    create,
    getClientById,
    getAllClients,
    updateClient,
    deleteClient
}