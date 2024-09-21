var counter = 0;

function changeImg() {
  if (counter >= 9) {
    document.getElementById("click").innerHTML = "Stop mixing the boba!";
    document.getElementById("butt").style.display = "block";
    return;
  }
  if (document.getElementById("img").src.endsWith("images/bobamix1.png")){
    document.getElementById("img").src = "images/bobamix2.png";
  } 
  else {
    document.getElementById("img").src = "images/bobamix1.png";
  }
  counter ++;
}

function fillCup() {
  document.getElementById("step1").style.fontWeight = "normal";
  document.getElementById("step1").innerHTML = "1. Mix in Brown Sugar ✓";
  document.getElementById("click").innerHTML = "Add Boba to the Cup!";
  document.getElementById("step2").style.fontWeight = "bold";
  document.getElementById("img").style.display = "none";
  document.getElementById("butt").style.display = "none";
  document.getElementById("empty").style.display = "block";
  document.getElementById("spoon").style.display = "block";
}

function releaseBoba() {
  document.getElementById("spoon").src = "images/spoonfull.png";
  document.getElementById("empty").src = "images/fullcup.png";
  document.getElementById("butt2").style.display = "block";
  document.getElementById("step2").innerHTML = "2. Add your Boba to the Cup ✓";
}

function brewTea() {
  document.getElementById("step2").style.fontWeight = "normal";
  document.getElementById("step3").style.fontWeight = "bold";
  document.getElementById("spoon").style.display = "none";
  document.getElementById("empty").style.display = "none";
  document.getElementById("butt2").style.display = "none";
  document.getElementById("kettle").style.display = "block";
  document.getElementById("click").innerHTML = "Brew the tea for the Boba!";
}

function steam() {
  document.getElementById("timer").style.display = "block";
  var timeLeft = 30;
  var elem = document.getElementById('timer');

  var timerId = setInterval(countdown, 1000);

  function countdown() {
    if (timeLeft == 0) {
      clearTimeout(timerId);
      doSomething();
      return;
    } else {
      elem.innerHTML = timeLeft + ' seconds remaining';
      timeLeft--;
    }
  }
}

function doSomething () {
  document.getElementById("kettle").src = "images/kettlesteam.png";
  document.getElementById('timer').style.display = "none";
  document.getElementById("step3").innerHTML = "3. Brew your Tea ✓";
  document.getElementById("butt3").style.display = "block";
}

function addIce() {
  document.getElementById("step3").style.fontWeight = "normal";
  document.getElementById("step4").style.fontWeight = "bold";
  document.getElementById('kettle').style.display = "none";
  document.getElementById('butt3').style.display = "none";
  document.getElementById("click").innerHTML = "Add the ice to the cup!";
  document.getElementById('teacup').style.display = "block";
  document.getElementById('icecubes').style.display = "block";
}

function ice() {
  document.getElementById("teacup").src = "images/teacupice.png";
  document.getElementById('icecubes').style.display = "none";
  document.getElementById('butt4').style.display = "block";
  document.getElementById("step4").innerHTML = "4. Add ice to the cup ✓";
}

function milkSweet() {
  document.getElementById("step5").style.fontWeight = "bold";
  document.getElementById("step4").style.fontWeight = "normal";
  document.getElementById('butt4').style.display = "none";
  document.getElementById("click").innerHTML = "Add milk and sweetener!";
  document.getElementById('milk').style.display = "block";
}

function milk() {
  document.getElementById('milkpour').style.display = "block";
  document.getElementById('milk').style.display = "none";
}

function sugar() {
  document.getElementById('sugarpour').style.display = "block";
  document.getElementById('sugar').style.display = "none";
}

function milkGone() {
  document.getElementById('milkpour').style.display = "none";
  document.getElementById('sugar').style.display = "block";
}

function sugarGone() {
  document.getElementById('sugarpour').style.display = "none";
  document.getElementById('fullteacup').style.display = "block";
  document.getElementById('butt5').style.display = "block";
  document.getElementById("step5").innerHTML = "5. Put in the milk and sweetener ✓";
}

function cap() {
  document.getElementById("step6").style.fontWeight = "bold";
  document.getElementById("step5").style.fontWeight = "normal";
  document.getElementById('butt5').style.display = "none";
  document.getElementById("click").innerHTML = "Add a cap to your drink!";
  document.getElementById('butt6').style.display = "block";
}

function addCap() {
  document.getElementById('cap').style.display = "none";
  document.getElementById('fullteacup').style.display = "none";
  document.getElementById('teacupcap').style.display = "block";
  document.getElementById('butt6').style.display = "none";
  document.getElementById("click").innerHTML = "Congrats you're done!";
  document.getElementById("step6").innerHTML = "6. Finally, cap your boba milk tea ✓";
  document.getElementById('butt7').style.display = "block";
}
