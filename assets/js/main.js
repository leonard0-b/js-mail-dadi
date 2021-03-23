// chiedi a utente la sua mail
var mail = prompt("Inserisci la mail");
console.log(mail);

// lista mail
var listaMail = ["leonardo.bongianni@gmail.com", "mrtchessa@gmail.com"];
// listaMail[0] = leonardo.bongianni@gmail.com
// listaMail[1] = mrtchessa@gmail.com

var flag = false;

for (var i = 0; i < listaMail.length; i++) {
  if (listaMail[i] == mail) {
    flag = true;
  }
}


if (flag) {
  document.getElementById('selezione').innerHTML = "La mail: " + mail + "<br>è stata selezionata";
} else {
  document.getElementById('selezione').innerHTML = "La mail: " + mail + "<br>non è stata selezionata";
}
console.log(flag);
