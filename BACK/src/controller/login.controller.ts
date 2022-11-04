import * as service from '../service/login.service'
import {UserDTO} from '../dto/user.dto'
import * as mapper from '../mapper/mapper'
import { Token } from '../interface/token.interface'

export const login = async(payload: UserDTO): Promise<Token> => {
   return mapper.toToken(await service.generateJWT(payload))
}