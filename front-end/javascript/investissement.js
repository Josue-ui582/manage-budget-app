const add_3 = document.getElementById("add_3");
const inputContainer_3 = document.getElementById("inputContainer_3");
const newValueInput_3 = document.getElementById("newValue_3");
const okButton_3 = document.getElementById("okButton_3");
const historyContainer2 = document.getElementById("historyContainer2");
const historyList2 = document.getElementById("historyList2");
const historyIcon2 = document.getElementById("historyIcon2");

let currentBallanceValue_3 = 0;
let addedAmount2 = [];

add_3.addEventListener("click", function () {
    inputContainer_3.style.display = "flex";
    newValueInput_3.focus();
})

okButton_3.addEventListener("click", function () {
    const newValue3 = parseFloat(newValueInput_3.value);

    if (!isNaN(newValue3) && newValue3 > 0) {
        currentBallanceValue += newValue3;
        currentBallance.textContent = currentBallanceValue + ' FCFA';

        addedAmount2.push(newValue3);
        upDateHistorique2();
    }

    newValueInput_3.value = "";
    inputContainer_3.style.display = "none"
})

document.addEventListener("click", function (e) {
    const isClickInside_3 = add_3.contains(e.target) || inputContainer_3.contains(e.target);
    if (!isClickInside_3) {
        inputContainer_3.style.display = "none"
    }
});

historyIcon2.addEventListener('click', function (e) {
    e.stopPropagation();
    toggleHistory2();
});

function toggleHistory2 () {
    if (historyContainer2.style.display = "none") {
        historyContainer2.style.display = "block";
    } else {
        historyContainer2.style.display = "none";
    }
};

document.addEventListener('click', function (e) {
    const isClickInside = historyContainer2.contains(e.target) || historyIcon2.contains(e.target);
    
    if (!isClickInside) {
        historyContainer2.style.display = "none";
    }
});

function upDateHistorique2() {
    historyList2.innerHTML = '';

    addedAmount2.forEach((amount, index) => {

        const listItem2 = document.createElement('li');
        listItem2.classList.add('history-item');

        listItem2.innerHTML = `
            <div class="historique__section">
                <span class="amount">${amount} FCFA</span>
                <button data-index="${index}">Supprimer</button>
            </div>
        `;
        listItem2.querySelector('button').addEventListener('click', function () {
            removeAmount2(index);
        });

        historyList2.appendChild(listItem2);
    });
};

function removeAmount2 (index) {
    const amountToRemove2 = addedAmount2[index];

    currentBallanceValue -= amountToRemove2;
    currentBallance.textContent = currentBallanceValue + ' FCFA';

    addedAmount2.splice(index, 1);
    upDateHistorique2();
}; 