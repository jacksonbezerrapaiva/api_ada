import { Token } from '../interface/token.interface'

import {Card} from '../interface'
import {CardOutput} from '../model/card.model'

export const toCard = (card: CardOutput): Card => {
    
    return {
        id: card.id,
        titulo: card.titulo,
        conteudo: card.conteudo,
        lista: card.lista
    }
}

export const toToken = (token: string): Token => {
    return {
        token: token
    }
}