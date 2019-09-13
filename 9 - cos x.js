//9. cos x	 = 1 - x^2/2! + x^4/4! - x^6/6! + ...
function Factorial (n) {
    let r = 1

    for ( let x = 1; x <= n; x++ ) {
        r = r * x
    } 

    return r
}

function PosNeg (i) {
  if (i % 2 === 0) return -1;
  else return 1;
};
function cosx (x) {
  let suma = 1
  let a = 15

  for (let y = 2, z = 2; z <= a; y += 2, z++) {
    suma = suma + PosNeg(z) * (Math.pow(x, y) / Factorial(y));
  }
  return suma;
};

console.log(cosx(10));