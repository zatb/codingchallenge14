// Implement a module to calculate monthly loan payments using the formula: M = P[r(1+r)^n]/[(1+r)^n-1].

export function calculateLoanPayment(principal, annualRate, years) {
    const monthlyRate = annualRate / 12;
    const numberOfPayments = years * 12;
    return principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
}
