function velocitaMedia(){
  min=1*document.getElementById('min').value;
  sec=1*document.getElementById('sec').value;
  metri=1*document.getElementById('metri').value;
  sec=sec+min*60;
  vms=metri/sec;
  vms= Math.round(vms*100)/100;
  vkmh= Math.round(vms*3.6*100)/100;
  document.getElementById('vms').innerHTML = vms;
  document.getElementById('vkmh').innerHTML = vkmh;
}
