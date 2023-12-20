/*53) Crie um programa que exiba os números pares de 1 a 50 usando o loop "do-while". */

let contadora = 2
let acumuladora = ""

do {
    acumuladora += contadora + " "
    contadora += 2
} while (contadora <= 50);

alert(`Números pares de 1 a 50 usando o loop "do-while".\n${acumuladora}`)
