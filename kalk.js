const dollar=1.16;
const sek=10.65;
const rub=84.20;
const frank=1.077;

// korutab
function calculate(val, currency){
    return (val*currency).toFixed(3); // toFixed - marki peale komat

}

function radioChange(event){
var vastus=document.getElementById("vastus")
var kogus=document.getElementById("kogus")

var inputValue=kogus.value
    



    if(event.target.id=="dollar"){
        vastus.innerHTML=calculate(inputValue, dollar) + "$"
        pilt.src="img/dollar.png"
    } else if (event.target.id=="rub") {
        vastus.innerHTML=calculate(inputValue, rub) + "RUB"
        pilt.src="img/rub.png"
    } else if (event.target.id=="kroon") {
        vastus.innerHTML=calculate(inputValue, sek) + "SEK"
        pilt.src="img/sek.png"
    } else if (event.target.id=="frank") {
        vastus.innerHTML=calculate(inputValue, frank) + "CHF"
        pilt.src="img/chf.png"
    }

    //if(inputValue == "") {
     //   alert("täitke väli")
     //   pilt.src="img/tyhi.png"
        
   // }

}

function selectOptionChange(event){
var vastus2=document.getElementById("vastus2")
var kogus2=document.getElementById("kogus2")

var inputValue=kogus2.value

if(event.target.value=="dollar"){
    vastus2.innerHTML=calculate(inputValue, dollar) + "$"
    pilt.src="img/dollar.png"
} else if (event.target.value=="rub") {
    vastus2.innerHTML=calculate(inputValue, rub) + "RUB"
    pilt.src="img/rub.png"
} else if (event.target.value=="kroon") {
    vastus2.innerHTML=calculate(inputValue, sek) + "SEK"
    pilt.src="img/sek.png"
} else if (event.target.value=="frank") {
    vastus2.innerHTML=calculate(inputValue, frank) + "CHF"
    pilt.src="img/chf.png"
}
if (inputValue == "") {
    alert("Sisesta kogus!");
    pilt.src="img/tyhi.png"
  }


}
function validateForm() {
    let x = document.forms["var1"]["kogus"].value;
    if (x == "") {
      alert("Sisesta kogus! ");
      return false;
    }
  }

function inputValutaText() {
    var inputValue=document.getElementById("kogus3").value;
    var inputText=document.getElementById("valutanimi").value;
    var vastus3=document.getElementById("vastus3");

    var inputValue=kogus3.value

    if(inputText=="dollar"){
        vastus3.innerHTML=calculate(inputValue, dollar) + "$";
    } else if (inputText=="rouble") {
        vastus3.innerHTML=calculate(inputValue, rub) + "RUB";
    }
    else if (inputText=="frank") {
        vastus3.innerHTML=calculate(inputValue, frank) + "CHF";
    }
    else if (inputText=="kroon") {
        vastus3.innerHTML=calculate(inputValue, sek) + "SEK";
    }

}

function LengthConverter(valNum) {
    document.getElementById("outputMeters").innerHTML=valNum/100;
    document.getElementById("outputKilometers").innerHTML=valNum/100000;
    document.getElementById("outputMiles").innerHTML=valNum*0.0000062137;
  }
