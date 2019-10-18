
function Resultante (n) {
	let All = 1; 
	for (x=1; x<=n; x++) {
		All = All * x; 
	}
	return All; 
}
let f = 0
let x=1

for(let y = 0; y <= 9;y++){
    f += Math.pow(x,y)/Resultante(y)

}

console.log("Con formula es: "  + f)

