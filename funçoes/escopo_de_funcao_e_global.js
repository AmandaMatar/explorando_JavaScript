// toda variavel declarada fora de uma função ela pertence ao escopo global

var nome = 'Algaworks' // exemplo de uma variavel que pertence ao escopo global

var capitalizar = function() {
    var nome = 'Algaworks'.toUpperCase(); // variavel local a função capitalizar
}

capitalizar();
console.log('nome', nome); // nesse caso responde a linha 3, nesse não sofre a alteração

var capitalizar2 = function() {
    nome = 'Algaworks'.toUpperCase();
}
console.log('nome2', nome); // nesse caso também responde a linha 3, nesse sofre a alteração