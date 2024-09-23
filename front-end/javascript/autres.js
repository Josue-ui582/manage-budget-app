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