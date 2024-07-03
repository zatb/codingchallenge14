// Design a module to calculate the future value of an investment with the formula: A = P(1 + r/n)^(nt)

export function calculateInvestmentReturn(principal, rate, years, compoundsPerYear) {
    return principal * Math.pow(1 + rate / compoundsPerYear, compoundsPerYear * years);
}