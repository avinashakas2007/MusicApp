var audio = new Audio("Eminem - Venom 320kbps(320Kbps.In).mp3");
$(".play").on('click', function () {
    if (audio.paused || audio.currentTime <= 0) {
        $(".play").addClass("fa-pause-circle");
        $(".play").removeClass("fa-play");
        $(".dancing").css("display","flex");
         audio.play();

    } else {
        $(".play").addClass("fa-play");
        $(".play").removeClass("fa-pause-circle");
        $(".dancing").css("display","none");
        audio.pause();
    }
});
audio.addEventListener("timeupdate",function(){
    var current=(audio.currentTime/audio.duration)*100;
    $("#time").attr("value",current);
})
$("#time").on("change",function(){
    audio.currentTime=(document.querySelector("#time").value*audio.duration)/100;
})
$(".for").on("click",function(){
    if(audio.duration-audio.currentTime>=10)
    audio.currentTime=audio.currentTime+10;
})
$(".back").on("click",function(){
    if(audio.currentTime>=10)
    audio.currentTime=audio.currentTime-10;
})
