/*52) Escreva um programa que calcule a soma dos números de 1 a 100 usando o loop "do-while". */

let contadora = 1
let soma = 0

do {
    soma += contadora
    contadora++
} while (contadora <= 100);

alert(`soma dos números de 1 a 100 usando o loop "do-while"\n${soma}`)
