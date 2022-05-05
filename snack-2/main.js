// Fai inserire un numero, che chiameremo N, all’utente.
let N = Number(prompt('Inserisci un numero'));

while (isNaN(N)) {
    N = Number(prompt('Inserisci un numero, ho detto Numero'));
}

let array = [];

for (let j = 0; j < N; j++) {
    // Genera N array
    array[j] = [];
    for (let i = 0; i < 10; i++) {
        //ognuno formato da 10 numeri casuali tra 1 e 100.
        array[j].push(Math.ceil(Math.random() * 100));
        //Ogni volta che ne crei uno, stampalo a schermo.   
    }
    console.log(array[j]);
}


