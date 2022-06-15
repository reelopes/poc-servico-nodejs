const usuario = require('./usuario');
const usuarios = require('./usuarios');
const router = require('express').Router();

router.use('/usuario', usuario);
router.use('/usuarios', usuarios);

module.exports = router;