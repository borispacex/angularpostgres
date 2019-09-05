const usuariosController = require('../controllers').usuarios;
const md_auth = require('../authenticated/authenticated');


// configuracion el express
module.exports = (app) => {
    app.post('/api/usuario', usuariosController.create);
    app.put('/api/usuario/:id', usuariosController.update);
    app.post('/api/login', usuariosController.login);
    app.get('/api/usuarios', md_auth.auth, usuariosController.getAll);
}