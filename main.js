song_1="";
song_2="";

function preload(){
    song=loadsound("music_1.mp3");
    song=loadsound("music_2.mp3")
}

function setup(){
    canavs=createCanvas(400,700);
    canvas.center();

    video=cretaeCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,400,700);
}

function play(){
    song.play();
}