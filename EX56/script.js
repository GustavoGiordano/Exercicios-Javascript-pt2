/*56) Crie um programa que leia um número inteiro positivo e exiba todos os divisores desse número usando o loop "do-while".*/

const numero = parseInt(prompt("Digite um número inteiro positivo"))
let contadora = 1
let divisores = " "

do {
    if (numero % contadora === 0) {
        divisores += contadora + " "
    }
    contadora++
} while (contadora <= numero);

alert(`Os divisores desse número são${divisores}`)
