const add = document.getElementById("add");
const inputContainer = document.getElementById("inputContainer");
const okButton= document.getElementById("okButton");
const currentBallance = document.getElementById("currentBallance");
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
        currentBallanceValue += newValue;
        currentBallance.textContent = currentBallanceValue + 'FCFA';

        addedAmount.push(newValue);
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
    })
};

function removeAmount(index) {
    const amountToRemove = addedAmount[index];

    currentBallanceValue -= amountToRemove;
    currentBallance.textContent = currentBallanceValue + ' FCFA';

    addedAmount.splice(index, 1);
    upDateHistorique();
}

document.addEventListener("click", function (e) {
    const isClickInside = add.contains(e.target) || inputContainer.contains(e.target);
    if (!isClickInside) {
        inputContainer.style.display = "none";
    }
});

async function updateBalance(newValue) {
    try {
        const response = await fetch("api/solde", {
            method : "POST",
            headers : {
                "content type": "application/json",
            },
            body : JSON.stringify({solde_actuel : newValue})
        });

        if (response.ok) {
            const result = await response.json();
            currentBallance.innerText = `${result.solde_actuel} FCFA`;
        }else {
            console.error("Erreur lors de la mise à jour du solde")
        }
    } catch (error) {
        console.error("Erreur réseaux", "error");
    }
}


document.querySelectorAll('.revenu__container > div').forEach((container, index) => {
    const button = container.querySelector('button');
    const inputContainer = container.querySelector('.input-container_' + (index + 2)); // index + 2 pour correspondre à la numérotation

    
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