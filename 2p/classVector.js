
class Vector {
    constructor(data) {
      this.data = data;
    }
  
    sum(vector) {
      if (this.data.length !== vector.length) {
        return console.log("Los vectores no se pueden sumar");
      }
  
      return this.data.map((item, i) => item + vector[i]);
    }
  
    subt(vector) {
      if (this.data.length !== vector.length) {
        return console.log("Los vectores no se pueden restar");
      }
  
      return this.data.map((item, i) => item - vector[i]);
    }
  
    mul(vector) {
      if (this.data.length !== vector.length) {
        return console.log("Los vectores no se pueden multiplicar");
      }
  
      return this.data.map((item, i) => item * vector[i]);
    }
  
    getVector() {
      return this.data;
    }
  }
  
  (function useVector(){
      let v = new Vector();
      v.sum();
      v.subt();
      v.mul();
      v.getVector();
  })();