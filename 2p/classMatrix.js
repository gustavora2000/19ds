class Matrix {
    constructor(row, columns) {
      this.row = row;
      this.columns = columns;
      this.data = this.init();
    }
    init() {
      const vec = [];
  
      for (let x = 0; x < this.row; x++) {
        vec[x] = new Array(this.columns);
  
        for (let y = 0; y < this.columns; y++) {
          vec[x][y] = 0;
        }
      }
  
      return vec;
    }
    initRandom() {
      for (let x = 0; x < this.row; x++) {
        this.data[x] = new Array(this.columns);
  
        for (let y = 0; y < this.columns; y++) {
          this.data[x][y] = Math.random();
        }
      }
      return this.data;
    }
    getRow(r) {
      if (r > this.row) {
        return Error
      }
      return this.data[r];
    }
    getColumn(c) {
      const temp = [];
  
      if (c > this.columns) {
        return Error
      }
  
      for (let i = 0; i < this.row; i++) {
        temp.push(this.data[i][c]);
      }
  
      return temp;
    }
  
    isSquared() {
      if (this.columns === this.row) {
        return true;
      }
  
      return false;
    }
  
    isSymmetric() {

      this.isSquared();
      for (let i = 0; i < this.row; i++) {
        for (let j = 0; j < this.columns; j++) {
          if (this.data[i][j] != this.data[j][i]) {
            return false;
          }
        }
      }
  
      return true;
    }
  
    isIdentity() {
      this.isSymmetric();
  
      for (let i = 0; i < this.row; i++) {
        if (this.data[i][i] !== 1) {
          return false;
        }
      }
  
      return true;
    }
  
    getMatrix() {
      return this.data;
    }
  }

  (function useMatrix(){
      let m = new Matrix(5,5);
      console.log("________Inicializacion en 0_______")
      console.log(m.init());
      console.log("_____Inicializacion en Random_____")
      console.log(m.initRandom());
      console.log("___________Row No. 0___________")
      console.log(m.getRow(0));
      console.log("___________Colum No. 0_________")
      console.log(m.getColumn(0));
      console.log("____________Is Square__________")
      console.log(m.isSquared());
      console.log(m.isSymmetric());
      console.log(m.isIdentity());
      console.log(m.getMatrix());
  })();