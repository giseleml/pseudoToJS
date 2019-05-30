/* Pseudo Código

Algoritmo pesoIdeal
    var
        altura: real
        sexo: caractere[1]
Inicio
    Escreva("Qual o seu sexo? Digite F para Feminino ou M para Masculino.")
    Leia(altura)
    Se (sexo = 'F') então
        Escreva("Seu peso ideal é", (62.1 * altura) - 44.7)
    Fim_se
    Se (sexo = 'M') então
        Escreva("Seu peso ideal é", (72.7 * altura) - 58)
    Fim_se
Fim.
*/

function pesoIdeal() {
    let sexo = prompt("Você é do sexo Feminino ou Masculino? Digite 'F' para Feminino ou 'M' para masculino")
    if (sexo !== 'F' || sexo !== 'M') { 
    	console.log("Digite 'F' para Feminino ou 'M' para Masculino.")
    }
    
    let altura = prompt("Qual é a sua altura?") 
    
     if (sexo === 'F') {
        console.log("Seu peso ideal é: ", (62.1 * altura) - 44.7) 
    } else {
            console.log("Seu peso ideal é: ", (72.7 * altura) - 58)
    }
}