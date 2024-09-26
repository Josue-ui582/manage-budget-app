const insertData = 'INSERT INTO transaction (type, amount) VALUES ($1, $2) RETURNING *';
const insertDepenseData = 'INSERT INTO depenses (typeOfDepense, amountOfDepense) VALUES ($1, $2) RETURNING *';

module.exports = {
    insertData,
    insertDepenseData
}