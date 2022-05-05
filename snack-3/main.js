// Crea due tag div con due id diversi: //
// un div avrà il testo colorato di rosso mentre l’altro di verde.
// Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.
const body = document.querySelector('body');
const primoDiv = document.createElement('div');
const secondoDiv = document.createElement('div');

primoDiv.id = 'primo-div;'
secondoDiv.id = 'secondo-div;'

body.append(primoDiv, secondoDiv)