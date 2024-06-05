const v1Plugin = require('./api')
async function apiPlugin(fastify, options) {
    fastify.register(v1Plugin, {
        prefix: "/api"
    });
}

module.exports = apiPlugin;