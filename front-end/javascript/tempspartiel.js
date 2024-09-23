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