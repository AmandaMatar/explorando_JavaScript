var fox = {cor: 'prata', modelo: 'Fox', fabricante: 'VW'}
console.log('fox', fox);
console.log(typeof fox);

console.log('Cor do fox:', fox.cor);
// pintando o fox
fox.cor = 'Branco';
console.log('Fox depois de pintado', fox);
console.log('Modelo:', fox['modelo']);

fox.peso = 1100;
console.log(fox);

// adicionando uma propriedade que não existe vai retornar undefined:
console.log('Potencia', fox.potencia);

fox.ligar = function() { console.log('Ligando o carro!' );};
console.log(fox);
fox.ligar();

// outra forma de fazer:
var celta = {
    cor: 'branco',
    modelo: 'celta',
    fabricante: 'GM',
    ligar: function() {
        console.log('Ligando o carro!');
    }
};

console.log('celta', celta);


