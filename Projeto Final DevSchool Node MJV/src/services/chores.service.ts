import ChoresRepository from "../repositories/chores.repository";
import { IChores } from "../models/chores.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const secretJWT = process.env.JWT_SECRET_KEY || "";

class ChoresService {
    
    getAll() {
        return ChoresRepository.getAll();
    }

    getById(id: string) {
        return ChoresRepository.getById(id);
    }

    create(chores: IChores) {
        return ChoresRepository.create(chores);
    }

    remove(id: string) {
        return ChoresRepository.remove(id);
    }

    update(id: string, chores: Partial<IChores>) {
        return ChoresRepository.update(id, chores);
    }
}

export default new ChoresService();