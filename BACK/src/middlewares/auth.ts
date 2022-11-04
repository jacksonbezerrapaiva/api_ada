import { NextFunction, Request, Response } from 'express'
import * as dotenv from "dotenv";
import ErrorException from '../exception/error';

dotenv.config();

import jwt from 'jsonwebtoken'

export const authMiddleware = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
    const { authorization } = req.headers
	if (!authorization) {
		throw  populateError(401, 'No token provided');
	}

	const token = authorization.split(' ')[1]
    if (!token) {
        const err = populateError(401, 'No token provided');
        throw err;
    }
    try {
        const result = jwt.verify(token, process.env.SECRET_JWT);
    } catch (error) {
        const err = populateError(401, error.message);
        throw err;
    }
    next()

}

const populateError = function (code: number, message: string): ErrorException {
    return new ErrorException(code,message);
};