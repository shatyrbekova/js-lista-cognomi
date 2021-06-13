// 1. chiedi all’utente il cognome
// 2. inseriscilo in un array dove sono presenti già altri cognomi: 
//‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
// 3. stampa la lista ordinata alfabeticamente
// 4. scrivi anche la posizione “umana” (partendo da 1) della lista in cui il nuovo utente si trova

var output = document.getElementById('output');
var surnameClient = prompt('Inserire il Suo cognome');
var listSurnames=['Bianchi','Neri', 'Rossi', 'Verdi', 'Gialli'];

surnameClient =surnameClient[0].toUpperCase()+surnameClient.slice(1);
listSurnames.push(surnameClient);

document.getElementById('result').innerHTML = listSurnames;

listSurnames.sort();
document.getElementById('result').innerHTML += '<br>'+listSurnames;

var position = listSurnames.indexOf(surnameClient)+1;
document.getElementById('result').innerHTML+= '<br>' +'Your position is' + ' ' +position;


