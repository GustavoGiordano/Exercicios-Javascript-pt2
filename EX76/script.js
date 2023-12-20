/*76) Escreva um programa que leia um número inteiro e exiba a soma de todos os números pares entre 1 e o número lido.*/

let numero = parseInt(prompt("Insira um número inteiro:"))
let soma = 0

for (let contadora = 2; contadora <= numero; contadora += 2) {
    soma += contadora
}

alert(`O somatório dos valores pares existentes na faixa de 1 até ${numero} é ${soma}`)
