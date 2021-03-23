var giocatore = Math.floor(Math.random() * 6) + 1;

var pc = Math.floor(Math.random() * 6) + 1;

if (giocatore > pc) {
  alert("il giocatore ha vinto")
} else if (giocatore = pc) {
  alert("è un pareggio")
} else {
  alert("Il pc ha vinto")
}

console.log(giocatore, pc);
