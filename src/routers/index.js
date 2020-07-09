const contactosRouter = require('./contactos-routers');

module.exports = (app) => {
  app.use('/contactos', contactosRouter);
};
