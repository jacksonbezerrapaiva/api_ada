import jwt from 'jsonwebtoken';
import { UserDTO } from '../dto/user.dto';
import * as dotenv from "dotenv";
import ErrorException from '../exception/error';

dotenv.config();


// const token = req.headers.authorization;
async function generateJWT(user: UserDTO) {
    if (user.login != process.env.USERNAME_LOGIN) {
        const err = populateError(400, 'User not exists');
        throw err;
    }
    const passwordIsValid = await user.senha == process.env.PASSWORD_LOGIN;
    if (!passwordIsValid) {
        const err = populateError(400, 'Failed to login, invalid password');
        throw err;
    }
    const userName = user.login;


    const newToken = jwt.sign({ userName }, process.env.SECRET_JWT, { expiresIn: '1d' });

    return newToken;
}

const populateError = function (code: number, message: string): ErrorException {
    return new ErrorException(code,message);
};


export { generateJWT };

