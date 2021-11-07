const startTiming = 10
let time = startTiming * 60

const count = document.getElementById("countdown")
setInterval(updateTime,1000)
function updateTime(){
    const minutes = Math.floor(time/60)
    let seconds = time % 60

    seconds = seconds < 10 ? '0' + seconds: seconds
    count.innerHTML = `${minutes}:${seconds}`
    time--
}