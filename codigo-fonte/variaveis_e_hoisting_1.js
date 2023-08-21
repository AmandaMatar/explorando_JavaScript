var percentualImposto = 0.15;
var valor = 100;
var totalImposto = valor * percentualImposto;

console.log('Total importo a pagar', totalImposto);

// HOISTING -- leva pra tudo que for declaração de variável para a primeira linha do arquivo.

/*
var percentualImposto, valor, totalImposto;
percentualImposto = 0.15;
valor = 100;
totalImposto = valor * percentualImposto;

console.log('Total imposto a pagar', totalImposto);
*/