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

for (var prop in joao) { // aqui ele nao navega pelas propriedades ele vai direto
    console.log(prop, '->', joao[prop]);
}
