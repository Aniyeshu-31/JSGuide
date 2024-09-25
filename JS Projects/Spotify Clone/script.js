console.log('Welcome to Spotify');
let songIndex = 0;
let playButton= document.getElementById('playbutton');
let progressbar=document.getElementById('myProgressbar');
let gif= document.getElementById('gif');
let newAudioElement= new Audio('song/heatwaves.mp3');
let songItems=Array.from(document.getElementsByClassName('songitem'));
let songname=document.getElementById('songname');
let songs=[
    {songName:'HeatWaves',filePath:'song/heatwaves.mp3', coverpath:'covers/cover1.jpg'},
    {songName:'Lil-Nas-X-INDUSTRY-BABY-Ft.-Jack-Harlow',filePath:'song/Lil-Nas-X-INDUSTRY-BABY-Ft.-Jack-Harlow.mp3', coverpath:'covers/cover2.jpg'},
    {songName:'HymnForTheWeekend-Coldplay',filePath:'song/HymnForTheWeekend-Coldplay.mp3', coverpath:'covers/cover3.jfif'},
    {songName:'Sia_-_Unstoppable',filePath:'song/Sia_-_Unstoppable.mp3', coverpath:'covers/cover4.jfif'},
]

playButton.addEventListener('click',()=>{
    if(newAudioElement.paused || newAudioElement.currentTime<=0){
      
        newAudioElement.play();
        playButton.classList.remove('fa-play-circle');
        playButton.classList.add('fa-pause-circle')
        gif.style.opacity=1;
    }
    else{
        
        newAudioElement.pause();
        playButton.classList.remove('fa-pause-circle')
        playButton.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})
    newAudioElement.addEventListener('timeupdate',()=>{
        progress = parseInt((newAudioElement.currentTime/newAudioElement.duration)*100);
        progressbar.value=progress;
    })
progressbar.addEventListener('change',()=>{
  newAudioElement.currentTime=(progressbar.value*newAudioElement.duration)/100;
})

songItems.forEach((element,i)=> {
    element.getElementsByTagName("img")[0].src= songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText= songs[i].songName;
});

const makeAllplays= ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-pause-circle')
    element.classList.add('fa-play-circle')
    })}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
            
        // makeAllplays();
        // songIndex = (parseInt)(e.target.id);
        // e.target.classList.remove('fa-play-circle');
        // e.target.classList.add('fa-pause-circle');
        // path= songs[songIndex].filePath;
        // newAudioElement.src= path;
        // songname.innerText=songs[songIndex].songName;
        // newAudioElement.currentTime=0;
        // newAudioElement.play();
        // gif.style.opacity=1;
        // playbutton.classList.remove('fa-play-circle');
        // playbutton.classList.add('fa-pause-circle');
        makeAllplays();
          if(newAudioElement.paused || newAudioElement.currentTime==0){
            newAudioElement.currentTime=0;
            songIndex = (parseInt)(e.target.id);
            newAudioElement.src=songs[songIndex].filePath;
            newAudioElement.play();
            songname.innerText=songs[songIndex].songName;
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            playButton.classList.remove('fa-play-circle');
            playButton.classList.add('fa-pause-circle');
            progressbar.value=progress; 
            gif.style.opacity=1;
        }
       else if(newAudioElement.played){
            newAudioElement.currentTime=0;
            songIndex = parseInt(e.target.id);
            newAudioElement.src=songs[songIndex].filePath;
            newAudioElement.pause(); 
            songname.innerText=songs[songIndex].songName;
            e.target.classList.remove('fa-pause-circle');
            e.target.classList.add('fa-play-circle');
            playButton.classList.remove('fa-pause-circle');
            playButton.classList.add('fa-play-circle');
            progressbar.value=progress;
            gif.style.opacity=0;
        }
     

    })
})

document.getElementById('next').addEventListener('click',(e)=>{
    if(songIndex>=2){
        songIndex=0;
    }else{
    songIndex=songIndex+1;
    }
    path= songs[songIndex].filePath;
    newAudioElement.src= path;
    songname.innerText=songs[songIndex].songName;
    newAudioElement.currentTime=0;
    newAudioElement.play();
    playbutton.classList.remove('fa-play-circle');
    playbutton.classList.add('fa-pause-circle');
    gif.style.opacity=1;
    
   
})
document.getElementById('previous').addEventListener('click',(e)=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
    songIndex = songIndex-1;
    }
    path= songs[songIndex].filePath;
    newAudioElement.src= path;
    songname.innerText=songs[songIndex].songName;
    newAudioElement.currentTime=0;
    newAudioElement.play();
    playbutton.classList.remove('fa-play-circle');
    playbutton.classList.add('fa-pause-circle');
    gif.style.opacity=1;

})


