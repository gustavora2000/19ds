let num = prompt("Escribe el numero: "), Num = parseInt(num,10)

function F(n){
    let x = 1
    for ( let y = 1; y <= n; y++ ) {
        x = x * y
    } 
    return x
}
function NumberC (n) { 
    return F(2 * n) / (F(n+1) * F(n))
}
for (let x = 0; x <Num ; x++) {
    console.log(NumberC(x)) 
}