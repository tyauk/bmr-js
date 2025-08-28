const month = 1;
const pass = 1;

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
    document.getElementById("5x7-December").style.display = "block";
    document.getElementById("5x7-Janurary").style.display = "none";
    document.getElementById("5x7-February").style.display = "none";
    document.getElementById("5x7-March").style.display = "none";
  }else if(pass == 1 && month == 2){
    document.getElementById("5x7-December").style.display = "none";
    document.getElementById("5x7-Janurary").style.display = "block";
    document.getElementById("5x7-February").style.display = "none";
    document.getElementById("5x7-March").style.display = "none";
  }else if(pass == 1 && month == 3){
    document.getElementById("5x7-December").style.display = "none";
    document.getElementById("5x7-Janurary").style.display = "none";
    document.getElementById("5x7-February").style.display = "block";
    document.getElementById("5x7-March").style.display = "none";
  }else if(pass == 1 && month == 4){
    document.getElementById("5x7-December").style.display = "none";
    document.getElementById("5x7-Janurary").style.display = "none";
    document.getElementById("5x7-February").style.display = "none";
    document.getElementById("5x7-March").style.display = "block";
  }
}
