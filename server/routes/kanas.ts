import { FastifyInstance, FastifyRequest } from 'fastify';

export const routes = async (fastify: FastifyInstance, opts: any) => {
  fastify.get('/kanas', (req: FastifyRequest, res: any) => {
    res.send({
      msg: 'kanas',
      seiyu: 'Itou Ayasa',
    });
  });
};
