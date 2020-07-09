const Contacto = require('../models/contactos-model');

const verContacto = async (req, res) => {
  try {
    const contacto = await Contacto.findOne({ _id: req.params.id });
    if (contacto) {
      res.status(200).send({ status: 'OK', data: contacto });
    } else {
      res
        .status(404)
        .send({ status: 'NOT_FOUND', message: 'Usuario inexistente' });
    }
  } catch (error) {
    res.status(500).send({ status: 'ERROR', message: error.message });
  }
};

const verContactos = async (req, res) => {
  try {
    const contactos = await Contacto.find();
    res.status(200).send({ status: 'OK', data: contactos });
  } catch (error) {
    res.status(500).send({ status: 'ERROR', message: error.message });
  }
};

const crearContacto = async (req, res) => {
  try {
    const {
      nombre,
      apellidos,
      telefonoFijo,
      telefonoMovil,
      direccion,
    } = req.body;

    const contacto = new Contacto({
      nombre: nombre,
      apellidos: apellidos,
      telefonoFijo: telefonoFijo,
      telefonoMovil: telefonoMovil,
      direccion: direccion,
    });

    await contacto.save();
    res.status(200).send({ status: 'OK', message: 'Usuario creado' });
  } catch (error) {
    res.status(500).send({ status: 'ERROR', message: error.message });
  }
};

const actualizarContacto = async (req, res) => {
  try {
    await Contacto.updateOne(
      { _id: req.body.id },
      {
        $set: {
          nombre: req.body.nombre,
          apellidos: req.body.apellidos,
          telefonoMovil: req.body.telefonoMovil,
          telefonoFijo: req.body.telefonoFijo,
          direccion: req.body.direccion,
        },
      }
    );
    res.status(200).send({ status: 'OK', message: 'Usuario actualizado' });
  } catch (error) {
    res.status(500).send({ status: 'ERROR', message: error.message });
  }

  res.status(200).send({ status: 'OK', message: 'Contacto actualizado' });
};

const borrarContacto = async (req, res) => {
  try {
    const deleteUser = await Contacto.deleteOne({ _id: req.params.id });
    res.status(200).send({ status: 'OK', data: deleteUser });
  } catch (error) {
    res.status(500).send({ status: 'Error', message: error.message });
  }
};

module.exports = {
  verContacto,
  verContactos,
  crearContacto,
  actualizarContacto,
  borrarContacto,
};
