import { Router, Request, Response} from 'express'

import * as loginController from '../controller/login.controller';
import {UserDTO} from '../dto/user.dto';

const asyncHandler = require('express-async-handler');

const loginRouter = Router();

loginRouter.post('/', asyncHandler( async (req: Request, res: Response) => {
    const payload: UserDTO = req.body;
    const result = await loginController.login(payload);
    return res.status(201).send(result);
}))

export default loginRouter;