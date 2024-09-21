const express = require("express");
const cors = require("cors");
const { Client } = require("pg");

const app = express();
const port = 3000;

app.use(cors());

const client = new Client({
    user : "postgres",
    host : "localhost",
    database : "gestion_budget",
    password : "edmond9755",
    port : "5432",
});

app.get("/depenses", async (req, res) => {
    try {
        const result = await client.query("SELECT * FROM depenses");
        res.json(result.rows);
    } catch (err) {
        console.error("Erreur lors de la récupération des dépenses", err);
        res.status(500).json({error: "Erreur lors de la récupération des dépenses"});
    }
});

app.listen(port, () => {
    console.log(`Server backend en cour d'exécution sur http://localhost:${port}`);
});