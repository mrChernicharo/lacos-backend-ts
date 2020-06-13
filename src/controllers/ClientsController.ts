import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { differenceInYears } from 'date-fns';

import Client from '../models/Client';
import ICreateClient from '../interfaces/ICreateClient';

export default class ClientsController {
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const {
        nome,
        sobrenome,
        cpf,
        email,
        tel,
        data_nasc,
      }: ICreateClient = request.body;

      const clientsRepository = getRepository(Client);

      const client = clientsRepository.create({
        nome,
        sobrenome,
        cpf,
        email,
        tel,
        data_nasc,
      });

      await clientsRepository.save(client);

      return response.json(client);
    } catch (err) {
      throw new Error(err);
    }
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const clientsRepository = getRepository(Client);

    const allClients = await clientsRepository.find();

    const clients = allClients.map(client =>
      Object.assign(client, {
        idade: differenceInYears(new Date(), client.data_nasc),
      })
    );

    return response.json(clients);
  }

  // public async update(request: Request, response: Response): Promise<Response> {}

  // public async delete(request: Request, response: Response): Promise<Response> {}
}
