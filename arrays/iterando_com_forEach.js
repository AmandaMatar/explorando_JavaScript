var nomes = ['João', 'Pedro', 'Maria', 'José'];

for (var i = 0; i <nomes.length; i++) {
    console.log('nomes[', i, ']=', nomes[i]);
}

nomes.forEach(function(e) {                 // foreach é uma função e dentro do parentesis abre outra função
    console.log(e);
});
                            