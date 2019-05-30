/* Pseudo Código

Algoritmo bubbleSort
	var
	   num: vetor[1..3] de real
	   i, j, aux: inteiro

Inicio
    Para i de 1 até 3 passo 1 faça
      Escreva("Digite um número:")
      Leia(num[i])
    fim_para

    Para i de 1 até 3 passo 1 faça
      Para j de i+1 até 3 faça
 	Se (num[i] > num[j]) então {
	  aux <-- num[i]
	  num[i] <-- num[j]
 	  num[j] <-- aux
	fim_se
      fim_para
    fim_para

    Para i de 1 até 3 passo 1 faça
      Escreva(num[i])
    fim_para
Fim
*/

function bubbleSort(arr) {
    let x, y, aux
 
    for(x = 0; x < arr.length; x++) {
        for(y = x + 1; y < arr.length; y++) {
            if (arr[x] > arr[y]) {
                aux = arr[x]
                arr[x] = arr[y]
                arr[y] = aux 
            }
        }
    }
    
    for(x = 0; x < arr.length; x++) {
        console.log(arr[x]) 
    }
}

/* Supondo que:

let testArr = [21, 4, 87, 908, -5, 12, 4, 0, 6, 1]
bubbleSort(testArr)

Resultado:

-5
 0
 1
 4
 4
 6
 12
 21
 87
 908

*/