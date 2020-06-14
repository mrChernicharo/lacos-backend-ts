import { Router } from 'express';
import ClientsController from '../controllers/ClientsController';
import ProfessionalsController from '../controllers/ProfessionalsController';
import AppointmentsController from '../controllers/AppointmentsController';

const router = Router();

const clientsController = new ClientsController();
const professionalsController = new ProfessionalsController();
const appointmentsController = new AppointmentsController();

router.get('/list-clients', clientsController.show);
router.post('/clients', clientsController.create);

router.get('/list-professionals', professionalsController.show);
router.post('/professionals', professionalsController.create);

router.get('/list-appointments', appointmentsController.show);

export default router;
