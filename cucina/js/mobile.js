jQuery(document).ready(function(){
    if($(this).width() <= 533 ) {
        //jQuery("p:empty").hide();
        // jQuery('.gbutton').parents('table').hide();
        jQuery('.gbutton').parents('table').width($(this).width());
    }
});

//

$(window).resize(function () {
    if($(this).width() <= 533 ) {
        //jQuery("p:empty").hide();
        //jQuery('.gbutton').parents('table').hide();
        jQuery('.gbutton').parents('table').width($(this).width());
    }
});
