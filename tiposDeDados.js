//Crie uma função que dado um número seja retornado o número reverso. Ex.: dado 1234, devolve 4321.

function inverterNumero(numero) {
  
	return numero.toString().split('').reverse() .join('');

}


console.log(inverterNumero(1234));


//Crie uma função que recebe uma palavra e ordena suas letras em ordem alfabética.

function ordenarLetras(palavra) {
  
	return palavra.toString().split('').sort().join('');
}


console.log(ordenarLetras('Amanda'));


//Crie uma função que receba uma string, contendo nome e sobrenome, e retorne as inicias.

function letraInicial(nomeSobrenome){  
  
	let letra1 = nomeSobrenome.substr(0,1);
  
  
	let posicaoEspaco = nomeSobrenome.indexOf(' ');
  
	let letra2 = nomeSobrenome.substr(posicaoEspaco+1, 1);
  
  
	return letra1 + letra2;

}

console.log(letraInicial("Sarah Silva"));


//Crie uma função que receba a quantidade de bilhetes vendidos em um concurso e sorteie um bilhete.

function sorteio(min, max) {
  
	return Math.floor((Math.random() * (max - min)) + min);

}

console.log(sorteio(0, 10));


//Altere a função que calcula IMC de maneira que o valor do IMC tenha apenas duas casas decimais.

function calcularIMC(altura,peso){
  
	let IMC = peso/(altura*altura);
  
	return IMC;
  

}

console.log(calcularIMC(1.55,50));
