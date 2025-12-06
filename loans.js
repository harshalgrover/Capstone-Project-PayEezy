
const loanSlider = document.getElementById("loanSlider");
const loanLabel = document.getElementById("loanLabel");
const loanTerm = document.getElementById("loanTerm");
const monthlyPay = document.getElementById("monthlyPay");

const annualInterest = 8;

function calculateEMI(amount, months, rate) {
    let monthlyRate = rate / 12 / 100;
    let emi =
        (amount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1);

    return emi.toFixed(2);
}

function updateCalculator() {
    const amount = parseInt(loanSlider.value);
    const months = parseInt(loanTerm.value);

    loanLabel.innerText = `Loan Amount: $${amount.toLocaleString()}`;

    const emi = calculateEMI(amount, months, annualInterest);

    monthlyPay.innerText = `$${emi}`;
}

loanSlider.addEventListener("input", updateCalculator);
loanTerm.addEventListener("change", updateCalculator);
updateCalculator();





