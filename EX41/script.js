/*41) Crie um programa que leia um número inteiro positivo e exiba todos os divisores desse número usando o loop "while".*/

const numero = parseInt(prompt("Insira um número inteiro positivo:"))
let divisor = 1

while (divisor <= numero) {
    if (numero % divisor === 0) {
        alert(divisor)
    }
    divisor++
}
