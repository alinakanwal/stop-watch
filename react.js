let minutes = 0;
let second = 0;
let millisecond = 0;
let interval;

function starttimer(){
    interval = setInterval(() =>{
millisecond += 10;
if(millisecond === 1000){
    millisecond = 0;
    second++;
}

if(second === 60){
    second = 0;
    minutes++;
}
document.getElementById('timer').innerText = `${String(minutes).padStart(2,'0')}:${String(second).padStart(2,'0')}:${String(millisecond).padStart(3,'0')}`

    },10)

}

function stoptimer(){
    clearInterval(interval);
}

function restarttimer (){
    stoptimer()
    minutes = 0;
    second = 0;
    millisecond = 0;
    document.getElementById('timer').innerText = '00:00:000';
}

document.getElementById('startbutton').addEventListener('click',starttimer);
document.getElementById('stopbutton').addEventListener('click',stoptimer);
document.getElementById('restartbutton').addEventListener('click',restarttimer)