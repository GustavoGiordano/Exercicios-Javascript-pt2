/*64) Escreva um programa que calcule o fatorial de um número inteiro inserido pelo usuário usando o loop "do-while".*/

const numero = parseInt(prompt("Digite um valor para saber seu fatorial:"))
let contadora = 1
let fatorial = 1

do {
    fatorial *= contadora
    contadora++
} while (contadora <= numero)

alert(`O fatorial de ${numero} é ${fatorial}`)
