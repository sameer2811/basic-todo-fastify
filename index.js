const appPlugin = require('./src/app');

const fastify = require('fastify')({
    logger: true
});


fastify.register(appPlugin);

fastify.get('/sameer', async function (req, resp) {
    fastify.log.info("Coming here to print the log");
    return "hello";
});

fastify.after(function () {
    console.log("printing all the registered routes ", fastify.printRoutes());
})

async function start() {
    fastify.listen({
        port: 7000
    }, async function (err) {
        if (err) {
            console.log(err);
            process.exit(1);
        }
        console.log(`server started listening at 7000`);
    });
}

start();