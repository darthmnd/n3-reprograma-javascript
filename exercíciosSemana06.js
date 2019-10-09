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

const arr = [ 45, 765, 23, 76, 43, 65, 2345, 677, 5, 34, 22, 546, 77, 4355, 5667, 45, 56, 7, 4, 755, 45]
function numerosVarios(array) {
    for(let i = 0; i < array.length; i++){
        console.log('loop i', array[i])
        for(let j = 1; j < array.length; j++){
            console.log('loop j'), array[j]
            
        }
        
    } 
}
console.log(numerosVarios(arr))
