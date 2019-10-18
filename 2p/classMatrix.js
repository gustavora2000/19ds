class Matrix {
    constructor(row, columns) {
      this.row = row;
      this.columns = columns;
      this.data = this.init();
    }
  
    init() {
      const vec = [];
  
      for (let i = 0; i < this.row; i++) {
        vec[i] = new Array(this.columns);
  
        for (let j = 0; j < this.columns; j++) {
          vec[i][j] = 0;
        }
      }
  
      return vec;
    }
  
    initRandom() {
      for (let i = 0; i < this.row; i++) {
        this.data[i] = new Array(this.columns);
  
        for (let j = 0; j < this.columns; j++) {
          this.data[i][j] = Math.random();
        }
      }
  
      return this.data;
    }
  
    getRow(r) {
      if (r > this.row) {
        return console.log("Fuera del rango");
      }
  
      return this.data[r];
    }
  
    getColumn(c) {
      const temp = [];
  
      if (c > this.columns) {
        return console.log("Fuera del rango");
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
      m.init();
      m.initRandom();
      m.getRow(0);
      m.getColumn(0);
      m.isSquared();
      m.isSymmetric();
      m.isIdentity();
      m.getMatrix();
  })();