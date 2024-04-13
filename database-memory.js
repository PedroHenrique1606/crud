import { v4 as uuidv4 } from 'uuid';

export class DatabaseMemory {
    #users = new Map();

    create(users){
        const userId = uuidv4();
        this.#users.set(userId, users);
    }

    list(){
        return Array.from(this.#users.values());
    }
    
    update(id, users){
        this.#users.set(id, users);
    }

    delete(id){
        this.#users.delete(id);
    }
}
