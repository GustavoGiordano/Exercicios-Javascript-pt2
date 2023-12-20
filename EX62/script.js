/*62) Crie um programa que exiba os números ímpares de 1 a 50 usando o loop "do-while". */

let contadora = 1
let acumuladora = " "

do {
    if (contadora % 2 != 0) {
        acumuladora += contadora + " "
    }
    contadora++
} while (contadora <= 50)

alert(`Programa que exibe os números ímpares de 1 a 50\n\n${acumuladora}`)
