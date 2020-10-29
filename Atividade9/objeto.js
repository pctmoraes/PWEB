class Retangulo{
    constructor(x,y){
        this.base = x;
        this.altura = y;
    }

    area(){
        return this.base * this.altura;
    }
} 

var base = (prompt("Digite a base do retângulo"));
var altura = (prompt("Digite a altura do retângulo"));

var novoRetangulo = Retangulo(base,altura); 
var area = novoRetangulo.area();

alert("Area = " + area);