class Fibonacci {
    constructor(numero) {
        this.numero = numero;
    }
    getValue(numero = this.numero) {
        function value(numero){
            if(numero < 2){
                return numero;
            } else {
                return value(numero-1) + value(numero-2);
            }
        }
        return value(numero);
    }
    
    getCost(numero = this.numero) {
        let contador= 0;
        function value(numero){
            if(numero < 2){
                contador++;
            } else {
                contador++;
                return value(numero-1) + value(numero-2);
            }
        }
        value(numero);
        return contador;
    }

    getSucesion() {
        let sucesion = [];
        for (let i = 1; i <= this.numero; i++) {
            sucesion.push(this.getValue(i));
        }
        return sucesion;
    }

    getTable() {
        console.log("  NUMBER  COST  VALUE ");
        for(let i = 0; i <= this.numero; i++){
            console.log(`    ${i}       ${this.getCost(i)}      ${this.getValue(i)}`);
        }
    }
}

(function useFibonacci(){
    let n = new Fibonacci(6);
    console.log(n.getValue());
    console.log(n.getSucesion());
    console.log(n.getCost());
    console.log(n.getTable());
})();
