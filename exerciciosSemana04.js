//Crie um código que retorne a quantidade de pontos que seu time fez de acordo com o resultado do jogo. (Se o seu time venceu, ele recebe 3 pontos. Se o resultado foi empate, ele recebe 1 ponto. Se ele perdeu, não recebe nada.)

let placar = prompt('Digite aqui o resultado: ')


switch (placar){
  
case "Venceu":
    
console.log('Você recebeu 3 pontos, yey!');
    
break;
  
case "Empate":
    
console.log('Você recebeu 1 ponto.');
    
break;
  
case "Perdeu":
    
console.log('Você é fraco, te falta ódio.');
    
break;
  
default:
    
console.log("Opção inválida.");
}



//Palíndromos são palavras ou frases que podem ser lidas da esquerda para a direita ou da direita para a esquerda. Crie uma função que informe se uma palavra é uma palíndromo.

function comparaPalindromo(palavra){
  
let palindromo = palavra.split('').reverse().join('');
  
	if(palindromo === palavra) {
    
	console.log('É um palindromo')
  
	} else {
    
	console.log('Não é um palindromo');
  
	}

}

comparaPalindromo('ovo')


//Faça uma função que dado um número, retorne se ele é par ou ímpar.

function parImpar(numero){

  
  
	if(numero % 2 === 0) {
    
	console.log('Par')
  
	} else {
    
	console.log('Impar');
  
	}

}

parImpar(10)


//Faça uma função que dado um número, retorne a classificação do ângulo. (Ângulo agudo: ângulo com medida maior que 0° menor que 90°; Ângulo reto: ângulo com medida igual a 90°; Ângulo obtuso: ângulo com medida maior que 90° e menor que 180°; Ângulo raso: ângulo com medida igual a 0° ou 180°; Ângulo Côncavo: ângulo com medida entre 180° e 360°; Ângulo completo: ângulo com medida igual a 360°).

function classificarAngulo(angulo){
  
 	if (angulo > 0 && angulo < 90) {
    
		return 'Ângulo Agudo'; 
  
}
  	else if (angulo === 90){
    
		return 'Ângulo Obtuso';
  }
  
   	else if (angulo === 0 || angulo === 180){
    
		return 'Angulo raso';
  
}
  	else if (angulo > 180 && angulo < 360){
    
		return 'Angulo côncavo';
  }
  
	else if (angulo === 360){
    
		return 'Ângulo completo';
  
	} else {
    
		return 'Ângulo Inválido';
  
	}

}


console.log(classificarAngulo())



//Baseado na tabela abaixo, retorne a classificação de um produto.

|Código  |	|Classificação                  |
|1	 |      |Alimento não-perecível         |
|2,3 ou 4|	|Alimento perecível             |
|5 ou 6  |	|Vestuário                      |
|7	 |      |Higiene Pessoal                |
|8 até 15|	|Limpeza e Utensílios Domésticos|
|Outros	 |      |Código inválido                |


function codigoProduto(codigo){
  if (codigo === 1) {
    return 'Alimento Não-Perecível'; 
  }
  else if (codigo >= 2 && codigo <= 4){
    return 'Alimento perecivel';
  }
  else if (codigo === 5 || codigo === 6){
    return 'Vestuário';
  }
  else if (codigo === 7){
    return 'Higiene Pessoal';
  }
  else if (codigo >= 8 && codigo <= 15){
    return 'Limpeza e utensilios domésticos';
  } else {
    return 'Código Inválido';
  }
}

console.log(codigoProduto())


//Baseado na tabela abaixo, escreva um algoritmo que leia o código do item adquirido pelo consumidor e a quantidade, calculando e mostrando o valor a pagar. A mensagem de retorno deve conter o produto, a quantidade e o valor total a pagar.

|Código|      |Produto        |      |Preço Unitário(R$)| 
|100   |      |Cachorro-quente|      |R$1,70            | 
|101   |      |Bauru Simples  |      |R$2,30            |       
|102   |      |Bauru com Ovo  |      |R$2,60            | 
|103   |      |Hamburger      |      |R$2,40            | 
|104   |      |Cheeseburger   |      |R$2,50            | 
|105   |      |Refrigerante   |      |R$1,00            | 


function cardapio(codigoProduto, quantidade){
    let mensagem = '';
  
  switch(codigoProduto){
    case 100:
      mensagem = "Cachorro Quente R$ " +quantidade * 1.70;
    break;
    
    case 101:
      mensagem = "Bauru Simples R$ " +quantidade * 2.30;
    break;
    
    case 102:
      mensagem = "Bauru com Ovo R$ " +quantidade *2.60;
    break;
    
    case 103:
      mensagem = "Hamburguer R$ " +quantidade * 2.40;
    break;
    
    case 104:
      mensagem = "Cheeseburger R$ " +quantidade * 2.50;
    break;   

    case 105:
      mensagem = "Refrigerante R$ " +quantidade *1.00;
    break;
    
    default:
      mensagem = "Opção inválida.";
    break;
  }

    return mensagem;
}
console.log(cardapio(103, 5))total a pagar.



// Escreva um código que receba dois número e determine qual o maior entre eles.

console.log(Math.max(34,30));



//Escreva um código que receba um número (1-7) e devolva o dia da semana correspondente.

function diaSemana(dia){
    let mensagem = '';
  
  switch(dia){
    case 1:
      mensagem = "Segunda";
    break;
    
    case 2:
      mensagem = "Terça";
    break;
    
    case 3:
      mensagem = "Quarta";
    break;
    
    case 4:
      mensagem = "Quinta";
    break;
    
    case 5:
      mensagem = "Sexta";
    break;   

    case 6:
      mensagem = "Sábado";
    break;
    
    case 7:
      mensagem = "Domingo";
    break;

    default:
      mensagem = "Opção inválida.";
      break;
  }

    return mensagem;
}
console.log(diaSemana(10))




//Escreva um código que receba um número (1-12), e diga qual mês e quantos dias ele tem.


function mesDias(dia){
  let mensagem = " ";  
switch(dia){
 case 1:
 mensagem = "Janeiro, 31 dias";
 break;

 case 2:
 mensagem = "Fevereiro, 28 ou 29 dias";
 break;

 case 3:
 mensagem = "Março, 31 dias";
 break;

 case 4:
 mensagem = "Abril, 30 dias";
 break;

 case 5:
 mensagem = "Maio, 31 dias";
 break;

 case 6:
 mensagem = "Junho, 30 dias";
 break;

 case 7:
 mensagem = "Julho, 31 dias";	
 break;

 case 8:
 mensagem = "Agosto, 31 dias";
 break;

 case 9:
 mensagem = "Setembro, 30 dias";
 break;

 case 10:
 mensagem = "Outubro, 31 dias";
 break;

 case 11:
 mensagem = "Novembro, 30 dias";
 break;

 case 12:
 mensagem = "Dezembro, 31 dias";
 break;

default:
 mensagem = "Mês inválido";
 break;
  }
  return mensagem;
}
console.log(mesDias(13));



// Utilizando switch-case, receba uma letra e determine se é uma vogal ou consoante.

function vogalConsoante(letra){
  let mensagem = " "; 
  
switch(letra){
 case 'a':
 mensagem = "É uma vogal!";
 break;

 case 'e':
 mensagem = "É uma vogal!";

 case 'i':
 mensagem = "É uma vogal!";
 break;

 case 'o':
 mensagem = "É uma vogal!";
 break;

 case 'u':
 mensagem = "É uma vogal!";
 break;

default:
 mensagem = "É uma consoante.";
  }
  return mensagem;
}
console.log(vogalConsoante('z'));



//Escreva um código que receba três ângulos e determine se eles formam um triângulo válido. Em um triângulo válido, a soma dos três ângulos é igual a 180º.

function somaTriangulo(angulo1, angulo2, angulo3){
if ((angulo1 + angulo2 + angulo3) = 180)){
return 'Triangulo Válido';
} 

else {
return 'Triangulo Inválido';
  }
  
console.log(somaTriangulo(50,30,20));
}
