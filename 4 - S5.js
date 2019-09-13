//s5 = 1 + a + a^2 ... = ((a^(n+1))-1)/(a-1) ; a != 1
let   n = 10, k = 2, t = 0;

for (let x = 0; x <= n; x++) {
    t = t + Math.pow(k, x);
}

console.log("\nLa sumatoria es : " + t + "\nCon formula es  : " + ((Math.pow(k, (n + 1)) - 1) / (k - 1)));

