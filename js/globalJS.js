$(document).ready(function (){
   
    $(document).on("scroll",function (){
           var pscroll=$(window).scrollTop();
            if(pscroll>150)
               $(".staticSideMenu").css({"top":"40px"});   
             else
                 $(".staticSideMenu").css({"top":(220-pscroll)});        
    });
    
    $(".itemStacticMenu ").click(function (){
        $(".itemStacticMenu").removeClass("activeLink");
        $(this).addClass("activeLink");
        var anchor= $(this).attr("href").toString().replace("#","");
        scrollToAnchor(anchor);
    });
});

function scrollToAnchor(aid){
    var aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}