function solve(pages, pagesByhour, deadline) {
let hoursNeeded= pages/pagesByhour;
let hoursPerDay= hoursNeeded/deadline;
console.log(hoursPerDay);
}
solve(432, 15, 4);
solve(212, 20, 2);