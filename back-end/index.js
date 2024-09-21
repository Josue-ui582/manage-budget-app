"use strict"
/* eslint-env node, es6 */

const express = require("express");

const PORT = 6300;

const app = express()

const generatePageAcceuil = require("./pages/index-get")

app.get("/", async (req, res) => {
    const indexHTML = await generatePageAcceuil();
    res.send(indexHTML)
});

app.use("/styles", express.static("D:/Projets/Getionnaire-de-budget/front-end/styles/"));
app.use("/transfere", express.static("D:/Projets/Getionnaire-de-budget/front-end/transfere/"));
app.use("/javascript", express.static("D:/Projets/Getionnaire-de-budget/front-end/javascript/"));

app.listen(PORT, () => {
    console.log(`Serveur démarré : http://localhost:${PORT}`);
})