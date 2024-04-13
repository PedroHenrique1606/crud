import { fastify } from "fastify";
// import { DatabaseMemory } from "./database-memory.js";
import { DatabasePostgress } from "./database-postgres.js";

const server = fastify();

// const database = new DatabaseMemory()
const database  = new DatabasePostgress()

server.post('/users', async (request, reply) => {
    const body = request.body

    const { name, email, password, cell, category, route } = request.body

    await database.create({
        name,
        email,
        password,
        cell,
        category,
        route,
    })

    return reply.status(201).send()
})

server.get('/users', async (request) =>  {
    const search = request.query.search

    const users = await database.list()

    return users
})

server.delete('/users/:id', (request, reply) => {
    const userID = request.params.id
    database.delete(userID)

    return reply.status(204).send()
})

server.put('/users/:id', (request, reply) => {
    const userID = request.params.id
    const { name, email, password, cell, category, route } = request.body
    database.update(userID, {
        name,
        email,
        password,
        cell,
        category,
        route,
    })

    return reply.status(204).send()
})

server.listen({
    port: 3333
})
