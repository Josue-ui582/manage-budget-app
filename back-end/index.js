"use strict";
/* eslint-env node, es6 */

const path = require('path');
const express = require("express");
const bodyparser = require('body-parser');
const queries = require('./api/queries');
const compression = require('compression');
const apiRoutes = require('./api/route');

const PORT = 6300;

const app = express();


app.use(bodyparser.json());
app.use(express.json());

app.use(compression());

app.use(express.static('public', {
    maxAge: '30d'
}));

app.use(express.static(path.join(__dirname, 'public')));

const generatePageAcceuil = require("./pages/index-get");
const pool = require("./db");

app.get("/", async (req, res) => {
    const indexHTML = await generatePageAcceuil();
    res.send(indexHTML);
});

app.use('/api', apiRoutes);


app.use("/styles", express.static("D:/Projets/Getionnaire-de-budget/front-end/styles/"));
app.use("/transfere", express.static("D:/Projets/Getionnaire-de-budget/front-end/transfere/"));
app.use("/objectif", express.static("D:/Projets/Getionnaire-de-budget/front-end/objectif/"));
app.use("/images", express.static("D:/Projets/Getionnaire-de-budget/front-end/images/"));
app.use("/javascript", express.static("D:/Projets/Getionnaire-de-budget/front-end/javascript/"));

app.listen(PORT, () => {
    console.log(`Serveur démarré : http://localhost:${PORT}`);
});
