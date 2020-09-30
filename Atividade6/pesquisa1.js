var idades = [];
var soma = 0;
var media = 0;
var pessoaMaisVelha = 0;
var pessoaMaisNova = 0;
var qtdPessimo = 0;
var qtdOtimoEbom = 0;
var percentOtimoEbom = 0;
var qtdMulheres = 0;
var qtdHomens = 0;


for (var cont = 1; cont < 4; cont++) {
    var idade = parseFloat(prompt("Digite sua idade"));
    var sexo = prompt("Digite seu sexo (M ou F)");
    var opiniao = prompt("Digite sua opinião");

    idades.push(idade);
    soma += idade;

    if (opiniao == 1) {
        qtdPessimo++;
    }
    else if (opiniao == 4 || opiniao == 3) {
        qtdOtimoEbom++;
    }
    if (sexo == "M") {
        qtdMulheres++;
    }
    else {
        qtdHomens++;
    }
}

media = soma / idades.length;
pessoaMaisVelha = idades.reduce(function(a, b) {
    return Math.max(a, b);
});
pessoaMaisNova = idades.reduce(function(a, b) {
    return Math.min(a, b);
});
percentOtimoEbom = (qtdOtimoEbom / idades.length) * 100;

alert("Média da idade dos entrevistados: " + media);
alert("Idade da pessoa mais velha: " + pessoaMaisVelha);
alert("Idade da pessoa mais nova: " + pessoaMaisNova);
alert("Quantidade que responderam péssimo : " + qtdPessimo);
alert("Quantidade que responderam ótimo e bom: " + percentOtimoEbom + "%");
alert("Quantidade de entrevistadas mulheres : " + qtdMulheres);
alert("Quantidade de entrevistados homens : " + qtdHomens);
