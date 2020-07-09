const express = require('express');
const contactosController = require('../controllers/contactos-controller');

const router = express.Router();

// GET
router.get('/contacto/:id', contactosController.verContacto);
router.get('/contactos', contactosController.verContactos);

// POST
router.post('/crear', contactosController.crearContacto);

// PUT
router.put('/actualizar/:id', contactosController.actualizarContacto);

// DELETE
router.delete('/borrar/:id', contactosController.borrarContacto);

module.exports = router;
