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

console.log('Cidade que o João mora', joao.endereco.cidade);

joao.endereco.numero = 101 // alterando o numero
console.log(joao);

console.log(joao.endereco.cep); // propriedade que não existe dá undefined

console.log('Estado', joao['endereco']['estado']); // acesso dinamico