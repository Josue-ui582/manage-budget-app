const add_2 = document.getElementById("adde");
const inputContainer_2 = document.getElementById("inputContainer_2");
const newValueInput_2 = document.getElementById("newValue_2");
const okButton_2 = document.getElementById("okButton_2");
const historyContainer1 = document.getElementById("historyContainer1");
const historyList1 = document.getElementById("historyList1");
const historyIcon1 = document.getElementById("historyIcon1");
let currentBallance1 = document.getElementById("currentBallance");

let currentBallanceValue_2 = 0;
let addedAmount1 = [];

add_2.addEventListener("click", function () {
    inputContainer_2.style.display = "flex";
    newValueInput_2.focus();
});

okButton_2.addEventListener("click", function () {
    const newValue2 = parseFloat(newValueInput_2.value);

    if (!isNaN(newValue2) && newValue2 > 0) {
        currentBallanceValue += newValue2;
        currentBallance.textContent = currentBallanceValue + ' FCFA';

        addedAmount1.push(newValue2);
        upDateHistorique1();
    }

    newValueInput_2.value = "";
    inputContainer_2.style.display = "none"
});

document.addEventListener("click", function (e) {
    const isClickInside_2 = add_2.contains(e.target) || inputContainer_2.contains(e.target);
    if (!isClickInside_2) {
        inputContainer_2.style.display = "none"
    }
});

historyIcon1.addEventListener('click', function (e) {
    e.stopPropagation();
    toggleHistory1();
});

function toggleHistory1() {
    if (historyContainer1.style.display = "none") {
        historyContainer1.style.display = "block";
    }else{
        historyContainer1.style.display = "none";
    }
};

document.addEventListener('click', function (e) {
    const isClickInside = historyContainer1.contains(e.target) || historyIcon1.contains(e.target);
    
    if (!isClickInside) {
        historyContainer1.style.display = "none";
    }
});

function upDateHistorique1() {
    historyList1.innerHTML = '';

    addedAmount1.forEach((amount, index) => {

        const listItem1 = document.createElement('li');
        listItem1.classList.add('history-item');

        listItem1.innerHTML = `
            <div class="historique__section">
                <span class="amount">${amount} FCFA</span>
                <button data-index="${index}">Supprimer</button>
            </div>
        `;
        listItem1.querySelector('button').addEventListener('click', function () {
            removeAmount1(index);
        });

        historyList1.appendChild(listItem1);
    });
};

function removeAmount1 (index) {
    const amountToRemove1 = addedAmount1[index];

    currentBallanceValue -= amountToRemove1;
    currentBallance.textContent = currentBallanceValue + ' FCFA';
    
    addedAmount1.splice(index, 1);
    upDateHistorique1();
};