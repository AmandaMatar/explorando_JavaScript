function Carro(nome, placa) {
    this.nome = nome;
    this.placa = placa;
    //this.fabricante = 'VM';
}

Carro.prototype.fabricante = 'VM';
Carro.prototype.ligar = function() {
    console.log('Ligando o carro...');
}

var fox = new Carro('Fox', 'AAA-1111');
console.log('fox', fox);

var gol = new Carro('Gol', 'AAA-2222');
console.log('gol', gol);

console.log('fox.fabricante', fox.fabricante);
console.log('gol.fabricante', gol.fabricante);

fox.ligar();
