// U36432650

import { calculateInterest } from './interestRate.js';
import { calculateLoanPayment } from './loanPayment.js';
import { calculateInvestmentReturn } from './investmentReturn.js';

document.getElementById('calculate-interest').addEventListener('click', () => {
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const time = parseFloat(document.getElementById('time').value);

    const interest = calculateInterest(principal, rate, time);
    document.getElementById('interest-result').textContent = `Interest: ${interest.toFixed(2)}`;
});

document.getElementById('calculate-loan').addEventListener('click', () => {
    const principal = parseFloat(document.getElementById('loan-principal').value);
    const annualRate = parseFloat(document.getElementById('loan-rate').value);
    const years = parseFloat(document.getElementById('loan-years').value);

    const monthlyPayment = calculateLoanPayment(principal, annualRate, years);
    document.getElementById('loan-result').textContent = `Monthly Payment: ${monthlyPayment.toFixed(2)}`;
});

document.getElementById('calculate-investment').addEventListener('click', () => {
    const principal = parseFloat(document.getElementById('investment-principal').value);
    const rate = parseFloat(document.getElementById('investment-rate').value);
    const years = parseFloat(document.getElementById('investment-years').value);
    const compoundsPerYear = parseFloat(document.getElementById('compounds-per-year').value);

    const futureValue = calculateInvestmentReturn(principal, rate, years, compoundsPerYear);
    document.getElementById('investment-result').textContent = `Future Value: ${futureValue.toFixed(2)}`;
});
