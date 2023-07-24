const days=document.getElementById("days")
const hours=document.getElementById("hours")
const minutes=document.getElementById("minutes")
const seconds=document.getElementById("seconds")
const year=document.getElementById("year")
const countdown=document.getElementById("countdown")
const loading=document.getElementById("loading")
const CurrentYear=new Date().getFullYear();
const newYearTime= new Date(`January 01 ${CurrentYear+1} 00:00:00`)


//update Time 
function updateCountdown(){
const currentTime=new Date();
const diff=newYearTime-currentTime;
const day=Math.floor(diff/1000/60/60/24);

//left he min sec
const hr=Math.floor(diff/1000/60/60)%24;
const min=Math.floor(diff/1000/60)%60;
const sec=Math.floor(diff/1000)%60;

days.innerHTML=day;
hours.innerHTML=hr<10 ? "0"+hr :hr;
minutes.innerHTML=min<10 ? "0"+min :min;
seconds.innerHTML=sec<10 ? "0"+sec :sec;
}

setInterval(updateCountdown,1000)

//set background year
year.innerText=CurrentYear+1;

//show spinner before coundown

setTimeout(()=>{
loading.remove();
countdown.style.display="flex";
},1000)