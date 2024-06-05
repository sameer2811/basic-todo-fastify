const fp = require('fastify-plugin');

async function dbConfig(fastify, options, done) {
    fastify.decorate('db', {
        "todos": []
    });
}

module.exports = fp(dbConfig);