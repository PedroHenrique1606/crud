import { fastify } from "fastify";
import { DatabaseMemory } from "./database-memory.js";

const server = fastify();

const database = new DatabaseMemory()

server.post('/users', (request, reply) =>{
    const body = request.body

    const {name, email, password, cell, category, route} =  request.body

    database.create({
        name,
        email,
        password,
        cell,
        category,
        route,
    })

    return reply.status(201).send()
})

server.get('/users', () =>{
    const users = database.list()

    return users
})

server.delete('/users/:id', () =>{
    return 'Pedro Henrique Melo da Silva Ferreira'
})

server.put('/users/:id', () =>{
    return 'Pedro Henrique Melo da Silva Ferreira'
})

server.listen({
    port: 3333
})
