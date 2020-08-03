// var timeInMs = Date.now("5:00");

// console.log(timeInMs);


// function countDown(duration) {
//     const start = duration - minusMinus; 
//         function minusMinus() {
//             const seconds = Math.floor((total / 1000) % 60);
//             const minutes = Math.floor((total / 1000 / 60) % 60);
//             const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
//             const days = Math.floor(total / (1000 * 60 * 60 * 24));
//         }
//     return(start);
// }
// console.log(countDown);

// var showing = alert(countDown(5));
// console.log(showing);

// function startTimer(duration, display) {
//     var timer = duration, minutes, seconds;
//     setInterval(function () {
//         minutes = parseInt(timer / 60, 10)
//         seconds = parseInt(timer % 60, 10);

//         minutes = minutes < 10 ? "0" + minutes : minutes;
//         seconds = seconds < 10 ? "0" + seconds : seconds;

//         display.textContent = minutes + ":" + seconds;

//         if (--timer < 0) {
//             timer = 0;
//             // timer = duration; // uncomment this line to reset timer automatically after reaching 0
//         }
//     }, 1000);
//     return(timer);
// }

// console.log(startTimer);

// const total = 5;
// const days = Math.floor(total / (1000 * 60 * 60 * 24));

// console.log(days);