import Card from '../model/card.model';
import {CardInput, CardOutput} from '../model/card.model';
import { v4 as uuidv4 } from 'uuid';
import ErrorException from '../exception/error';


export const create = async (payload: CardInput): Promise<CardOutput> => {
    let card: Card;
    try {
        payload.id = uuidv4();
        validation(payload);
        card = await Card.create(payload);
    } catch (error) {
        const err = populateError(400, error.message);
        throw err;
    }
    return card;
}

export const update = async (id: string, payload: Partial<CardInput>): Promise<CardOutput> => {
    let card: Card;
    let updatedCard: Card;
    try {
        card = await Card.findByPk(id)
        if (!card) {
            const err = populateError(404, 'Not found');
            throw err;
        }
        validation(payload);
        updatedCard = await (card as Card).update(payload)
    } catch (error) {
        if (!error.status) {
            const err = populateError(400, 'Error Generic');
            throw err;
        } else {
            const err = populateError(400, error.message);
            throw err;
        }
    }
    return updatedCard;
}

export const deleteById = async (id: string): Promise<CardOutput[]> => {
    const deletedCardCount = await Card.destroy({
        where: {id}
    })
    if (deletedCardCount == 0) {
        const err = populateError(404, 'Not found');
        throw err;
    }
    return await Card.findAll();
}

export const getAll = async (): Promise<CardOutput[]> => {
    return Card.findAll();
}

const populateError = function (code: number, message: string): ErrorException {
    return new ErrorException(code, message);
};

const validation = function(payload: CardInput | Partial<CardInput>): any {
    let err: ErrorException;
    if (!payload.titulo) {
        err = populateError(400, 'Título obrigatório'); 
    }
    if (!payload.conteudo) {
        err = populateError(400, 'Conteudo obrigatório');
    }

    
    if (!payload.lista) {
        console.log('aaasaspato');
        err = populateError(400, 'Lista obrigatório');
    }
    if (err) {
        throw err;
    }
};