function Factorial (n) {
    let a = 1

    for ( let x = 1; x <= n; x++ ) {
        a = a * x
    } 

    return a
}
function PosNeg (x) {
  if (x % 2 === 0) return -1;
  else return 1;
};
function senx (x) {
  let suma = 0;
  let a = 15
  for (let y = 1, z = 1; z <= a; y += 2, z++) {
    suma += PosNeg(z) * (Math.pow(x, y) / Factorial(y));
  }
  return suma;
};

console.log(senx(8));