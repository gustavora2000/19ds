let x = 5, a = 4, t = 0;

for (let y = 0; y <= x; y++) {
    t = t + Math.pow(a, y);
}

console.log("\nLa sumatoria es: " + t + "\nCon formula es: " + (Math.pow(a, x + 1) - 1) / (a - 1));
