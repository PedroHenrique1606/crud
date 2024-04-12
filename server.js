import { fastify } from "fastify";

const server = fastify();

server.get('/', () =>{
    return 'Home'
})
server.get('/hello', () =>{
    return 'Hello World'
})
server.get('/professor', () =>{
    return 'Pedro Henrique Melo da Silva Ferreira'
})
server.listen({
    port: 3333
})
