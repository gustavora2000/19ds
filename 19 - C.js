function metodo (n,a) {
	let total = 1; 
	for (x=1; x<=n; x++) {
        total = (total * x); 
    }
    let suma = n - a, total2 = 1;
    for (x=1; x<=suma; x++) {
        total2 = (total2 * x); 
    }
    let total3 = 1;
    for (x=1; x<=a; x++) {
        total3 = (total3 * x); 
    }
    let formula = (total/total2), formula2 = (formula / total3)
    return formula2;
}
console.log("El resultado es: " + metodo(6,3))