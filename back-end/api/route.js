const express = require('express');
const router = express.Router();
const queries = require('./queries');
const pool = require('../db');

router.post('/transactions', async (req, res) => {
    const { type, amount } = req.body;

    try {
        const result = await pool.query(queries.insertData, [type, amount]);
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Erreur de serveur');
    }
});

router.post('/goals', async (req, res) => {
    const {type, budget, date} = req.body;

    try {
        const newGoal = await pool.query( "INSERT INTO goals (type, budget, date) VALUES($1, $2, $3) RETURNING *", [type, budget, date]);
        res.json(newGoal.rows[0]);
    } catch (error) {
        console.error(err.message);
        res.status(500).send("Erreur server");
    }
});

router.get('/goals', async (req, res) => {
    try {
        const allGoals = await pool.query('SELECT * FROM goals');
        res.json(allGoals.rows);
    } catch (error) {
        console.error(err.message);
        res.status(500).send('Erreur serveur');
    }
});

module.exports = router;