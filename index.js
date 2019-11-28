//Basico2 - Orientado a Objeto
let ceuluar = function(){
    this.cor = "prata";
      this.ligar = function(){
          console.log("Uma Ligação!");
          return "Ligando";
      }
}

let objeto = new ceuluar();

console.log(objeto.cor);
console.log(objeto.ligar())
