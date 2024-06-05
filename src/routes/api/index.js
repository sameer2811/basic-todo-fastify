const fp = require('fastify-plugin');
const todoRoutes = require('./v1/todoRoutes')

async function v1Plugin(fastify, options) {
    fastify.register(todoRoutes, {
        prefix: "/v1"
    });
}


module.exports = v1Plugin;