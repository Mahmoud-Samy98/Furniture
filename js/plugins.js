$(document).ready(function(){

    //loading page

    $(window).on('load', function(){

        $('.loading').fadeOut(1000, function(){

            $('body').css('overflow', 'auto');

        });
        
    })

    // header height
    $(function(){
        $('.header').height($(window).height()-10);
        $('.header img').height($(window).height()-170);
    })

    // navbar toggler

    $('.navbar-toggler').on('click', function(){
        $('nav .one').toggleClass('top');
        $('nav .two').toggleClass('hidden');
        $('nav .three').toggleClass('bottom');
    })



    // smooth scroll

    $('nav li a').on('click', function(){

        $('html, body').animate({

            scrollTop : $( '#' + $(this).data('scroll')).offset().top - 100
        }, 1000)
    });

    // add active to links

    $(window).scroll(function(){

        $('section').each(function(){

            var secID = $(this).attr('id');

            if($(window).scrollTop() + 140 >= $(this).offset().top){

                $('nav li a').removeClass('active');

                $('nav li a[data-scroll = "'+ secID +'"]').addClass('active');
                
            }
        })

        // show button up
        
        if($(window).scrollTop() >= 800){
            $('.up').fadeIn(500);
        }else{
            $('.up').fadeOut(500);
        }

    });

    if($(window).scrollTop() >= 800){
        $('.up').fadeIn(500);
    }else{
        $('.up').fadeOut(500);
    }

    // click on button up

    $('.up').on('click', function(){
        $('body, html').animate({
            scrollTop : 0 
        }, 1000)
    })

    // mix it up

    var mixer = mixitup('.gallary');

    // venobox

    $('.venobox').venobox();

})