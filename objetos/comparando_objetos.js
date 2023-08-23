var joao = {
    nome: 'João',
    idade: 25,
    email: 'teste@email.com',
    igualA: function(obj) {
        return this.email === obj.email; // uso o this para definir que a propriedade que eu quero está dentro desse escopo
    }
}

var maria = {
    nome:'Maria',
    idade: 27,
    email: 'teste2@email.com',
    igualA: function(obj) {
        return this.email === obj.email;
    }
}

console.log(joao === maria);
console.log('João e Maria tem os mesmos emails?', joao.igualA(maria));