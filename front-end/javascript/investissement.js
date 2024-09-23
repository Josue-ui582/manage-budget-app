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