// Diferencia al while normal es que la condición se ejecuta al final

let i = 2;
// while(i < 2) {
//     if (i % 2 == 0) {
//         console.log('Numero par', i);
//     }
//     i++;
// }

do {
    if (i % 2 == 0) {
        console.log('Numero par', i);
    }
    i++;
} while (i < 2);


// en ambos loop, el codigo se ejecuta de arriba hacia abajo
// es por eso que el do while arroja un output distinto al while