// 1ª forma para a construção de um objeto

var livro = new Object();
livro.paginas = 300;
livro.acabamento = "Capa dura";
livro.ano = 2010;

// 2ª forma para a construção de um objeto

var oculos = {};
oculos.cor = "Preto";
oculos.tipo = "Grau";
oculos.marca = "Guess";
oculos.preco = 700;

// 3ª forma para a construção de um objeto

var headset = {
    fio: "Com",
    acabamento: "Courino",
    comprimeto_cabo: 1.2,
    sensibilidade: 102
};

alert("Acabamento do livro: " + livro.acabamento);
alert("Preço do óculos: " + oculos.preco);
alert("Sensibilidade do headset: " + headset.sensibilidade + "dB");