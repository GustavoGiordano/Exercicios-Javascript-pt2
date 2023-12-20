/*55) Escreva um programa que leia um número inteiro e exiba a tabuada desse número até o décimo valor usando o loop "do-while". */

const numero = parseInt(prompt("Digite um número inteiro"))
let contadora = 1
let tabuada = " "

do {
    tabuada += numero + " x "+ contadora + " = " + (numero * contadora) + "\n"
    contadora++
} while (contadora <= 10);

alert(`Tabuada\n${tabuada}`)
