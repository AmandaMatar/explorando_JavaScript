var Carro = function(nome, placa) { // o nome da variavel começa com letra maiuscula por convenção por ser uma função construtora
    this.nome = nome;  // o this referencia o objeto que está sendo criado
    this.placa = placa;
    this.fabricante = 'VM';
}

var fox = new Carro('fox', 'AAA-1111');
console.log('fox', fox);