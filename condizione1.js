function controlloNumero(){
  let nomeStile;
  let numero;
  numero=1*document.getElementById('numero').value;
  nomestile = 'giusto';
  if(numero>0)
  {
    document.getElementById('risp').innerHTML='****';
  }
  else if(numero<0)
  {
    document.getElementById('risp').innerHTML='####';
  }
  else if(numero===0)
  {
    document.getElementById('risp').innerHTML='****####';
  }
  else if(isNaN(numero))
  {
    document.getElementById('risp').innerHTML='Non è un numero! Riprova';
    nomestile = 'errato';
  }
  document.body.className = nomestile;
}
