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
        currentBallance.textContent = currentBallanceValue + 'FCFA';
    }

    newValueInput.value = '';
    inputContainer.style.display = "none"

});

removeSolde.addEventListener("click", function () {
    currentBallanceValue = 0;
    currentBallance.textContent = currentBallanceValue + " FCFA";
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
    productNameInput.placeholder = 'Type de dépense';
    productNameInput.style.width = "100%";
    productNameInput.style.fontSize = "20px";
    productNameInput.style.padding = "5px";
    productNameInput.style.outline = "none";
    productNameInput.style.border = "none";
    productNameCell.appendChild(productNameInput);

    
    const productPriceCell = document.createElement('td');
    const productPriceInput = document.createElement('input');
    productPriceInput.type = 'number';
    productPriceInput.placeholder = 'Coût de la dépense';
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

const add_2 = document.getElementById("adde");
const inputContainer_2 = document.getElementById("inputContainer_2");
const newValueInput_2 = document.getElementById("newValue_2");
const okButton_2 = document.getElementById("okButton_2");
let currentBallanceValue_2 = 0;

add_2.addEventListener("click", function () {
    inputContainer_2.style.display = "flex";
    newValueInput_2.focus();
})

okButton_2.addEventListener("click", function () {
    const newValue2 = parseFloat(newValueInput_2.value);

    if (!isNaN(newValue2) && newValue2 > 0) {
        currentBallanceValue += newValue2;
        currentBallance.textContent = currentBallanceValue + ' FCFA';
    }

    newValueInput_2.value = "";
    inputContainer_2.style.display = "none"
})

document.addEventListener("click", function (e) {
    const isClickInside_2 = add_2.contains(e.target) || inputContainer_2.contains(e.target);
    if (!isClickInside_2) {
        inputContainer_2.style.display = "none"
    }
});

const add_3 = document.getElementById("add_3");
const inputContainer_3 = document.getElementById("inputContainer_3");
const newValueInput_3 = document.getElementById("newValue_3");
const okButton_3 = document.getElementById("okButton_3");
let currentBallanceValue_3 = 0;

add_3.addEventListener("click", function () {
    inputContainer_3.style.display = "flex";
    newValueInput_3.focus();
})

okButton_3.addEventListener("click", function () {
    const newValue3 = parseFloat(newValueInput_3.value);

    if (!isNaN(newValue3) && newValue3 > 0) {
        currentBallanceValue += newValue3;
        currentBallance.textContent = currentBallanceValue + ' FCFA';
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

const add_4 = document.getElementById("add_4");
const inputContainer_4 = document.getElementById("inputContainer_4");
const newValueInput_4 = document.getElementById("newValue_4");
const okButton_4 = document.getElementById("okButton_4");
let currentBallanceValue_4 = 0;

add_4.addEventListener("click", function () {
    inputContainer_4.style.display = "flex";
    newValueInput_4.focus();
})

okButton_4.addEventListener("click", function () {
    const newValue4 = parseFloat(newValueInput_4.value);

    if (!isNaN(newValue4) && newValue4 > 0) {
        currentBallanceValue += newValue4;
        currentBallance.textContent = currentBallanceValue + ' FCFA';
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

const add_5 = document.getElementById("add_5");
const inputContainer_5 = document.getElementById("inputContainer_5");
const newValueInput_5 = document.getElementById("newValue_5");
const okButton_5 = document.getElementById("okButton_5");
let currentBallanceValue_5 = 0;

add_5.addEventListener("click", function () {
    inputContainer_5.style.display = "flex";
    newValueInput_5.focus();
})

okButton_5.addEventListener("click", function () {
    const newValue5 = parseFloat(newValueInput_5.value);

    if (!isNaN(newValue5) && newValue5 > 0) {
        currentBallanceValue += newValue5;
        currentBallance.textContent = currentBallanceValue + ' FCFA';
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

const add_6 = document.getElementById("add_6");
const inputContainer_6 = document.getElementById("inputContainer_6");
const newValueInput_6 = document.getElementById("newValue_6");
const okButton_6 = document.getElementById("okButton_6");
let currentBallanceValue_6 = 0;

add_6.addEventListener("click", function () {
    inputContainer_6.style.display = "flex";
    newValueInput_6.focus();
})

okButton_6.addEventListener("click", function () {
    const newValue6 = parseFloat(newValueInput_6.value);

    if (!isNaN(newValue6) && newValue6 > 0) {
        currentBallanceValue += newValue6;
        currentBallance.textContent = currentBallanceValue + ' FCFA';
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