$(document).ready(function(){
    $(".bat").click(function(){
        console.log("batClicked")
        $(this).fadeOut("fast");
    });
    $("#reset").click(function(){
        $(".bat").fadeIn("fast");
    });
});