let month = 1;
let pass = 1;




function acess5x7(){
  pass = 1;
  monthSelector();
  showCal();
  scroll_to_month();
}

function acess5x7xl(){
  pass = 2;
  monthSelector();
  showCal();
  scroll_to_month();
}

function acessikon(){
  pass = 3;
  monthSelector();
  showCal();
  scroll_to_calendar();
}

function cal_december(){
  month = 1;
  showCal();
  scroll_to_calendar();
}

function cal_january(){
  month = 2;
  showCal();
  scroll_to_calendar();
}

function cal_february(){
  month = 3;
  showCal();
  scroll_to_calendar();
}

function cal_march(){
  month = 4;
  showCal();
  scroll_to_calendar();
}

function monthSelector(){
  if(pass == 1){
    document.getElementById("currentMonth").innerHTML = "Choose The Month You'd Like to See<br><span style='font-size:0.6em'>Chosen Pass: <span style='color:#FF4D1D'>5x7® Pass</span></span>";
  }else if(pass == 2){
    document.getElementById("currentMonth").innerHTML = "Choose The Month You'd Like to See<br><span style='font-size:0.6em'>Chosen Pass: <span style='color:#FF4D1D'>5x7® XL Pass</span></span>";
  }else if(pass == 3){
    document.getElementById("currentMonth").innerHTML = "Choose The Month You'd Like to See<br><span style='font-size:0.6em'>Chosen Pass: <span style='color:#FF4D1D'>Ikon Pass</span></span>";
  }
  document.getElementById("currentMonth").style.display = "block";
}

function showCal(){
  if(pass == 1 && month == 1){
    document.getElementById("december-one").style.display = "block";
    document.getElementById("january-one").style.display = "none";
    document.getElementById("february-one").style.display = "none";
    document.getElementById("march-one").style.display = "none";

    document.getElementById("december-two").style.display = "none";
    document.getElementById("january-two").style.display = "none";
    document.getElementById("february-two").style.display = "none";
    document.getElementById("march-two").style.display = "none";

    document.getElementById("ikon-access").style.display = "none";
  }else if(pass == 1 && month == 2){
    document.getElementById("december-one").style.display = "none";
    document.getElementById("january-one").style.display = "block";
    document.getElementById("february-one").style.display = "none";
    document.getElementById("march-one").style.display = "none";

    document.getElementById("december-two").style.display = "none";
    document.getElementById("january-two").style.display = "none";
    document.getElementById("february-two").style.display = "none";
    document.getElementById("march-two").style.display = "none";

    document.getElementById("ikon-access").style.display = "none";
  }else if(pass == 1 && month == 3){
    document.getElementById("december-one").style.display = "none";
    document.getElementById("january-one").style.display = "none";
    document.getElementById("february-one").style.display = "block";
    document.getElementById("march-one").style.display = "none";

    document.getElementById("december-two").style.display = "none";
    document.getElementById("january-two").style.display = "none";
    document.getElementById("february-two").style.display = "none";
    document.getElementById("march-two").style.display = "none";

    document.getElementById("ikon-access").style.display = "none";
  }else if(pass == 1 && month == 4){
    document.getElementById("december-one").style.display = "none";
    document.getElementById("january-one").style.display = "none";
    document.getElementById("february-one").style.display = "none";
    document.getElementById("march-one").style.display = "block";

    document.getElementById("december-two").style.display = "none";
    document.getElementById("january-two").style.display = "none";
    document.getElementById("february-two").style.display = "none";
    document.getElementById("march-two").style.display = "none";

    document.getElementById("ikon-access").style.display = "none";
  }else if(pass == 2 && month == 1){
    document.getElementById("december-one").style.display = "none";
    document.getElementById("january-one").style.display = "none";
    document.getElementById("february-one").style.display = "none";
    document.getElementById("march-one").style.display = "none";
    
    document.getElementById("december-two").style.display = "block";
    document.getElementById("january-two").style.display = "none";
    document.getElementById("february-two").style.display = "none";
    document.getElementById("march-two").style.display = "none";

    document.getElementById("ikon-access").style.display = "none";
  }else if(pass == 2 && month == 2){
    document.getElementById("december-one").style.display = "none";
    document.getElementById("january-one").style.display = "none";
    document.getElementById("february-one").style.display = "none";
    document.getElementById("march-one").style.display = "none";
    
    document.getElementById("december-two").style.display = "none";
    document.getElementById("january-two").style.display = "block";
    document.getElementById("february-two").style.display = "none";
    document.getElementById("march-two").style.display = "none";

    document.getElementById("ikon-access").style.display = "none";
  }else if(pass == 2 && month == 3){
    document.getElementById("december-one").style.display = "none";
    document.getElementById("january-one").style.display = "none";
    document.getElementById("february-one").style.display = "none";
    document.getElementById("march-one").style.display = "none";
    
    document.getElementById("december-two").style.display = "none";
    document.getElementById("january-two").style.display = "none";
    document.getElementById("february-two").style.display = "block";
    document.getElementById("march-two").style.display = "none";

    document.getElementById("ikon-access").style.display = "none";
  }else if(pass == 2 && month == 4){
    document.getElementById("december-one").style.display = "none";
    document.getElementById("january-one").style.display = "none";
    document.getElementById("february-one").style.display = "none";
    document.getElementById("march-one").style.display = "none";
    
    document.getElementById("december-two").style.display = "none";
    document.getElementById("january-two").style.display = "none";
    document.getElementById("february-two").style.display = "none";
    document.getElementById("march-two").style.display = "block";

    document.getElementById("ikon-access").style.display = "none";
  }else if(pass == 3){
    document.getElementById("december-one").style.display = "none";
    document.getElementById("january-one").style.display = "none";
    document.getElementById("february-one").style.display = "none";
    document.getElementById("march-one").style.display = "none";
    
    document.getElementById("december-two").style.display = "none";
    document.getElementById("january-two").style.display = "none";
    document.getElementById("february-two").style.display = "none";
    document.getElementById("march-two").style.display = "none";

    document.getElementById("ikon-access").style.display = "block";
  }
}



function scroll_to_month(){
  const id = 'chooseMonth';
  const yOffset = -100; 
  const element = document.getElementById(id);
  const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

  window.scrollTo({top: y, behavior: 'smooth'});
}

function scroll_to_calendar(){
  const id = 'access-calendar';
  const yOffset = -100; 
  const element = document.getElementById(id);
  const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

  window.scrollTo({top: y, behavior: 'smooth'});
}










function checkLodges(){
  let lodges = document.getElementsByClassName("promo-banner");
  let carousel = document.getElementsByClassName("swipe-wrap");

  if(lodges.length > 0){
    for(let i = 0; i < lodges.length; i++){
      let results = lodges[i].innerHTML;

      if(results == "Operated by Blue Mountain Resort"){
        lodges[i].classList.add('bmr-unit');
      }else if(results == "Operated by Property Valet"){
        lodges[i].classList.add('pv-unit');
      }
    }
  }

  if((window.location.href.indexOf("village-suites") !== -1)){
    carousel[0].classList.add('lodging-carousel');
  }

}

var observer = new MutationObserver(function(mutations){
  mutations.forEach(function(mutation){
    checkLodges();
  });
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});
