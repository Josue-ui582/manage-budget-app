
const cors = require('cors');
app.use(cors());



app.post('/api/solde', async (req, res) => {

    const { solde_actuel } = req.body;

    try {
        
        const existingBalance = await pool.query('SELECT * FROM solde ORDER BY id DESC LIMIT 1');

        if (existingBalance.rows.length > 0) {
            await pool.query('UPDATE solde SET montant = $1 WHERE id = $2', [solde_actuel, existingBalance.rows[0].id]);
        } else {
            await pool.query('INSERT INTO solde (solde_actuel) VALUES ($1)', [solde_actuel]);
        }

        res.status(200).json({ solde_actuel });
    } catch (error) {
        console.error('Erreur lors de la mise à jour du solde', error);
        res.status(500).send('Erreur serveur');
    }
});
