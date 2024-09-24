const add_5 = document.getElementById("add_5");
const inputContainer_5 = document.getElementById("inputContainer_5");
const newValueInput_5 = document.getElementById("newValue_5");
const okButton_5 = document.getElementById("okButton_5");
const historyContainer4 = document.getElementById("historyContainer4");
const historyList4 = document.getElementById("historyList4");
const historyIcon4 = document.getElementById("historyIcon4");

let currentBallanceValue_5 = 0;
let addedAmount4 = [];

add_5.addEventListener("click", function () {
    inputContainer_5.style.display = "flex";
    newValueInput_5.focus();
})

okButton_5.addEventListener("click", function () {
    const newValue5 = parseFloat(newValueInput_5.value);

    if (!isNaN(newValue5) && newValue5 > 0) {
        currentBallanceValue += newValue5;
        currentBallance.textContent = currentBallanceValue + ' FCFA';

        addedAmount4.push(newValue5);
        upDateHistorique4();
    }

    newValueInput_5.value = "";
    inputContainer_5.style.display = "none"
})

document.addEventListener("click", function (e) {
    const isClickInside_5 = add_5.contains(e.target) || inputContainer_5.contains(e.target);
    if (!isClickInside_5) {
        inputContainer_5.style.display = "none"
    }
});

historyIcon4.addEventListener('click', function (e) {
    e.stopPropagation();
    toggleHistory4();
});

function toggleHistory4 () {
    if (historyContainer4.style.display = 'none') {
        historyContainer4.style.display = 'block';
    } else {
        historyContainer4.style.display = 'none';
    }
}

document.addEventListener('click', function (e) {
    const isClickInside = historyContainer4.contains(e.target) || historyContainer4.contains(e.target);

    if (!isClickInside) {
        historyContainer4.style.display = 'none';
    }
});

function upDateHistorique4 () {
    historyList4.innerHTML = '';

    addedAmount4.forEach((amount, index) => {
        const listItem4 = document.createElement('li');
        listItem4.classList.add('history-item');

        listItem4.innerHTML = `
             <div class="historique__section">
                <span class="amount">${amount} FCFA</span>
                <button data-index="${index}">Supprimer</button>
            </div>
        `;

        listItem4.querySelector('button').addEventListener('click', function () {
            removeAmount4();
        });

        historyList4.appendChild(listItem4);
    });
};

function removeAmount4 (index) {
    const amountToRemove4 = addedAmount4[index];

    currentBallanceValue -= amountToRemove4;
    currentBallance.textContent = currentBallanceValue + ' FCFA';

    addedAmount4.splice(index, 1);
    upDateHistorique4();
}