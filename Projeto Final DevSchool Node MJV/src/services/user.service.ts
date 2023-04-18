import UserRepository from "../repositories/user.repository";
import { IUser } from "../models/user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const secretJWT = process.env.JWT_SECRET_KEY || "";

class UserService {
    
    getAll() {
        return UserRepository.getAll();
    }

    getByEmail(email: string) {
        return UserRepository.getByEmail(email);        
    }

    async create(user: IUser) {
        if(user.password ) {
            user.password = await bcrypt.hash(user.password, 10);
        }
        return UserRepository.create(user);
    }

    async authorization(email: string, password: string) {
        const user = await UserRepository.getByEmail(email);
        if(!user) throw new Error('Usuário não encontrado.');
        const result = await bcrypt.compare(password, user.password);
        if(result) {
            const jwtGenerated = jwt.sign({ email: user.email, _id: user._id}, secretJWT, {
                expiresIn: '1h'
            });
            return jwtGenerated;
        };
        throw new Error('Falha na autenticação.');
    }

    remove(email: string) {
        return UserRepository.remove(email);
    }

    update(email: string, user: Partial<IUser>) {
        return UserRepository.update(email, user);
    }
}

export default new UserService();