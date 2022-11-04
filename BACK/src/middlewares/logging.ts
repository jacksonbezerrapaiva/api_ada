import { NextFunction, Request, Response } from 'express'
import moment from 'moment';
import { format } from 'date-fns'
import {CreateCardDTO} from '../dto/card.dto'



export const loggingMiddleware = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {

    res.on('finish', function(){
        if (req.originalUrl.includes('/cards/') && (req.method == 'DELETE' || req.method == 'PUT')) {
            const card:CreateCardDTO = res.req.body;
            let action = '';
            if (req.method == 'DELETE') {
                action = 'Remover';
            } else {
                action = 'Alterar';
            }
            const title = card.titulo;
            const id = req.originalUrl.substring(7, req.originalUrl.length + 1);
            const date = moment().format('MM/DD/YYYY hh:mm:ss');
            console.log(`${date} - Card ${id} - ${title} - ${action}`)
        }
    });
    next()

}

