var percentualImposto = 0.15;
var totalImposto = valor * percentualImposto;

console.log('Total imposto a pagar', totalImposto);

var valor = 100;

// HOISTING -- sequencia de como ele vai ler esse código

/*
var percentualImposto, totalImposto, valor;
percentualImposto = 0.15;
totalImposto = valor * percentualImposto;

console.log('Total imposto a pagar', totalImposto);

valor = 100;
*/