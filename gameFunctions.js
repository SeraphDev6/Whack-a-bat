$(document).ready(function(){
    var timeRemaining=0;
    var scoreVal=0;
    $("#start").click(function(){
        if(timeRemaining<=0){
            $(".bat").fadeOut("fast");
            timeRemaining=30;
            scoreVal=0
            $("#time").text(`Time Left : ${timeRemaining}`)
            $("#score").text(`Score : ${scoreVal}`)
            var timer = setInterval(function(){
                timeRemaining-=1
                $("#time").text(`Time Left : ${timeRemaining}`)
                if(timeRemaining<=0){
                    clearInterval(timer);
                }
                var batNum=Math.ceil(Math.random()*8);
                $("#bat-"+batNum).fadeIn("fast");
            },1000);
        }
    });
    $(".bat").click(function(){
        if(timeRemaining>0){
            $(this).fadeOut("fast");
            scoreVal+=1;
            $("#score").text(`Score : ${scoreVal}`)
        }
    });
});