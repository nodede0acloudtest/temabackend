const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const esquemaContacto = new Schema({
  nombre: { type: String, required: true },
  apellidos: { type: String },
  telefonoFijo: { type: Number },
  telefonoMovil: { type: Number, required: true, unique: true },
  direccion: { type: String, required: true },
});

const modeloContacto = mongoose.model('contactos', esquemaContacto);

module.exports = modeloContacto;
