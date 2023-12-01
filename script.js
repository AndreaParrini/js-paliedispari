/* 
            Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma 
*/

// Chiedo all'utente una parola e l'assegno ad una constante
const userWord = prompt('Inserisci una parola.');
console.log(userWord);

//valorizzo la variabile alla quale assegno il valore restituito dalla funzione
let reverseWord = reversedWord(userWord);

// in base al risultato della funzione mostro un messaggio all'utente
if(controlPalindromeWord(userWord, reverseWord)){
    alert('la parola è palindroma')
}else{
    alert('la parola non è palindroma')
}


/* FUNCTION */

// creo una funzion per invertire la parola
function reversedWord(word) {

    let reverseWord = '';
    //faccio un ciclo for per ricostruire la parola inversa, partendo dall'ultimo carattere al primo
    for (let i = word.length - 1; i >= 0; i--) {
        const character = word[i];
        reverseWord += character;
    }
    //restituisco il valore della parola invertita
    return reverseWord;
}

// creo una funzione per controllare se la parola è palindroma
function controlPalindromeWord(word, reverseWord){
    if(word === reverseWord){
        return true;
    }
    return false;
}