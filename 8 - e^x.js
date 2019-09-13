let z = prompt("Dame un numero "), EX = parseInt(z,10), formula1 = Math.exp();

console.log("Formula es: " + formula1);

function Result (n) {
	let All = 1; 
	for (x=1; x<=n; x++) {
		All = All * x; 
	}
	return All; 
}
let formula2 = 0

for(let x = 0; x <= 9; x++){
    formula2 = formula2 + (Math.pow(EX,x)/Result(x))
}

console.log("Formula es: " + formula2); 