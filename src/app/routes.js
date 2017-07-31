import Express from 'express';
import homeRouter from './routers/home';

const router = Express.Router();

router.get('/', homeRouter);

export default router;