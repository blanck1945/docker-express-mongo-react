import { FastifyInstance, FastifyRequest } from 'fastify';

async function routes(fastify: FastifyInstance, opts: any) {
  fastify.route({
    method: 'GET',
    url: '/',
    handler: async (request: FastifyRequest, reply: any) => {
      reply.sendFile('index.html');
    },
  });
}

export default routes;
