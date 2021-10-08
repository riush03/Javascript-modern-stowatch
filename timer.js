let [milliseconds,seconds,minutes,hours] = [0,0,0,0];
let timeRef = document.querySelector('.time-diplay');
let int = null;


document.getElementById('startTime').addEventListener('click',()=>{
    if(int!==null)
    {
        clearInterval(int);
    }
    int setInterval(time-diplay,10);
});

document.getElementById('pauseTime').addEventListener('click',()=>
{
    clearInterval(int);
})
document.getElementById('stopTime').addEventListener('click',()=>{
        clearInterval(int);
        [milliseconds,seconds,minutes,hours] = [0,0,0,0];
        timeRef.innerHTML ='00 : 00 : 00 : 000';
});


function time-diplay() {
    milliseconds+=10;

    if(milliseconds == 1000)
    {
        milliseconds = 0;
        seconds++;

        if(seconds == 60)
        {
            seconds = 0;
            minutes++;

            if(minutes == 60)
            {
                milliseconds = 0;
                hours++;
            }
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "0" + milliseconds : milliseconds;

    timeRef.innerHTML = '${h} : ${m} : ${s} : ${ms}';
}
