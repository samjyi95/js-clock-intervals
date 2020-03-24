// var degrees = 45;
// var el = document.getElementById("myElement");
// el.style.transform = "rotate(" + degrees + "deg)";
// secondRotation(0); // returns 0
// secondRotation(59); // returns (59 / 60) * 360
// hourRotation(12); // returns 0
// hourRotation(5); // returns (5 / 12) * 360
//  setInterval(functionYouWantToRun, millisecondsDelay);


function setClock() {
var currentDate = new Date()
var secondsRatio = currentDate.getSeconds() // 60
var minutesRatio = (secondsRatio + currentDate.getMinutes()) // 60
var hoursRatio = (minutesRatio + currentDate.getHours()) //12

var angle = 6 * secondsRatio;
}
// #YOUTUBE

//function for ticks every second
    setInterval(function(){
           console.log("TICK!");
        }, 1000);
       setInterval(setClock, 1000)

//^^ jsut need to assign it to the second hand somehow......

var degrees = 45 
var el = document.getElementById("second");
el.style.transform = "rotate(" + degrees + " deg)"
