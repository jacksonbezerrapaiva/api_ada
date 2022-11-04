import { Router, Request, Response} from 'express'

import * as cardController from '../controller/card.controller';
import {CreateCardDTO, UpdateCardDTO} from '../dto/card.dto';
import { authMiddleware } from '../middlewares/auth';
import { loggingMiddleware } from '../middlewares/logging';

const asyncHandler = require('express-async-handler');

const cardsRouter = Router();

cardsRouter.use(asyncHandler(authMiddleware));
cardsRouter.use(asyncHandler(loggingMiddleware));

cardsRouter.put('/:id', asyncHandler( async (req: Request, res: Response) => {
    const id = req.params.id;
    const payload:UpdateCardDTO = req.body;
    
    const result = await cardController.update(id, payload);
    return res.status(200).send(result)
}))

cardsRouter.delete('/:id', asyncHandler(async (req: Request, res: Response) => {
    const id = req.params.id;
    
    const result = await cardController.deleteById(id);
    return res.status(200).send({
        result
    })
}))

cardsRouter.post('/', asyncHandler( async (req: Request, res: Response) => {
    const payload:CreateCardDTO = req.body;
    const result = await cardController.create(payload);
    return res.status(201).send(result);
}))

cardsRouter.get('/', asyncHandler( async (req: Request, res: Response) => {
    const results = await cardController.getAll();
    return res.status(200).send(results);
}))


export default cardsRouter;