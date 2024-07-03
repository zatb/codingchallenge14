export function calculateLoanPayment(principal, annualRate, years) {
    const monthlyRate = annualRate / 12;
    const numberOfPayments = years * 12;
    return principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
}
