import { IChores, Chores } from "../models/chores.model";  

class ChoresRepository {
    getAll() {
        return Chores.find();
    }

    getById(id: string) {
        return Chores.findOne({id: id});
    }

    create(chores: IChores){
        return Chores.create(chores);
    }

    update(id: string, chores: Partial<IChores>){
        return Chores.updateOne({ id: id }, {$set: chores});
    }

    remove(id: string) {
        return Chores.deleteOne({id: id});
    }
}

export default new ChoresRepository();