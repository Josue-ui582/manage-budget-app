const add_4 = document.getElementById("add_4");
const inputContainer_4 = document.getElementById("inputContainer_4");
const newValueInput_4 = document.getElementById("newValue_4");
const okButton_4 = document.getElementById("okButton_4");
const historyContainer3 = document.getElementById("historyContainer3");
const historyList3 = document.getElementById("historyList3");
const historyIcon3 = document.getElementById("historyIcon3");

let currentBallanceValue_4 = 0;
let addedAmount3 = [];

add_4.addEventListener("click", function () {
    inputContainer_4.style.display = "flex";
    newValueInput_4.focus();
})

okButton_4.addEventListener("click", function () {
    const newValue4 = parseFloat(newValueInput_4.value);

    if (!isNaN(newValue4) && newValue4 > 0) {
        currentBallanceValue += newValue4;
        currentBallance.textContent = currentBallanceValue + ' FCFA';

        addedAmount3.push(newValue4);
        upDateHistorique3();
    }

    newValueInput_4.value = "";
    inputContainer_4.style.display = "none"
})

document.addEventListener("click", function (e) {
    const isClickInside_4 = add_4.contains(e.target) || inputContainer_4.contains(e.target);
    if (!isClickInside_4) {
        inputContainer_4.style.display = "none"
    }
});

historyIcon3.addEventListener('click', function (e) {
    e.stopPropagation();
    toggleHistory3();
});

function toggleHistory3 () {
    if (historyContainer3.style.display = 'none') {
        historyContainer3.style.display = 'block';
    } else {
        historyContainer3.style.display = 'none'
    }
};

document.addEventListener('click', function (e) {
    const isClickInside = historyContainer3.contains(e.target) || historyContainer3.contains(e.target);

    if (!isClickInside) {
        historyContainer3.style.display = 'none';
    }
})

function upDateHistorique3() {
    historyList3.innerHTML = '';
    
    addedAmount3.forEach((amount, index) => {

        const listItem3 = document.createElement('li');
        listItem3.classList.add('history-item');

        listItem3.innerHTML = `
            <div class="historique__section">
                <span class="amount">${amount} FCFA</span>
                <button data-index="${index}">Supprimer</button>
            </div>
        `;

        listItem3.querySelector('button').addEventListener('click', function () {
            removeAmount3();
        });

        historyList3.appendChild(listItem3);
    });
}

function removeAmount3 (index) {
    const amountToRemove3 = addedAmount3[index];

    currentBallanceValue -= amountToRemove3;
    currentBallance.textContent = currentBallanceValue + ' FCFA';

    addedAmount2.splice(index, 1);
    upDateHistorique3();
}