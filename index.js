function calcolaInteresse()
{
  var capitale = 1*document.getElementById('capitale').value;
  var anni = 1*document.getElementById('anni').value;
  var tasso = 1*document.getElementById('tasso').value;
  var montante = capitale*(1+tasso/100)**anni;
  montante = Math.round(montante*100)/100;
  document.getElementById('anni2').innerHTML = anni;
  document.getElementById('montante').innerHTML = montante;
}
