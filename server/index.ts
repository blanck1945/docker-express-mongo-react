import Fastify from 'fastify';
import fastifyStatic from 'fastify-static';
import path from 'path';

import { routes as HomeRoutes } from './routes/home';
import { routes as KanaRoutes } from './routes/kanas';

const app = Fastify({ logger: true });

const setStaticFile = () => {
  if (process.env.NODE_ENV === 'production') {
    app.register(fastifyStatic, {
      root: path.join(__dirname, '../src/index.tsx'),
      prefix: '/react/', // optional: default '/'
    });
  }
};

app.register(fastifyStatic, {
  root: path.join(__dirname, 'public'),
  prefix: '/public/', // optional: default '/'
});

// Import Routes
app.register(require('./routes/static'), { prefix: '/web' });
app.register(HomeRoutes);
app.register(KanaRoutes);

const port = process.env.PORT || 5000;
const dockerPort = process.env.DOCKER_EXPLICIT_PORT || '0,0,0,0';

app.get('/', async () => {
  return {
    dir: __dirname,
    msg: 'Server Running on port ' + port,
  };
});

const main = async () => {
  try {
    setStaticFile();
    await app.listen(port, '0.0.0.0');
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

main();

/*
  mongodb:
    container_name: mongo_db
    image: mongo:latest
    logging:
      driver: none
    ports:
      - 27017:27017
    volumes:
      - data:/data/db

volumes:
  data:*/
