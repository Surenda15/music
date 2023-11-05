
        let progress=document.getElementById('progress');
        let control=document.getElementById('song');
        let contricon=document.getElementById('controlicon');
        let Forward=document.getElementById('forward');
        let Backward=document.getElementById('backward');
        song.onloadedmetadata=function(){
            progress.max=song.duration;
            progress.value=song.currentTime;
        }
        function playpause(){
            if(contricon.classList.contains('fa-pause')){
                song.pause();
                contricon.classList.add('fa-play');
                contricon.classList.remove('fa-pause');
                        }
            else{
                song.play();
                contricon.classList.remove('fa-play');
                contricon.classList.add('fa-pause');

            }
                  
        }
        if(song.play()){
            setInterval(()=>{
                progress.value=song.currentTime;
            },1000); }
        
        progress.onchange=function(){
            song.play();
            song.currentTime=progress.value;
            contricon.classList.add('fa-pause');
            contricon.classList.remove('fa-play');
        }
        function forward(){
            song.currentTime +=10;
        }
        function backward(){
            song.currentTime -=10;
        }
        
    