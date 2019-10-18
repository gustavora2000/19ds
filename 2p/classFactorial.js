/*Factorial
---------
---------
 constructor(k)
int value()
int cost()
Vector succession()//values
Vector table()//costs
*/
class Factorial {
    constructor(num){
        this.num=num
    }

    getValue(num=this.num) { //parametro default
        function value(num){
        return num<=1 /*caso base*/ ? 1:  num*value(num-1)
        }
        return value(num) //el numero es 1 o menor;
    }

    getCost(num=this.num) {
       let contador=0;
       function value(num){
        if(num <=1){ // caso base
          contador++;
          return num;
        } else{
          contador++;
          return num*value(num-1);
        }
       }
       value(num);
       return contador;
    }


    getSuccesion() {
        let sucesion=[];
        for(let i=1;i<=this.num;i++){
            sucesion.push(this.getValue(i));
        }
        return sucesion;
    }

    getTable() {
        console.log("Numero | Costo | Valor")
        for (let i=1;i<=this.num;i++){
          console.log(`f(${i}) - ${this.getCost(i)} - ${this.getValue(i)}`)
        }
    }
}

(function useFactorial(){
    let f = new Factorial(3);
    f.getValue();
    f.getSuccesion();
    f.getCost();
    f.getTable();
})();
