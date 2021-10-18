let aboutOffset = $('#about').offset().top;

$(window).scroll(function () {
    let SrcollWindow = $(window).scrollTop();
    if(SrcollWindow >= aboutOffset){
        $("#btnUp").fadeIn(500);
    }
    else{
        $("#btnUp").fadeOut(500);
    }
});

/************************navlinks scroll******************************/

$("a[href^='#']").click(function (e) {
    let Href = $(e.target).attr("href");
    let offsetTop = $(Href).offset().top;
    $('html,body').animate({scrollTop:offsetTop - 100},2000);
})  

/************************up button******************************/

$("#btnUp").click(()=>{
    $("html,body").animate({ scrollTop: "0"},3000);
});

/************************typing******************************/

var typed = new Typed(".my-typing",{
    strings: ["Developer", "Designer", "Freelancer", "Photographer"],
    loop: true,
    typeSpeed: 100,
});


/************************set counter******************************/
function setCounter(element, maxCount, speed) {
    var initialNumber = 0;
    function counter() {
        document.getElementById(element).innerHTML = initialNumber;
        ++initialNumber;
    }
    var counterDelay = setInterval(counter, speed);
    function totalTime() {
        clearInterval(counterDelay);
    }
    var totalPeriod = speed * maxCount; 
    setTimeout(totalTime, totalPeriod);
}

setCounter("workComplete", 450, 10);
setCounter("awards", 25, 100);
setCounter("clients", 550, 10);
setCounter("yeasOfExp", 48, 100);


$("#toggleBtn").click(function(){
    if ($("#toggleBtn").attr("aria-expanded") == "true") {
        $("#main-nav").addClass("bg-nav");
        $("#toggleBtn").css("color", "#1e1e1e");
        $(".navbar-dark .navbar-toggler-icon").css("display", "none");
        $("#closebtn").css("display","block");
        
    }
    else{
        $("#main-nav").removeClass("bg-nav");
        $("#main-nav").addClass("bg-transparent");
        $("#toggleBtn").css("color", "eee");
        $(".navbar-dark .navbar-toggler-icon").css("display", "block");
        $("#closebtn").css("display", "none");        
    }
});