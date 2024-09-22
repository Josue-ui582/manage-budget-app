const insertData = 'INSERT INTO transaction (type, amount) VALUES ($1, $2) RETURNING *';

module.exports = {
    insertData,
}