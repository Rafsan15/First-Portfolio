
$(document).ready(function () {


    let $btns = $('.project-area .button-group button');


    $btns.click(function (e) {

        $('.project-area .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.project-area .grid').isotope({
            filter: selector
        });

        return false;
    })

    $('.project-area .button-group #btn1').trigger('click');

    // $('.project-area .grid .test-popup-link').magnificPopup({
    //     type: 'image',
    //     gallery: { enabled: true }
    // });


    // Navbar Active buttons
    let $navbtns = $('.header_area .main-menu .navbar .navbar-nav .nav-item a');


    $navbtns.click(function (e) {

        $('.header_area .main-menu .navbar .navbar-nav .nav-item a').removeClass('active');
        e.target.classList.add('active');

    })

    // // Owl-carousel

    // $('.site-main .about-area .owl-carousel').owlCarousel({
    //     loop: true,
    //     autoplay: true,
    //     dots: true,
    //     responsive: {
    //         0: {
    //             items: 1
    //         },
    //         560: {
    //             items: 2
    //         }
    //     }
    // })

    // sticky navigation menu

    let nav_offset_top = $('.header_area').height() + 50;

    function navbarFixed() {
        if ($('.header_area').length) {
            $(window).scroll(function () {
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('.header_area .main-menu').addClass('navbar_fixed');
                } else {
                    $('.header_area .main-menu').removeClass('navbar_fixed');
                }
            })
        }
    }

    navbarFixed();

});



let options = {
    startAngle: -1.55,
    value: 0.95,
    size: 150,
    fill: {
    gradient: ['#020024', '#00d4ff' ,'#5c0067']
    }
}
$('.circle .bar').circleProgress(options).on('circle-animation-progress',function(event, progress, stepValue){ 
    $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%");
});
$(".java .bar").circleProgress({
    value:0.80
})
$(".js .bar").circleProgress({
    value:0.75
})
$(".bootstrap .bar").circleProgress({
    value:0.80
})
$(".c .bar").circleProgress({
    value:0.99
})
$(".cpp .bar").circleProgress({
    value:0.99
})
$(".csh .bar").circleProgress({
    value:0.95
})

$(".php .bar").circleProgress({
    value:0.85
})


let options2 = {
    startAngle: -1.55,
    value: 0.91,
    size: 150,
    fill: {
    gradient: ['#990000', '#206020' ,'#fff5cc']
    }
}
$('#databaseCircle #databaseBar').circleProgress(options2).on('circle-animation-progress',function(event, progress, stepValue){ 
    $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%");
});
$(".mySql #databaseBar").circleProgress({
    value:0.80
})

let options3 = {
    startAngle: -1.55,
    value: 0.99,
    size: 150,
    fill: {
    gradient: ['#ff99bb', '#002266' ,'#001a00']
    }
}
$('#othersCircle #othersBar').circleProgress(options3).on('circle-animation-progress',function(event, progress, stepValue){ 
    $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%");
});
$(".jira #othersBar").circleProgress({
    value:0.95
})
$(".orchard #othersBar").circleProgress({
    value:0.80
})
$(".communication #othersBar").circleProgress({
    value:0.90
})


