const add = document.getElementById("add");
const inputContainer = document.getElementById("inputContainer");
const okButton= document.getElementById("okButton");
let currentBallance = document.getElementById("currentBallance");
const newValueInput = document.getElementById("newValue");
const removeSolde = document.getElementById("remove")
const historyContainer = document.getElementById("historyContainer");
const historyList = document.getElementById("historyList");
const historyIcon = document.getElementById("historyIcon");

let currentBallanceValue = 0;
let addedAmount = [];

add.addEventListener("click", function () {
    
    inputContainer.style.display = "flex";
    newValueInput.focus();
})

okButton.addEventListener("click", function () {

    const newValue = parseFloat(newValueInput.value);

    if (!isNaN(newValue) && newValue > 0) {

        let storedBudget = parseFloat(localStorage.getItem('storedBudget')) || 0;
        storedBudget += newValue;
        currentBallanceValue = storedBudget;
        
        localStorage.setItem('storedBudget', storedBudget);
        currentBallance.textContent = storedBudget + ' FCFA';

        addedAmount.push(newValue);
        localStorage.setItem('addedAmount', JSON.stringify(addedAmount));
        upDateHistorique();
    }

    newValueInput.value = '';
    inputContainer.style.display = "none"
});

historyIcon.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleHistory();
});

function toggleHistory() {
    if (historyContainer.style.display === "none") {
        historyContainer.style.display = "block";
    } else {
        historyContainer.style.display = "none";
    }
}

document.addEventListener("click", function (event) {
    const isClickInside = historyContainer.contains(event.target) || historyIcon.contains(event.target);
    
    if (!isClickInside) {
        historyContainer.style.display = "none";
    }
});

function upDateHistorique() {
    historyList.innerHTML = '';

    
    addedAmount.forEach((amount, index) => {
        const listItem = document.createElement('li');
        listItem.classList.add('history-item');

        listItem.innerHTML = `
            <div class="historique__section">
                <span class="amount">${amount} FCFA</span>
                <button data-index="${index}">Supprimer</button>
            </div>
        `;

        listItem.querySelector('button').addEventListener('click', function () {
            removeAmount(index);
        });

        historyList.appendChild(listItem);
    });
}

function removeAmount(index) {
    const amountToRemove = addedAmount[index];

    
    currentBallanceValue -= amountToRemove;
    currentBallance.textContent = currentBallanceValue + ' FCFA';

    
    addedAmount.splice(index, 1);

    
    localStorage.setItem('storedBudget', currentBallanceValue);
    localStorage.setItem('addedAmount', JSON.stringify(addedAmount));

    
    upDateHistorique();
}


window.addEventListener('load', function () {
    
    let storedBudget = parseFloat(localStorage.getItem('storedBudget')) || 0;
    currentBallanceValue = storedBudget;
    currentBallance.textContent = storedBudget + ' FCFA';

    addedAmount = JSON.parse(localStorage.getItem('addedAmount')) || [];
    console.log("Historique des actions chargées : ", addedAmount);

    upDateHistorique();
});


document.addEventListener("click", function (e) {
    const isClickInside = add.contains(e.target) || inputContainer.contains(e.target);
    if (!isClickInside) {
        inputContainer.style.display = "none";
    }
});


document.querySelectorAll('.revenu__container > div').forEach((container, index) => {
    const button = container.querySelector('button');
    const inputContainer = container.querySelector('.input-container_' + (index + 2));

    
    button.addEventListener('click', function() {
        if (inputContainer.classList.contains('open')) {
            inputContainer.classList.remove('open');
        } else {
            inputContainer.classList.add('open');
        }
    });
});

const back__icon = document.getElementById("back");
const close__icon = document.getElementById("close");
const nav__bar = document.getElementById("nav");

back__icon.addEventListener("click", function () {
    nav__bar.classList.add("show");
    back__icon.style.display = "none";
    close__icon.style.display = "block"
});

close__icon.addEventListener("click", function () {
    nav__bar.classList.remove("show")
    back__icon.style.display = "block"
    close__icon.style.display = "none"
});

console.log(localStorage.getItem('addedAmount'));
