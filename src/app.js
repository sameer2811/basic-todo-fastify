const fp = require('fastify-plugin');
const v1Plugin = require('./routes/api/index');
async function app(fastify, options) {
    await fastify.register(v1Plugin, {
        prefix: "/api"
    });

    await fastify.register(require('./db/index'));
    await fastify.register(require('./repository/todoRepository'));
    await fastify.register(require('./services/todoService'));
}

module.exports = fp(app);