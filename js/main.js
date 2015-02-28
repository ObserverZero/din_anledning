$(function(){

    //Stop ajax from caching
    $.ajaxSetup({cache: false});
    //end ajax stoppage

    var hovedsideLoaded;


    //History state manipulation
    window.onpopstate = function(event) {
        if(!event.state){
            $(".content").load("ajax/blank.html");
            $(".menu").show();
        } else {
            $(".menu").hide();
            $(".content").load("ajax/" + event.state + ".html");
        }
    };

    $(window).load(function(){
        var a = window.location.href.indexOf("#");
        if(a > -1) {
            $(".menu").hide();
            $(".content").load("ajax/" + window.location.href.substring(a+1) + ".html");
        }
    });
    //end history



    //Main ajax functionality
    $(".bemanning, .bryllup, .firmaevent, .sommerevent, .utdrikningslag, .vossebanen, .spesiell, .daap, .logo").click(function(){
        content = $(this).attr("class");
        if(content==="logo") {

            //Tablets and Desktops
            if($(window).width() > 960) {
                $(".content").unload();
                $(".desMenu").show();
                return;
            }else if($(window).width() > 480 && $(window).width() <= 960){
                $(".content").unload();
                $(".tabMenu").show();
                return;
            }else {
                content = "hovedside";
            }
        }
        $(".tabMenu, .desMenu").hide();
        $(".content").load("ajax/" + content + ".html");
        dropMenuFunctionality(content);
    });

    //Arrow button at the bottom of menu
    $(".menuHandle").click(function(){
        dropMenuFunctionality();
    });
    function dropMenuFunctionality(condition){
        if($(window).width() <=480){
        but = $(".menuHandle img").attr("src");
        if(but==="image/opp.png" || condition === "hovedside"){
            $(".menuHandle img").attr("src", "image/ned.png");
        }else{
            $(".menuHandle img").attr("src", "image/opp.png");
        }
       
        //if makes it so that if logo is pressed while menu is closed, menu will not open
        if(but==="image/opp.png" || condition != "hovedside") {
        $(".mobMenu").animate({
            height: "toggle",
            opacity: "toggle"
        });
        }
        }
    }

    // Conditionals on size
    if($(window).width() <= 480) {
        $(".content").load("ajax/hovedside.html");
    } else{
    }

    // Conditionals on resize
    $(window).resize(function(){

        console.log($(".content"));
        if(".content")
        if($(window).width() <= 480) {
            $(".content").show();
            $(".tabMenu, .desMenu").hide();
        } else{
        }
        if($(window).width() > 480){
        }
    });
    // $(".content").load("ajax/bemanning.html");
    // $(".tabMenu").hide();
});
