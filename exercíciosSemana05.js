
//Fa�a um programa que leia 5 n�meros e informe o maior n�mero.
let maior = 0;
let arr = [2,300,4,67,1];

 for (let i = 0; i < arr.length; i++){
/ if (arr[i] > maior){
maior = (arr[i]);
}
}
console.log(maior);

//O Sr. Manoel Joaquim possui uma grande loja de artigos de R$ 1,99, com cerca de 10 caixas. Para agilizar o c�lculo de quanto cada cliente deve pagar ele desenvolveu uma tabela que cont�m o n�mero de itens que o cliente comprou e ao lado o valor da conta. Desta forma a atendente do caixa precisa apenas contar quantos itens o cliente est� levando e olhar na tabela de pre�os. Voc� foi contratado para desenvolver o programa que monta esta tabela de pre�os, que conter� os pre�os de 1 at� 50 produtos.

for (let qtdProdutos = 1; qtdProdutos <=50; qtdProdutos++){
let total = qtdProdutos * 1.99;
console.log(qtdProdutos+ "- R$ " +total);
}

//Fa�a um programa que pe�a um n�mero inteiro e determine se ele � ou n�o um n�mero primo. Um n�mero primo � aquele que � divis�vel somente por ele mesmo e por 1.
let numero = 71;
let divisores = 0;

for(let i = 1; i <= numero; i++){
  if (numero % i === 0) {
    divisores++
  }
}

  if (divisores === 2){
    console.log(numero + ' � primo');
  } else {
    console.log (numero + ' n�o � primo');
  }

//Fa�a uma fun��o que receba uma quantidade x e retorne um array com x n�meros randomicos.

function getRandom(num){
    return Math.floor(Math.random() * num);
}

let array = [];
for (let i = 0; i < 5; i++){
    array.push(getRandom(7));
}

console.log(array);


//Escreva um algoritmo que printe uma pir�mide de n�meros sequenciais no console:

for (let i = 1; i <= 5; i++){
  let linha = "";
  for (let j = 1; j <= i; j++){
    linha +=i;
  }
  console.log(linha);
}
