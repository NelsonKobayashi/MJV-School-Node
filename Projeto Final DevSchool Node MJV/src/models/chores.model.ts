import { Schema } from "mongoose";
import mongoose from "mongoose";

export interface IChores {
    id: string;
    name: string;
    description: string;
    deadline: string;
    createdAt: string | Date;
    teacher: string;
}

export const choresSchema = new Schema<IChores>({
    id: {
        type: String
    },
    name: {
        type: String
    },
    description: {
        type: String
    },
    deadline: {
        type: String        
    },
    createdAt:{
        type: Date,
        default: new Date()
    },
    teacher: {
        type: String
    }    
});

export const Chores = mongoose.model<IChores>('Chores', choresSchema);