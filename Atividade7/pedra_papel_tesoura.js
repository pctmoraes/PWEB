// pedra = 0 | papel = 1 | tesoura = 2

var player = (prompt("Escreva sua escolha"));

if (player == "pedra"){
    player = 0
}
else if (player == "papel"){
    player = 1
}
else if (player == "tesoura"){
    player = 2
}

function aleatorio(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var computador = aleatorio(0,2)

if ((player == 0 && computador == 2) || (player == 1 && computador == 0) || (player == 2 && computador == 1)){
    alert("Você ganhou :D");
}
else if ((player == 0 && computador == 0) || (player == 1 && computador == 1) || (player == 2 && computador == 2)){
    alert("Houve empate...");
}
else{
    alert("Você perdeu :(");
}


