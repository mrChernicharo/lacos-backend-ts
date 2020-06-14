import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Appointment from '../models/Appointment';

class AppointmentsController {
  public async show(request: Request, response: Response): Promise<Response> {
    const appointmentsRepo = getRepository(Appointment);

    const appointments = await appointmentsRepo.find();

    return response.json(appointments);
  }
}
export default AppointmentsController;
