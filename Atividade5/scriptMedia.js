var nome = prompt("Digite seu nome");
var notaUm = parseFloat(prompt("Digite o valor da 1ª nota"));
var notaDois = parseFloat(prompt("Digite o valor da 2ª nota"));
var notaTres = parseFloat(prompt("Digite o valor da 3ª nota"));

var media = (notaUm+notaDois+notaTres) / 3;

alert(nome + " sua média é: " + media);