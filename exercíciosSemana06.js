// //inverter ordem do console.log
// const arr = [1,2,3,4,5,6]

// for(let i = arr.length - 1 ; i >= 0; i--){
//       console.log(arr[i])
// }


// //localizar óndice de ítem da array
// const arr = [1,2,3,4,5,6]

// for(let i = 0 ; i < arr.length; i++){
//       console.log(arr[i])
// }

// //Escreva uma função comprimentoMedioPalavras que receba duas strings e devolva o comprimento m�dio de ambas as strings.
// function comprimentoMedioPalavras(a,b){
//       return (a.length + b.length) / 2
      
// }
// console.log(comprimentoMedioPalavras('Xuxu', 'Bananada'))


// Escreva uma função chamada pegaElemento.
// Dado um array e um inteiro, pegaElemento devolve o valor de acordo com o inteiro dado, dentro do array fornecido.
// Se o array tiver um comprimento de 0, ele deve retornar undefined.

// Exemplo de entrada:
// console.log(pegaElemento([1, 3, 5], 1);

// function pegaElemento(arr, num){
//     for (let i = 0; i <= arr.length; i++){
//         if (i === num){
//             return(arr[i])  
//         }
//     }
// }
// console.log(pegaElemento([],3))

// Escreva uma função chamada credencialEhValida.
// Dado um nome e uma senha, credencialEhValida retorna true se o nome contiver mais do que 3 caracteres e a senha, pelo menos 8 caracteres. Caso contrário, retorna false.

// Exemplo:
// console.log(credencialEhValida('Xuxu', 'minhasenha'));

// function credencialEhValida(nome, senha){
//     if (nome.length >= 3 && senha.length >= 8){
//         return true;
//     } else {
//         return false;
//         }
// }
// console.log(credencialEhValida('Amanda', '12345678'))

// Escreva uma função que receba uma array como parâmetro e devolva outra, mas sem elementos repetidos.

// function removeValue(arr) {
//     const newArr= []
//     for(let i = 0; i < arr.length; i++){
//         for(let j = 1; j < arr.length; j++){
          
//             if (arr.indexOf(arr[i]) != (newArr.indexOf(arr[j]))){
//                 newArr.push(arr)
//             }
//         } 
//         return newArr;
//     } 
// }
// console.log([ 45, 765, 23, 76, 43, 65, 2345, 677, 5, 34, 22, 546, 77, 4355, 5667, 45, 56, 7, 4, 755, 45]


/* VALIDAÇÃO DE CARTÃO DE CRÉDITO (ALGORITMO DE LUHN)
Nesse exercício, você fará a validação de números de cartão de crédito utilizando o algoritmo de Luhn:
1) Retire o último dígito do número. Ele é o verificador;
2) Escreva os números na ordem inversa;
3) Multiplique os dígitos das casas ímpares por 2 e subtraia 9 de todos os resultados maiores que 9;
4) Some todos os números;
5) O dígito verificador (aquele do passo 1) é o número que você precisa somar a todos os outros números somados pra obter um módulo 10.
6) O cartão será válido se os números somados % 10 === 0.
*/

////////////////////////////

// let cartao = '4532841148586221'
// let resultado = cartao.split('')
// let ultimoDigito = resultado.pop()
//     resultado.reverse()
//     resultado.forEach(function digitosImpares(digitos){
//         let i = 0;
//         if (i % 2 === 1){
//             resultado[i] *= 2
//             return resultado
//         }
//         console.log(resultado)
//     })


