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