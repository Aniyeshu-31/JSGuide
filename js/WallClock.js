console.log('This is Wall Clock');
function ShowTime(){
let currTime=new Date();
let currHours= currTime.getHours();
let currMinutes=currTime.getMinutes();
let currSeconds=currTime.getSeconds();

let AMorpm= (currHours<12)?"AM":"PM";
let currTimeofDay= currHours+":"+currMinutes+":"+currSeconds+" "+AMorpm;

let cl=document.getElementById("clock");

cl.innerHTML=currTimeofDay;
}