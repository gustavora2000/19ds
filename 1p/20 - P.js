function factorial (n) {
    let a = 1
    for ( let x = 1; x <= n; x++ ) {
        a = a * x
    } 
    return a
}
function metodoP (n, a) {
    return (factorial(n)) / factorial((n - a))
}
console.log(metodoP(10, 4))