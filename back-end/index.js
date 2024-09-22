"use strict";
/* eslint-env node, es6 */

const express = require("express");
const bodyparser = require('body-parser');
const queries = require('./src/transactions/queries');
const compression = require('compression');

const PORT = 6300;

const app = express();


app.use(bodyparser.json());

app.use(compression());

app.use(express.static('public', {
    maxAge: '30d'
}));

const generatePageAcceuil = require("./pages/index-get");
const pool = require("./db");

app.get("/", async (req, res) => {
    const indexHTML = await generatePageAcceuil();
    res.send(indexHTML);
});

app.post('/api/transactions', async (req, res) => {
    const { type, amount } = req.body;

    try {
        const result = await pool.query(queries.insertData, [type, amount]);
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Erreur de serveur');
    }
});

app.use("/styles", express.static("D:/Projets/Getionnaire-de-budget/front-end/styles/"));
app.use("/transfere", express.static("D:/Projets/Getionnaire-de-budget/front-end/transfere/"));
app.use("/javascript", express.static("D:/Projets/Getionnaire-de-budget/front-end/javascript/"));

app.listen(PORT, () => {
    console.log(`Serveur démarré : http://localhost:${PORT}`);
});
