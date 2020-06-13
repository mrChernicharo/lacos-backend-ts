import { Router } from 'express';
import ClientsController from '../controllers/ClientsController';
import ProfessionalsController from '../controllers/ProfessionalsController';

const router = Router();

const clientsController = new ClientsController();
const professionalsController = new ProfessionalsController();

router.get('/list-clients', clientsController.show);
router.post('/clients', clientsController.create);

router.get('/list-professionals', professionalsController.show);
router.post('/professionals', professionalsController.create);

export default router;
