const usuarios = require('../models').usuarios;
const jwt = require('../services/jwt');
const bcrypt = require("bcrypt");

// ---------------- METODOS ---------------
// crear nuevo usuario
function create(req, res) {
    usuarios.create(req.body)
        .then(usuario => {
            res.status(200).send({ usuario });
        })
        .catch(err => {
            res.status(500).send({ err })
        });
}
// actualizar usuario
function update(req, res) {
    var id = req.params.id;
    var body = req.body;
    usuarios.findByPk(id)
        .then(usuario => {
            usuario.update(body)
                .then(() => {
                    res.status(200).send({ usuario });
                })
                .catch(err => {
                    res.status(500).send({ message: 'Ocurrio un error al actualizar el usuario' });
                });
        })
        .catch(err => {
            res.status(500).send({ message: 'Ocurrio un error al buscar el usuario' });
        });
}
// logearse
function login(req, res) {
    usuarios.findOne({
        where: {
            usuario: req.body.usuario,
        }
    })
        .then(usuario => {
            if (usuario) {
                if (req.body.token) {
                    res.status(200).send({ token: jwt.createToken(usuario) });
                } else {
                    usuario.comparePassword(req.body.password, (err, isMatch) => {
                        if (isMatch && !err) {
                            res.status(200).send({ usuario: usuario });
                        } else {
                            res.status(401).send({ message: 'Acceso no autorizado' });
                        }
                    })
                }
            } else {
                res.status(401).send({ message: 'Usuario no existe' });
            }
        })
        .catch(err => {
            res.status(500).send({ message: 'Ocurrio un error al buscar el usuario' });
        });
}
// Listar usuarios
function getAll(req, res) {
    usuarios.findAll()
        .then(usuarios => {
            res.status(200).send({ usuarios });
        })
        .catch(err => {
            res.status(500).send({ message: 'Ocurrio un error al buscar los usuarios' });
        });
}

// EXPORTAMOS
module.exports = {
    create,
    update,
    login,
    getAll
}
