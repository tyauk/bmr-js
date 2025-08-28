var month = 1;
var pass = 1;

function acess5x7(){
  pass = 1;
  showCal();
}

function acess5x7xl(){
  pass = 2;
  showCal();
}

function acessikon(){
  pass = 3;
  showCal();
}

function cal_december(){
  month = 1;
  showCal();
}

function cal_january(){
  month = 2;
  showCal();
}

function cal_february(){
  month = 3;
  showCal();
}

function cal_march(){
  month = 4;
  showCal();
}

function showCal(){
  if(pass == 1 && month == 1){
    document.getElementById("december-one").style.display = "block";
    document.getElementById("january-one").style.display = "none";
    document.getElementById("february-one").style.display = "none";
    document.getElementById("march-one").style.display = "none";
  }else if(pass == 1 && month == 2){
    document.getElementById("december-one").style.display = "none";
    document.getElementById("january-one").style.display = "block";
    document.getElementById("february-one").style.display = "none";
    document.getElementById("march-one").style.display = "none";
  }else if(pass == 1 && month == 3){
    document.getElementById("december-one").style.display = "none";
    document.getElementById("january-one").style.display = "none";
    document.getElementById("february-one").style.display = "block";
    document.getElementById("march-one").style.display = "none";
  }else if(pass == 1 && month == 4){
    document.getElementById("december-one").style.display = "none";
    document.getElementById("january-one").style.display = "none";
    document.getElementById("february-one").style.display = "none";
    document.getElementById("march-one").style.display = "block";
  }
}
