// O(n^2)
function FuncionPrima (n) {
    let num = 2
    let prim = 1

    while (n > 0) {
        prim = 1
        for ( let x = 2; x < num; x++) {
            if (num % x === 0) {
                prim = 0
                break 
            }
        }
        if (prim) {
            console.log(num)
            n--
        }
        num++
    }
}

FuncionPrima(5);