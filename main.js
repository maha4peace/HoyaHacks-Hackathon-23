const video = document.getElementById("video");
  const playPauseButton = document.getElementById("streaming-button");


  
playPauseButton.addEventListener("click", () => {
      const audio1 = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
      audio1.play();
      if (video.paused) {
        video.play();
        playPauseButton.innerHTML = "Pause";
      } else {
        video.pause();
        playPauseButton.innerHTML = "Live Stream";
      }
  });
  

function proximitySound() {
  const audio2 = new Audio("bellalertsound.mp3") ;
  const proximity = document.getElementById("bell-alert");
  
  proximity.addEventListener("click", () => {

    audio2.play();

  });
}

 proximitySound(); 

  
   




