//Crie um c�digo que retorne a quantidade de pontos que seu time fez de acordo com o resultado do jogo. (Se o seu time venceu, ele recebe 3 pontos. Se o resultado foi empate, ele recebe 1 ponto. Se ele perdeu, n�o recebe nada.)

let placar = prompt('Digite aqui o resultado: ')


switch (placar){
  
case "Venceu":
    
console.log('Voc� recebeu 3 pontos, yey!');
    
break;
  
case "Empate":
    
console.log('Voc� recebeu 1 ponto.');
    
break;
  
case "Perdeu":
    
console.log('Voc� � fraco, te falta �dio.');
    
break;
  
default:
    
console.log("Op��o inv�lida.");
}



//Pal�ndromos s�o palavras ou frases que podem ser lidas da esquerda para a direita ou da direita para a esquerda. Crie uma fun��o que informe se uma palavra � uma pal�ndromo.

function comparaPalindromo(palavra){
  
let palindromo = palavra.split('').reverse().join('');
  
	if(palindromo === palavra) {
    
	console.log('� um palindromo')
  
	} else {
    
	console.log('N�o � um palindromo');
  
	}

}

comparaPalindromo('ovo')


//Fa�a uma fun��o que dado um n�mero, retorne se ele � par ou �mpar.

function parImpar(numero){

  
  
	if(numero % 2 === 0) {
    
	console.log('Par')
  
	} else {
    
	console.log('Impar');
  
	}

}

parImpar(10)


//Fa�a uma fun��o que dado um n�mero, retorne a classifica��o do �ngulo. (�ngulo agudo: �ngulo com medida maior que 0� menor que 90�; �ngulo reto: �ngulo com medida igual a 90�; �ngulo obtuso: �ngulo com medida maior que 90� e menor que 180�; �ngulo raso: �ngulo com medida igual a 0� ou 180�; �ngulo C�ncavo: �ngulo com medida entre 180� e 360�; �ngulo completo: �ngulo com medida igual a 360�).

function classificarAngulo(angulo){
  
 	if (angulo > 0 && angulo < 90) {
    
		return '�ngulo Agudo'; 
  
}
  	else if (angulo === 90){
    
		return '�ngulo Obtuso';
  }
  
   	else if (angulo === 0 || angulo === 180){
    
		return 'Angulo raso';
  
}
  	else if (angulo > 180 && angulo < 360){
    
		return 'Angulo c�ncavo';
  }
  
	else if (angulo === 360){
    
		return '�ngulo completo';
  
	} else {
    
		return '�ngulo Inv�lido';
  
	}

}


console.log(classificarAngulo())



//Baseado na tabela abaixo, retorne a classifica��o de um produto.

|C�digo  |	|Classifica��o                  |
|1	 |      |Alimento n�o-perec�vel         |
|2,3 ou 4|	|Alimento perec�vel             |
|5 ou 6  |	|Vestu�rio                      |
|7	 |      |Higiene Pessoal                |
|8 at� 15|	|Limpeza e Utens�lios Dom�sticos|
|Outros	 |      |C�digo inv�lido                |


function codigoProduto(codigo){
  if (codigo === 1) {
    return 'Alimento N�o-Perec�vel'; 
  }
  else if (codigo >= 2 && codigo <= 4){
    return 'Alimento perecivel';
  }
  else if (codigo === 5 || codigo === 6){
    return 'Vestu�rio';
  }
  else if (codigo === 7){
    return 'Higiene Pessoal';
  }
  else if (codigo >= 8 && codigo <= 15){
    return 'Limpeza e utensilios dom�sticos';
  } else {
    return 'C�digo Inv�lido';
  }
}

console.log(codigoProduto())


//Baseado na tabela abaixo, escreva um algoritmo que leia o c�digo do item adquirido pelo consumidor e a quantidade, calculando e mostrando o valor a pagar. A mensagem de retorno deve conter o produto, a quantidade e o valor total a pagar.

|C�digo|      |Produto        |      |Pre�o Unit�rio(R$)| 
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
      mensagem = "Op��o inv�lida.";
    break;
  }

    return mensagem;
}
console.log(cardapio(103, 5))total a pagar.



// Escreva um c�digo que receba dois n�mero e determine qual o maior entre eles.

console.log(Math.max(34,30));



//Escreva um c�digo que receba um n�mero (1-7) e devolva o dia da semana correspondente.

function diaSemana(dia){
    let mensagem = '';
  
  switch(dia){
    case 1:
      mensagem = "Segunda";
    break;
    
    case 2:
      mensagem = "Ter�a";
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
      mensagem = "S�bado";
    break;
    
    case 7:
      mensagem = "Domingo";
    break;

    default:
      mensagem = "Op��o inv�lida.";
      break;
  }

    return mensagem;
}
console.log(diaSemana(10))




//Escreva um c�digo que receba um n�mero (1-12), e diga qual m�s e quantos dias ele tem.


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
 mensagem = "Mar�o, 31 dias";
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
 mensagem = "M�s inv�lido";
 break;
  }
  return mensagem;
}
console.log(mesDias(13));



// Utilizando switch-case, receba uma letra e determine se � uma vogal ou consoante.

function vogalConsoante(letra){
  let mensagem = " "; 
  
switch(letra){
 case 'a':
 mensagem = "� uma vogal!";
 break;

 case 'e':
 mensagem = "� uma vogal!";

 case 'i':
 mensagem = "� uma vogal!";
 break;

 case 'o':
 mensagem = "� uma vogal!";
 break;

 case 'u':
 mensagem = "� uma vogal!";
 break;

default:
 mensagem = "� uma consoante.";
  }
  return mensagem;
}
console.log(vogalConsoante('z'));



//Escreva um c�digo que receba tr�s �ngulos e determine se eles formam um tri�ngulo v�lido. Em um tri�ngulo v�lido, a soma dos tr�s �ngulos � igual a 180�.

function somaTriangulo(angulo1, angulo2, angulo3){
if ((angulo1 + angulo2 + angulo3) = 180)){
return 'Triangulo V�lido';
} 

else {
return 'Triangulo Inv�lido';
  }
  
console.log(somaTriangulo(50,30,20));
}
