$(document).ready(function (){
   $(".divTipoMalware ").click(function (){
        $(".divTipoMalware").removeClass("activeLink");
        $(this).addClass("activeLink");
        var anchor= $(this).attr("href").toString().replace("#","");
        scrollToAnchor(anchor);
    });
    
    $(document).on("scroll",function (){
           var pscroll=$(window).scrollTop();
            if(pscroll>150)
               $(".menuMalware").css({"top":"40px"});   
             else
                 $(".menuMalware").css({"top":(220-pscroll)});        
    });
});

function scrollToAnchor(aid){
    var aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}