//inverter ordem do console.log
const arr = [1,2,3,4,5,6]

for(let i = arr.length - 1 ; i >= 0; i--){
      console.log(arr[i])
}


//localizar �ndice de �tem da array
const arr = [1,2,3,4,5,6]

for(let i = 0 ; i < arr.length; i++){
      console.log(arr[i])
}

//Escreva uma fun��o comprimentoMedioPalavras que receba duas strings e devolva o comprimento m�dio de ambas as strings.
function comprimentoMedioPalavras(a,b){
      return (a.length + b.length) / 2
      
}
console.log(comprimentoMedioPalavras('Xuxu', 'Bananada'))
