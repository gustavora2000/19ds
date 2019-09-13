let n = 10, k = 2, t1 = 0, t0 = 0;

for (let x = 1; x <= n; x++) {
    t1+= Math.pow(x, k)
}
t0 = k + 1

console.log("\nLa sumatoria es: " + t1 + "\nCon formula es : " + ((1 / t0) * (Math.pow(n, t0))))
