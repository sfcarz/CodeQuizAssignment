
const $countDown = document.querySelector("#countdowns");

const timeInMinutes = 5;
const currentTime = Date.parse(new Date());
const deadline = new Date(currentTime + timeInMinutes*60*1000);
const currentTimeMin = new Date();
// setTimeout(function() {console.log('Hello'); }, 4000);

// setTimeout(function() {console.log(currentTimeMin);}, 1000);
// setInterval(function() {console.log('Hello');}, 2000);

// var myVar = setInterval(myTimer, 1000);

var now = new Date();
// console.log(now);

var newNow = now.toLocaleTimeString();
// console.log(newNow);

var nowNew = now.getMinutes() + ':00 Min';
console.log(nowNew);

var nowSec = now.getSeconds();
console.log(nowSec);




// function myTimer() {
//   var d = new Date();
//   var t = d.toLocaleTimeString();
// //   document.getElementById("demo").innerHTML = t;
// console.log(t);
// }

// function myStop( {
//     clearInterval(t)
// });

// const countDownMin;

// $countDown.value = deadline;

// console.log(deadline);

// var days = Math.floor(deadline / (1000 * 60 * 60 * 24));
// var hours = Math.floor((deadline % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
// var minutes = Math.floor((deadline % (1000 * 60) * 60)) / (1000 * 60);
// var seconds = Math.floor((deadline % (1000 * 60)) / 1000);

// var d = new Date();
// var n = d.getTime();
// console.log(d);
// console.log(n);

// console.log(minutes);

// setTimeout(function() { alert("Hello"); }, 3000);


// // Set the date we're counting down to
// var countDownDate = new Date("August 3, 2020 15:37:25").getTime();

// // Update the count down every 1 second
// var x = setInterval(function() {

//   // Get today's date and time
//   var now = new Date().getTime();
    
//   // Find the distance between now and the count down date
//   var distance = countDownDate - now;
    
//   // Time calculations for days, hours, minutes and seconds
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
//   // Output the result in an element with id="demo"
//   document.getElementById("demo").innerHTML = days + "d " + hours + "h "
//   + minutes + "m " + seconds + "s ";
    
//   // If the count down is over, write some text 
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("demo").innerHTML = "EXPIRED";
//   }
// }, 1000);






// function getTimeRemaining(endTime) {

//   const total = Date.parse(endTime) - Date.parse(new Date());
//   const seconds = Math.floor((total / 1000) % 60);
//   const minutes = Math.floor((total / 1000 / 60) % 60);
//   const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
//   const days = Math.floor(total / (1000 * 60 * 60 * 24));

//   return {
//     total,
//     days,
//     hours,
//     minutes,
//     seconds,
//   };
// }

// console.log(getTimeRemaining);
// const total = Date.parse(endTime) - Date.parse(new Date());
// console.log(total);




function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  // add a zero in front of numbers<10
  m = checkTime(m);
  s = checkTime(s);
  $countDown.value = h + ":" + m + ":" + s;
  t = setTimeout(function () {
    startTime();
  }, 500);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function today() {
    var today = new Date();
var mins = today.getMinutes();
return mins
}