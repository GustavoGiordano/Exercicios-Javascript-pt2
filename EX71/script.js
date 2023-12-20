/*71) Crie um programa que leia um número inteiro positivo e exiba todos os divisores desse número. */

const numero = parseInt(prompt("Digite um número inteiro positivo"))
let contadora = 1
let divisores = " "

for (let contadora = 1; contadora <= numero; contadora++) {
    if (numero % contadora === 0) {
        divisores += contadora + " "
    }
}

alert(`Os divisores desse número são${divisores}`)
