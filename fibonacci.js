/* Pseudo Código

Função fibonacci(N: inteiro) : inteiro
    var fib, i, j, k : inteiro
Inicio
    k <-- 1
    fib <-- 0
    Para i de 1 até N passo 1 faça
        j <-- fib + k
        fib <-- k
        k <-- j
        retorne fib
    Fim_para
Fim_Função

*/

function fibonacci(num) {
    let fib, i, j, k
    
    k = 1 
    fib = 0
    
    for (i = 0; i <= num; i++) {
        j = fib + k 
        fib = k 
        k = j 
   		console.log(fib)
    }
}

/* Supondo que num seja 10, o console será: 

 1
 1
 2
 3
 5
 8
 13
 21
 34
 55
 89

*/