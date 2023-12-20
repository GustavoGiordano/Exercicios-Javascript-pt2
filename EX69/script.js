/*69) Faça um programa que leia 5 números inteiros e exiba a média aritmética dos valores lidos. */

let soma = 0

for (let contadora = 1; contadora <= 5; contadora++) {
    let numero = parseInt(prompt("Digite um número inteiro"))
    soma += numero
}

const media = soma / 5

alert(`A média aritmética dos valores lidos é \n${media}`)
