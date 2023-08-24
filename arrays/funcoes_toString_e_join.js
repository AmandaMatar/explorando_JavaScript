var carros = ['Fox', 'Celta', 'Gol'];

var c = carros.toString();
console.log(c);   // com o toString ele vai juntar esses elementos na apresentação com virgula
console.log(typeof c);

console.log(carros.join(' - ')); // com o join você pode escolher como você quer separar, nesse caso com tracinho