//tipos primitivos

//typeof mostra o tipo da variável
//boleanos
var vOuf = false;
console.log(typeof (vOuf) );

//number
var umNumero = 1;
console.log(typeof(umNumero));

//string
var nome = "shirlei";
console.log(typeof(nome));


var variavel = 'Shirlei';
variavel = 'Gabriel';
console.log(variavel);

let variavel2 = 'shirlei';
//variavel2 = 'Gabriel';
console.log(variavel2);

const constante = 'shirlei';
console.log(constante);
//se mudarmos o valor, ela irá retornar um erro.

console.log('--------')

var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopoLocal() {
    let escopoLocalInterno = 'local';
    console.log(escopoLocalInterno);
    }
escopoLocal();

console.log('--------')

var adicao = 1 + 1;
console.log(adicao);

var subtracao = 2 - 1;
console.log(subtracao);

var multiplicacao = 2 * 3;
console.log(multiplicacao);

var divisaoReal = 6 / 2;
console.log(divisaoReal);

var divisaoInteira = 5 % 2;
console.log(divisaoInteira);

var potencicao = 2 ** 10;
console.log(potencicao);


console.log('--------')

var maiorque = 5 > 2;
console.log(maiorque);

var menorque = 5 < 2;
console.log(menorque);

var maiorOuIgual = 5 >= 2;
console.log(maiorOuIgual);

var menorOuIgual = 5 <= 5;
console.log(menorOuIgual);

console.log('--------')

var e = true && false;
console.log(e);

var ou = true || false;0
console.log(ou);

var nao = !true;
console.log(nao);

console.log('--------')

let array = ['string', 1, true, false, ['array1'], ['array2'], ['array3'],['array4']];
console.log(array);

//forEach
array.forEach(function(item, index){
    console.log (item, index)
});

//push
array.push('novo item');
console.log(array)

//pop - apaga um item do final
array.pop();
console.log(array);

//shift - apaga um item do inicio
array.shift();
console.log(array);

//adiciona um item no inicio
array.unshift('novo item no inicio');
console.log(array)

//retorna o indice 
console.log(array.indexOf(true));

//apaga alguns itens do array
array.splice(array, 3);
console.log(array);

let novoArray = array.slice(0,3);
console.log(novoArray);
