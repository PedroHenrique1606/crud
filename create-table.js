import {sql} from './db.js'

sql`
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(100),
    cell VARCHAR(20),
    category VARCHAR(50),
    route VARCHAR(100)
);
`.then(() =>{
    console.log('table created')
})