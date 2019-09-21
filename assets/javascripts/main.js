
$(document).ready( function () {

    AOS.init();
    
    const triforce_logo_position = (function () {

        let to_top_link = $(".to_top"),
        trif_logo = $("#triforce_logo"),
        header_wrap = $("#header_wrap");
    
        return function () {
            let scroll = $(window).scrollTop();
    
            if (scroll >= header_wrap.height()) {
                trif_logo.addClass("small-in-navi").removeClass("back-to-top");
                to_top_link.addClass("small-in-navi").removeClass("back-to-top");
            } else {
                if(trif_logo.hasClass("small-in-navi")){
                    trif_logo.removeClass("small-in-navi")
                    trif_logo.addClass("back-to-top");
                    setTimeout( function () {trif_logo.removeClass("back-to-top")}, 1000);
                }
                if(to_top_link.hasClass("small-in-navi")){
                    to_top_link.removeClass("small-in-navi")
                    //to_top_link.addClass("back-to-top").removeClass("back-to-top");
                }
            }
        }
    })();
    
    triforce_logo_position();
    $(window).scroll(triforce_logo_position);
} );

function resumeIFrameLoaded() {
    $(".pdf_iframe_container").addClass("iframe_loaded");
}