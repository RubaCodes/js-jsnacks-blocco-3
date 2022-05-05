// Crea due tag div con due id diversi: //
const body = document.querySelector('body');
//creazione div
const primoDiv = document.createElement('div');
const secondoDiv = document.createElement('div');
//assegnazione id
primoDiv.id = 'primo-div;'
secondoDiv.id = 'secondo-div;'
// un div avrà il testo colorato di rosso mentre l’altro di verde.
primoDiv.style.color = 'red';
secondoDiv.style.color = 'green';
// Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.
const array = [];
for (let i = 0; i < 20; i++){
    array.push(Math.ceil(Math.random() *100));
}

    //appeso div al body
    body.append(primoDiv, secondoDiv);