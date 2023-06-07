const fastify = require('fastify')();
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');
// Establece la conexión con MongoDB usando Mongoose
mongoose.connect('mongodb://localhost:27017/productos', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware para analizar JSON en las solicitudes
fastify.register(require('@fastify/formbody'));

// Ruta base del API Gateway
fastify.get('/', (request, reply) => {
  reply.send('API Gateway');
});

// Rutas de productos
fastify.register(productRoutes, { prefix: '/api' });

// Opciones de configuración para el servidor Fastify
const options = {
  port: 3000,
};

// Inicia el servidor Fastify
const start = async () => {
  try {
    await fastify.listen(options);
    console.log(`Servidor iniciado en el puerto ${options.port}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();
