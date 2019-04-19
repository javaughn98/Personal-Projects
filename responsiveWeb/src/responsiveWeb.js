jQuery(document).ready(function () {
    "use strict"
// function used for the carousel slider for intr page
    $('#slid-carousel').carouFredSel({
        responsive: true,
        width: '100%',
        circular: true,
        scroll: {
            items: 1,
            duration: 500,
            pauseOnHover: true
        },
        auto: true,
        items: {
            visible: {
                min: 1,
                max: 1
            },
            height: "variable"
        },
        pagination: {
            container: ".sliderpager",
            pageAnchorBuilder: false
        }

    });
    // added effects to the header bar on scroll
    $(Window).scroll(function () {
        var start = $(window).scrollTop();
        if(start >= 60) {
            $("header").addClass('secondary');
        }
        else { 
            if($("header").hasClass('secondary')) {
                $("header").removeClass('secondary')
            }
        }
        
    });
});

