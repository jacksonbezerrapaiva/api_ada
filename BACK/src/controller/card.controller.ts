import * as service from '../service/card.service'
import {CreateCardDTO, UpdateCardDTO} from '../dto/card.dto'
import {Card} from '../interface'
import * as mapper from '../mapper/mapper'


export const create = async(payload: CreateCardDTO): Promise<Card> => {
   return mapper.toCard(await service.create(payload))
}

export const update = async (id: string, payload: UpdateCardDTO): Promise<Card> => {
    return mapper.toCard(await service.update(id, payload))
}

export const deleteById = async(id: string): Promise<Card[]> => {
    let cardOutput = await service.deleteById(id);
    return cardOutput.map(mapper.toCard)
}

export const getAll = async(): Promise<Card[]> => {
    return (await service.getAll()).map(mapper.toCard)
}