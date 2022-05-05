//crea array vuoto e fai inserire numreri finche la somama dell'array e minore di 50
let array = [];
let sum = 0;

while(sum < 50){
    let temp = Number(prompt("inserisci un numero"));
    while(isNaN(temp)){
        temp = Number(prompt("inserisci un numero, ho detto NUMERO"));
    }
    array.push(temp);
    sum +=temp;
}

console.log(array,sum);