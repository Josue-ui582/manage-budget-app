

document.getElementById('goalForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const goalType = document.getElementById('goalType').value;
    const goalBudget = document.getElementById('goalBudget').value;
    const goalDate = document.getElementById('goalDate').value;

    const today = new Date().toISOString().split('T')[0];

    if (goalDate < today) {
        alert("La date doit être supérieure ou égale à aujourd'hui.");
        return;
    }

    const goal = {
        type: goalType,
        budget: goalBudget,
        date: goalDate
    };

    fetch('http://localhost:6300/api/goals', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(goal)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Objectif ajouté avec succès :', data);
        
        fechGoal();
    })
    .catch(error => {
        console.error('Erreur lors de l\'ajout de l\'objectif :', error);
    });

    document.getElementById('goalForm').reset();
});

async function fechGoal() {
    try {
        const response = await fetch('http://localhost:6300/api/goals');
        const goals = await response.json();

        const goalList = document.getElementById('goalList');
        goalList.innerHTML = '';

        goals.forEach(goal => {
            const listItem = document.createElement('li');
            const listItemTitle = document.createElement('h4');
            const listItemSentence = document.createElement('p');
            const listItemDate = document.createElement('p');

            listItemTitle.textContent = `Objectif : ${goal.type}`;
            listItemSentence.textContent = `Budget : €${goal.budget}`;
            listItemDate.textContent = `Date : ${goal.date}`;

            listItem.appendChild(listItemTitle);
            listItem.appendChild(listItemSentence);
            listItem.appendChild(listItemDate);

            goalList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Erreur lors de la récupération des objectifs', error);
    }
}

window.onload = fechGoal;