let n = 10, t = 0;

for (let x = 1; x <= n; x++) {
    t = t +  (x * x)
}

console.log("Con sumatoria es: " + t + "\nCon formula es: " + (n * ( n + 1 ) * ( 2 * n + 1 )) / 6)