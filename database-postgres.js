import { v4 as uuidv4 } from 'uuid';
import { sql } from './db.js';

export class DatabasePostgress {
    async create(users) {
        // const userId = uuidv4();
        const {name, category, cell, email, password, route} = users

        await sql `insert into users (name, category, cell, email, password, route) VALUES (${name},${category},${cell},${email},${password},${route})`
    }

    async list(search) {
        let users
        if(search){
            users = await sql`select * from users where name ilike "%${search}%"`
        } else{
            users = await sql`select * from users`
        }

        return users
    }

    update(id, users) {
        
    }

    delete(id) {
        
    }
}
