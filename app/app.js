const add = document.getElementById("add");
const inputContainer = document.getElementById("inputContainer");
const okButton= document.getElementById("okButton");
const currentBallance = document.getElementById("currentBallance");
const newValueInput = document.getElementById("newValue");
const removeSolde = document.getElementById("remove")
let currentBallanceValue = 0;

add.addEventListener("click", function () {
    inputContainer.style.display = "flex";
    newValueInput.focus();
})

okButton.addEventListener("click", function () {

    const newValue = parseFloat(newValueInput.value);

    if (!isNaN(newValue) && newValue > 0) {
        currentBallanceValue += newValue;
        currentBallance.textContent = currentBallanceValue + 'f';
    }

    newValueInput.value = '';
    inputContainer.style.display = "none"

});

removeSolde.addEventListener("click", function () {
    currentBallanceValue = 0;
    currentBallance.textContent = currentBallanceValue + "f";
    newValueInput.value = "";
})

document.addEventListener("click", function (e) {
    const isClickInside = add.contains(e.target) || inputContainer.contains(e.target);
    if (!isClickInside) {
        inputContainer.style.display = "none"
    }
});

document.getElementById('addRowBtn').addEventListener('click', function() {
    
    const tableBody = document.querySelector('#productTable tbody');
    const newRow = document.createElement('tr');

    
    const productNameCell = document.createElement('td');
    const productNameInput = document.createElement('input');
    productNameInput.type = 'text';
    productNameInput.placeholder = 'Nom de l\'article';
    productNameInput.style.width = "100%";
    productNameInput.style.fontSize = "20px";
    productNameInput.style.padding = "5px";
    productNameInput.style.outline = "none";
    productNameInput.style.border = "none";
    productNameCell.appendChild(productNameInput);

    
    const productPriceCell = document.createElement('td');
    const productPriceInput = document.createElement('input');
    productPriceInput.type = 'number';
    productPriceInput.placeholder = 'Prix de l\'article';
    productPriceInput.style.width = "100%";
    productPriceInput.style.fontSize = "20px";
    productPriceInput.style.padding = "5px";
    productPriceInput.style.outline = "none";
    productPriceInput.style.border = "none";
    productPriceCell.appendChild(productPriceInput);

    
    newRow.appendChild(productNameCell);
    newRow.appendChild(productPriceCell);

    
    tableBody.appendChild(newRow);
});

const adde = document.getElementById("adde");
const inputContainer_2 = document.getElementById("inputContainer_2");
const newValueInput_2 = document.getElementById("newValue_2");
const okButton_2 = document.getElementById("okButton_2");
let currentBallanceValue_2 = 0;

adde.addEventListener("click", function () {
    inputContainer_2.style.display = "flex";
    newValueInput_2.focus();
})

okButton_2.addEventListener("click", function () {
    const newValue2 = parseFloat(newValueInput_2.value);

    if (!isNaN(newValue2) && newValue2 > 0) {
        currentBallanceValue += newValue2;
        currentBallance.textContent = currentBallanceValue + 'f';
    }

    newValueInput_2.value = "";
    inputContainer_2.style.display = "none"
})

document.addEventListener("click", function (e) {
    const isClickInside_2 = adde.contains(e.target) || inputContainer_2.contains(e.target);
    if (!isClickInside_2) {
        inputContainer_2.style.display = "none"
    }
});