// console.log("This is alarm clock");

const Alarmsubmit=document.getElementById('alarmsubmit');
let Alarm=Alarmsubmit.addEventListener('click',setAlarm);
let alarm=document.getElementById('Alarmclock');

function RingbellAlarm(){
    const audio= new Audio('');
    audio.play();
}
function setAlarm(e){
    e.preventDefault();
    alarmDate=new Date(alarm.value);
    console.log(`Setting alarm for ${alarmDate}`);
    now=new Date();
    let timetoalarm= alarmDate-now;
    console.log(timetoalarm);
    if(timetoalarm>=0){
        setTimeout(()=>{
            console.log("Ringing now");
         RingbellAlarm();
        },timetoalarm); 
    }
    alarm.value="";
}
