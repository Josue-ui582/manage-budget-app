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
    currentBallance.textContent = "0f";
})

document.addEventListener("click", function (e) {
    const isClickInside = add.contains(e.target) || inputContainer.contains(e.target);
    if (!isClickInside) {
        inputContainer.style.display = "none"
    }
});

