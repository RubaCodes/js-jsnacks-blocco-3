// Partendo da un array di numeri, 
const array = [];
for (let i = 0; i < 20; i++) {
    array.push(Math.ceil(Math.random() * 100));
}
// Crea due tag div con due id diversi: 
const body = document.querySelector('body');
//creazione div
const primoDiv = document.createElement('div');
const secondoDiv = document.createElement('div');
//assegnazione id
primoDiv.id = 'dispari';
secondoDiv.id = 'pari';
// un div avrà il testo colorato di rosso mentre l’altro di verde.
primoDiv.style.color = 'red';
secondoDiv.style.color = 'green';
//Stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
        primoDiv.append(`${array[i]} , `)
    } else {
        secondoDiv.append(`${array[i]} , `);
    }
}
//appeso i div al body
body.append(primoDiv, secondoDiv);