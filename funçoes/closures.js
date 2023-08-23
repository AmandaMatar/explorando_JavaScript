
var incrementar = (function() {
    var valor = 0;

    return function() { // usando o conceito de closures
        return ++valor;
    }

    /*return ++valor; com o ++ na frente primeiro incrementa depois retorna */
})();

console.log(incrementar());
console.log(incrementar());
console.log(incrementar());