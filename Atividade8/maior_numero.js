var num1 = (prompt("Digite o 1o número"));
var num2 = (prompt("Digite o 2o número"));
var num3 = (prompt("Digite o 3o número"));

function maior_numero(n1, n2, n3) {
    return Math.max(n1, n2, n3);
}

var maior = maior_numero(num1, num2, num3)

alert("O maior número é: " + maior);


