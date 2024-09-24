const add_6 = document.getElementById("add_6");
const inputContainer_6 = document.getElementById("inputContainer_6");
const newValueInput_6 = document.getElementById("newValue_6");
const okButton_6 = document.getElementById("okButton_6");
const historyContainer5 = document.getElementById("historyContainer5");
const historyList5 = document.getElementById("historyList5");
const historyIcon5 = document.getElementById("historyIcon5");

let currentBallanceValue_6 = 0;
let addedAmount5 = [];

add_6.addEventListener("click", function () {
    inputContainer_6.style.display = "flex";
    newValueInput_6.focus();
})

okButton_6.addEventListener("click", function () {
    const newValue6 = parseFloat(newValueInput_6.value);

    if (!isNaN(newValue6) && newValue6 > 0) {
        currentBallanceValue += newValue6;
        currentBallance.textContent = currentBallanceValue + ' FCFA';

        addedAmount5.push(newValue6);
        upDateHistorique5();
    }

    newValueInput_6.value = "";
    inputContainer_6.style.display = "none"
})

document.addEventListener("click", function (e) {
    const isClickInside_6 = add_6.contains(e.target) || inputContainer_6.contains(e.target);
    if (!isClickInside_6) {
        inputContainer_6.style.display = "none"
    }
});

historyIcon5.addEventListener('click', function (e) {
    e.stopPropagation();
    toggleHistory5();
});

function toggleHistory5() {
    if (historyContainer5.style.display = 'none') {
        historyContainer5.style.display = 'block';
    } else {
        historyContainer5.style.display = 'none';
    }
}

document.addEventListener('click', function (e) {
    const isClickInside = historyContainer5.contains(e.target) || historyContainer5.contains(e.target);

    if (!isClickInside) {
        historyContainer5.style.display = 'none';
    }
});

function upDateHistorique5 () {
    historyList5.innerHTML = '';

    addedAmount5.forEach((amount, index) => {
        const listItem5 = document.createElement('li');
        listItem5.classList.add('history-item');

        listItem5.innerHTML = `
            <div class="historique__section">
                <span class="amount">${amount} FCFA</span>
                <button data-index="${index}">Supprimer</button>
            </div>
        `;

        listItem5.querySelector('button').addEventListener('click', function () {
            removeAmount5();
        });

        historyList5.appendChild(listItem5);
    });
};

function removeAmount5 (index) {
    const amountToRemove5 = addedAmount5[index];

    currentBallanceValue -= amountToRemove5;
    currentBallance.textContent = currentBallanceValue + ' FCFA';

    addedAmount5.splice(index, 1);
    upDateHistorique5();
}