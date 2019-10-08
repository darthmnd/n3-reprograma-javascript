
//Faça um programa que leia 5 números e informe o maior número.
let maior = 0;
let arr = [2,300,4,67,1];

 for (let i = 0; i < arr.length; i++){
/ if (arr[i] > maior){
maior = (arr[i]);
}
}
console.log(maior);

//O Sr. Manoel Joaquim possui uma grande loja de artigos de R$ 1,99, com cerca de 10 caixas. Para agilizar o cálculo de quanto cada cliente deve pagar ele desenvolveu uma tabela que contém o número de itens que o cliente comprou e ao lado o valor da conta. Desta forma a atendente do caixa precisa apenas contar quantos itens o cliente está levando e olhar na tabela de preços. Você foi contratado para desenvolver o programa que monta esta tabela de preços, que conterá os preços de 1 até 50 produtos.

for (let qtdProdutos = 1; qtdProdutos <=50; qtdProdutos++){
let total = qtdProdutos * 1.99;
console.log(qtdProdutos+ "- R$ " +total);
}

//Faça um programa que peça um número inteiro e determine se ele é ou não um número primo. Um número primo é aquele que é divisível somente por ele mesmo e por 1.
let numero = 71;
let divisores = 0;

for(let i = 1; i <= numero; i++){
  if (numero % i === 0) {
    divisores++
  }
}

  if (divisores === 2){
    console.log(numero + ' é primo');
  } else {
    console.log (numero + ' não é primo');
  }

//Faça uma função que receba uma quantidade x e retorne um array com x números randomicos.

function getRandom(num){
    return Math.floor(Math.random() * num);
}

let array = [];
for (let i = 0; i < 5; i++){
    array.push(getRandom(7));
}

console.log(array);


//Escreva um algoritmo que printe uma pirâmide de números sequenciais no console:

for (let i = 1; i <= 5; i++){
  let linha = "";
  for (let j = 1; j <= i; j++){
    linha +=i;
  }
  console.log(linha);
}
