import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { differenceInYears } from 'date-fns';

import Professional from '../models/Professional';
import ICreateProfessional from '../interfaces/ICreateProfessional';

export default class ProfessionalsController {
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const {
        nome,
        sobrenome,
        cpf,
        email,
        tel,
        data_nasc,
      }: ICreateProfessional = request.body;

      const professionalsRepository = getRepository(Professional);

      const professional = professionalsRepository.create({
        nome,
        sobrenome,
        cpf,
        email,
        tel,
        data_nasc,
      });

      await professionalsRepository.save(professional);

      return response.json(professional);
    } catch (err) {
      throw new Error(err);
    }
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const professionalsRepository = getRepository(Professional);

    const allProfessionals = await professionalsRepository.find();

    const professionals = allProfessionals.map(professional =>
      Object.assign(professional, {
        idade: differenceInYears(new Date(), professional.data_nasc),
      })
    );

    return response.json(professionals);
  }

  // public async update(request: Request, response: Response): Promise<Response> {}

  // public async delete(request: Request, response: Response): Promise<Response> {}
}
