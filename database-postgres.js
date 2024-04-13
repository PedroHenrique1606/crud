import { v4 as uuidv4 } from 'uuid';
import { sql } from './db.js';

export class DatabasePostgress {
    async create(users) {
        const { name, category, cell, email, password, route } = users;

        await sql`
            INSERT INTO users (name, category, cell, email, password, route)
            VALUES (${name}, ${category}, ${cell}, ${email}, ${password}, ${route})
        `;
    }

    async list(search) {
        let users;
        if (search) {
            users = await sql`SELECT * FROM users WHERE name ILIKE "%${search}%"`;
        } else {
            users = await sql`SELECT * FROM users`;
        }

        return users;
    }

    async update(id, userData) {
        const { name, category, cell, email, password, route } = userData;

        await sql`
            UPDATE users
            SET name = ${name}, category = ${category}, cell = ${cell}, email = ${email}, password = ${password}, route = ${route}
            WHERE id = ${id}
        `;
    }

    async delete(id) {
        await sql`
            DELETE FROM users
            WHERE id = ${id}
        `;
    }
}
