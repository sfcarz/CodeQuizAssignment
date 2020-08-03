const startingMin = 5;
let time = startingMin * 60;

const $timer = document.querySelector('.timer');

setInterval(countDown, 1000)
function countDown() {
    const minutes = Math.floor(time /60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    $timer.innerHTML = `${minutes}: ${seconds}`;
    time--;
}