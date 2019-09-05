const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//cabeceras
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Authorization, X-API-KEY, Origin, X-Requested-With,Content-Type, Accept, Access-Control-Allow-Request-Method"
    );
    res.header("Access-Control-Allow-Methods", "GET,POST,OPTIONS,PUT,DELETE");
    res.header("Allow", "GET,POST,OPTIONS,PUT,DELETE");
    next();
});

// RUTAS
require('./server/routes/usuarios')(app);
require('./server/routes/fotografias')(app);

app.get('*', (req, res) => {
    res.status(200).send({ message: 'Bienvenido al servidor NODEJS' });
})

// exportamos app
module.exports = app;
