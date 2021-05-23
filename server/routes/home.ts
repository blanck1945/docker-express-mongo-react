import { FastifyInstance, FastifyRequest } from 'fastify';

export const routes = async (fastify: FastifyInstance, opts: any) => {
  fastify.route({
    method: 'GET',
    url: '/home',
    handler: function (request: FastifyRequest, reply: any) {
      reply.code(200).sendFile('index.html');
    },
  });
};
