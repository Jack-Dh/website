$(function () {
    $().UItoTop({easingType: 'easeOutQuart'});
    $(".scroll").click(function (event) {
        event.preventDefault();
        $('html,body').animate({scrollTop: $(this.hash).offset().top}, 1000);
    });
    $("#owl-demo2").owlCarousel({
        items: 1,
        lazyLoad: false,
        autoPlay: true,
        navigation: false,
        navigationText: false,
        pagination: true,
    });
    $(window).load(function () {
        //服饰
        $("#flexiselDemo1").flexisel({
            visibleItems: 4,
            animationSpeed: 1000,
            autoPlay: true,
            autoPlaySpeed: 3000,
            pauseOnHover: true,
            enableResponsiveBreakpoints: true,
            responsiveBreakpoints: {
                portrait: {
                    changePoint: 480,
                    visibleItems: 1
                },
                landscape: {
                    changePoint: 667,
                    visibleItems: 2
                },
                tablet: {
                    changePoint: 800,
                    visibleItems: 3
                }
            }
        });

        // 食品酒水
        $("#food").flexisel({
            visibleItems: 4,
            animationSpeed: 1000,
            autoPlay: true,
            autoPlaySpeed: 3000,
            pauseOnHover: true,
            enableResponsiveBreakpoints: true,
            responsiveBreakpoints: {
                portrait: {
                    changePoint: 480,
                    visibleItems: 1
                },
                landscape: {
                    changePoint: 667,
                    visibleItems: 2
                },
                tablet: {
                    changePoint: 800,
                    visibleItems: 3
                }
            }
        });

        //美妆
        $("#makeup").flexisel({
            visibleItems: 4,
            animationSpeed: 1000,
            autoPlay: true,
            autoPlaySpeed: 3000,
            pauseOnHover: true,
            enableResponsiveBreakpoints: true,
            responsiveBreakpoints: {
                portrait: {
                    changePoint: 480,
                    visibleItems: 1
                },
                landscape: {
                    changePoint: 667,
                    visibleItems: 2
                },
                tablet: {
                    changePoint: 800,
                    visibleItems: 3
                }
            }
        });

        //母婴
        $("#infant").flexisel({
            visibleItems: 4,
            animationSpeed: 1000,
            autoPlay: true,
            autoPlaySpeed: 3000,
            pauseOnHover: true,
            enableResponsiveBreakpoints: true,
            responsiveBreakpoints: {
                portrait: {
                    changePoint: 480,
                    visibleItems: 1
                },
                landscape: {
                    changePoint: 667,
                    visibleItems: 2
                },
                tablet: {
                    changePoint: 800,
                    visibleItems: 3
                }
            }
        });

        //家居
        $("#households").flexisel({
            visibleItems: 4,
            animationSpeed: 1000,
            autoPlay: true,
            autoPlaySpeed: 3000,
            pauseOnHover: true,
            enableResponsiveBreakpoints: true,
            responsiveBreakpoints: {
                portrait: {
                    changePoint: 480,
                    visibleItems: 1
                },
                landscape: {
                    changePoint: 667,
                    visibleItems: 2
                },
                tablet: {
                    changePoint: 800,
                    visibleItems: 3
                }
            }
        });




        // 主营业务
        $("#flexiselDemo2").flexisel({
            visibleItems: 1,
            animationSpeed: 1000,
            autoPlay: false,
            autoPlaySpeed: 3000,
            pauseOnHover: true,
            enableResponsiveBreakpoints: true,
            responsiveBreakpoints: {
                portrait: {
                    changePoint: 480,
                    visibleItems: 1
                },
                landscape: {
                    changePoint: 667,
                    visibleItems: 2
                },
                tablet: {
                    changePoint: 800,
                    visibleItems: 3
                }
            }
        });

    });

    $(window).scroll(function () {
        let N = $(document).scrollTop()
        if (N > 0) {
            $('#navstyle').addClass('addClssBag')
        } else if (N == 0) {
            $('#navstyle').removeClass('addClssBag')
        }
        //do something...

    });


    $("#bars li .bar").each(function (key, bar) {
        var percentage = $(this).data('percentage');

        $(this).animate({
            'height': percentage + '%'
        }, 1000);
    })

    $(window).load(function () {
        $('#JiSlider').JiSlider({color: '#fff', start: 3, reverse: true}).addClass('ff')
    })

    $('#myTab span:last').tab('show');
    $('#myTabs span:last').tab('show');
})


$('#myTab span').click(function (e) {
    e.preventDefault();
    $(this).tab('show');
    $(this).parent().addClass('selected').siblings().removeClass('selected')
})
$('#myTabs span').click(function (e) {
    e.preventDefault();
    $(this).tab('show');
    $(this).parent().addClass('selected').siblings().removeClass('selected')
})
$('.counter').countUp();

function tagger() {
    $('#FloatingButton').hide()
    $('#Floatinginput').show()
    $('#Floatinginput').addClass('taggerhide')


    // taggerhide
}

function taggerinput() {
    $('#FloatingButton').show()
    $('#Floatinginput').hide()
    // taggerhide
}
