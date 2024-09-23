const add_2 = document.getElementById("adde");
const inputContainer_2 = document.getElementById("inputContainer_2");
const newValueInput_2 = document.getElementById("newValue_2");
const okButton_2 = document.getElementById("okButton_2");
const historyContainer1 = document.getElementById("historyContainer1");
const historyList1 = document.getElementById("historyList1");
const historyIcon1 = document.getElementById("historyIcon1");
let currentBallanceValue_2 = 0;
let addedAmount1 = [];

add_2.addEventListener("click", function () {
    inputContainer_2.style.display = "flex";
    newValueInput_2.focus();
})

okButton_2.addEventListener("click", function () {
    const newValue2 = parseFloat(newValueInput_2.value);

    if (!isNaN(newValue2) && newValue2 > 0) {
        currentBallanceValue += newValue2;
        currentBallance.textContent = currentBallanceValue + ' FCFA';

        addedAmount1.push(newValue2);
        upDateHistorique();
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

historyIcon1.addEventListener('click', function (e) {
    e.stopPropagation();
    toggleHistory();
});

