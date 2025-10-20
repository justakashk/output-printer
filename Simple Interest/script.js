const principalInput = document.getElementById("principal");
const rateInput = document.getElementById("rate");
const timeInput = document.getElementById("time");
const resultBox = document.getElementById("result");
const calculateButton = document.getElementById("calc");

calculateButton.addEventListener("click", function() {
    const principal = parseFloat(principalInput.value);
    const rate = parseFloat(rateInput.value);
    const time = parseFloat(timeInput.value);

    if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
        resultBox.textContent = "Please enter valid numbers for Principal, Rate, and Time.";
        return;
    }

    const simpleInterest = (principal * rate * time) / 100;
    resultBox.textContent = `Simple Interest: ${simpleInterest.toFixed(2)}`;
});