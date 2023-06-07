const fastify = require('./routes/productRoutes');
const mongoose = require('mongoose');

// Establece la conexión con MongoDB usando Mongoose
mongoose.connect('mongodb://localhost:27017/productos', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware para analizar JSON en las solicitudes
fastify.register(require('fastify-formbody'));

// Ruta base del API Gateway
fastify.get('/', (request, reply) => {
  reply.send('API Gateway');
});

// Inicia el servidor
fastify.listen(3000, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log('Servidor iniciado en el puerto 3000');
});
