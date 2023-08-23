var joao = {
    nome: 'João',
    idade: 25,
    endereco: {
        logradouro: 'Av Brasil',
        numero: 100,
        complemento: 'Apto 202',
        cidade: 'Rio de Janeiro',
        estado: 'RJ'
    }
}

console.log(joao);
delete joao.idade; //colocar delete e na frente a propriedade que quer apagar 
console.log('->', joao);

delete joao['endereco'].estado;
console.log('-->', joao);
