const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Leemos variables de entorno del fichero .env
dotenv.config();

// Importación de rutas
const rutas = require('./routers');

// Construimos la aplicación express
const app = express();

// Parseado del body en formato json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Le pasamos la aplicación express para enrutar peticiones
rutas(app);

// Puerto de escucha. En caso de no estar definida se va al 4000
const puerto = process.env.PUERTO || 8080;

mongoose
  .connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Conectado a servidor MongoDB');

    app.listen(puerto, () => {
      console.log('Ejecutando en puerto', puerto);
    });
  })
  .catch((err) => {
    console.log('Error al conectar a Mongodb. ERROR = ', err);
  });
