const transactions = document.getElementById('transactions');

transactions.addEventListener('submit', function (e) {
    e.preventDefault();

    // Extraire les valeurs des champs
    const type = document.getElementById('type').value;
    const amount = document.getElementById('amount').value;

    // Envoyer les données à l'API
    fetch('http://localhost:6300/api/transactions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ type, amount }), // Envoyer les valeurs, pas les éléments DOM
    })
    .then(response => response.json())
    .then(data => {
        console.log('Transaction ajoutée avec succès:', data);
    })
    .catch(err => {
        console.error('Erreur lors de l\'ajout de la transaction:', err);
    });
});