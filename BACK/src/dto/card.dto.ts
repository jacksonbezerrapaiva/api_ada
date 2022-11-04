import { Optional } from "sequelize/types"

export type CreateCardDTO = {
    id: string;
    name: string;
    titulo: string;
    conteudo: string;
    lista?: string;
}

export type UpdateCardDTO = Optional<CreateCardDTO, 'id'>