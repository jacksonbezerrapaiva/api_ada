import { Router } from 'express';
import cardsRouter from './card.routes';
import loginRouter from './login.routes';
import ErrorException from '../exception/error';


const router = Router();

router.use('/cards', cardsRouter);
router.use('/login', loginRouter);

router.use((err: ErrorException, req: any, res: any, next: any) => {
    const message = `{"message": ${err.message}}`;
    res.status(err.status).json(message);
})  

export default router;