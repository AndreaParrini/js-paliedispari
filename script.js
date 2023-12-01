/* 
            Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma 
*/

// al click del button controllo se la parola è palindroma
document.getElementById('control').addEventListener('click', function () {

    // Chiedo all'utente una parola e l'assegno ad una constante
    const userWord = document.getElementById('word').value;
    console.log(userWord);

    //valorizzo la variabile alla quale assegno il valore restituito dalla funzione
    let reverseWord = reversedWord(userWord);

    // in base al risultato della funzione mostro un messaggio all'utente
    if (controlPalindromeWord(userWord, reverseWord)) {
        document.getElementById('result').innerHTML = `la parola ${userWord} è palindroma`
    } else {
        document.getElementById('result').innerHTML = `la parola ${userWord} non è palindroma`
    }

})

/* FUNCTIONS */

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
function controlPalindromeWord(word, reverseWord) {
    if (word === reverseWord) {
        return true;
    }
    return false;
}


/* 
                Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */

document.getElementById('play').addEventListener('click', function () {

    // creo la variavile alla quale assegno il valore della scelta dell'utente
    const choseUser = document.getElementById('choseuser').value;
    //inizializzo la variabile del numero utente
    let numberUser;
    //controllo se l'utente ha inserito correttamente un numero tra 1 e 5
    if (Number(document.getElementById('usernumber').value) < 6 && Number(document.getElementById('usernumber').value) > 0 ) {
        // se è vero assegno il valore alla varibile 
        numberUser = Number(document.getElementById('usernumber').value);
        console.log(numberUser);

    } else{
        //altrimenti mando un messaggio all'utente
        numberUser = NaN;
        alert('ATTENZIONE, NON HAI INSERITO UN NUMERO TRA 1 E 5!!!!')
    }
    
    // assegno alla variabile il valore che mi ritorna dalla funzione per generare un numero random
    const numberComputer = randomNumber(1, 5);

    // faccio la somma dei due numeri
    const sumOfNumber = numberComputer + numberUser;

    // stampo in pagina i valori 
    document.getElementById('dates').classList.remove('d-none');
    document.getElementById('numberuser').innerHTML = `Numero Utente : ${numberUser}`;
    document.getElementById('userchose').innerHTML = `Scelta dell'utente : ${choseUser}`;
    document.getElementById('numbercomputer').innerHTML = `Numero Computer : ${numberComputer}`;
    document.getElementById('sumofnumber').innerHTML = `Somma dei numeri : ${sumOfNumber}`;
    
    
    // determino il vincitore
    if(isNaN(numberUser)){

        document.getElementById('result2').innerHTML = "Inserisci un numero corretto"

    } else if (!isEven(sumOfNumber) && choseUser === 'dispari') {
    
        document.getElementById('result2').innerHTML = "L'utente ha vinto"
    
    } else if(iisEven(sumOfNumber) && choseUser === 'pari'){

        document.getElementById('result2').innerHTML = "L'utente ha vinto"

    }else {
    
        document.getElementById('result2').innerHTML = "Il computer ha vinto"
    
    }

})

/* FUNCTIONS */
// funzione per generare un numero random
function randomNumber(min, max) {
    const randomNumberComputer = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumberComputer;
}

// funzione per determinare se un numero paro o disparo
function isEven(number) {
    if (number % 2 === 0) {
        return true;
    }
    return false;
}