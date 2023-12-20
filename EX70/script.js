/*70) Escreva um programa que leia um número inteiro e exiba a tabuada desse número até o décimo valor. */

const numero = parseInt(prompt("Digite um número inteiro"))
let contadora = 1
let tabuada = " "

for (let contadora = 1; contadora <= 10; contadora++) {
    tabuada += numero + " x " + contadora + " = " + (numero * contadora) + "\n"
}

alert(`Tabuada\n${tabuada}`)
