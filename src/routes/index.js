const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.html', { title: 'First Website'});
});

router.get('/contact', (req, res) => {
    res.render('contact.html', { title: 'Contact Page'});
});

router.get('/altaClientes', (req, res) => {
    res.render('altaClientes.html', { title: 'Alta de Clientes'});
});

module.exports = router;
