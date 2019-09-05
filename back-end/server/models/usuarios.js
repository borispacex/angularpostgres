const bcrypt = require("bcrypt");
// interface
module.exports = (sequelize, DataTypes) => {
    const usuarios = sequelize.define('usuarios', {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        usuario: DataTypes.STRING,
        password: DataTypes.STRING,
        id_rol: DataTypes.INTEGER,
        activo: DataTypes.BOOLEAN,
        usuario_creacion: DataTypes.STRING,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    });
    // codifica la contraseña crear
    usuarios.beforeSave((usuarios, options) => {
        if (usuarios.changed('password')) {
            usuarios.password = bcrypt.hashSync(usuarios.password, bcrypt.genSaltSync(10), null);
        }
    });
    // cuando se compara contraseña decodifica y compara aqui
    usuarios.prototype.comparePassword = function (passw, cb) {
        bcrypt.compare(passw, this.password, function (err, isMatch) {
            if (err) {
                return cb(err);
            }
            cb(null, isMatch);
        });
    };
    return usuarios;
}