/*51) Faça um programa que exiba os números de 1 a 10 usando o loop "do-while". */

let contadora = 1
let acumuladora = ""

do {
    acumuladora += contadora + " "
    contadora++
} while (contadora <= 10);

alert(`Números de 1 a 10 usando o loop "do-while \n${acumuladora}`)
