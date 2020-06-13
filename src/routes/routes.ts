import { Router } from 'express';
import ClientsController from '../controllers/ClientsController';

const router = Router();

const clientsController = new ClientsController();

router.get('/list-clients', clientsController.show);
router.post('/clientes', clientsController.create);

export default router;
