$(document).ready(function(){
    $('#hero-slider').owlCarousel({
        loop:true,
        margin:00,
        nav:true,
        items:1,
        dots:false,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:false,

        navText:['prev','Next'],
        responsive:{
            0:{
              nav:false,  
            },
            600:{
                
            },
            1000:{
               
            }
        }
    })

    $('#project-slider').owlCarousel({
        loop:true,
        margin:00,
        nav:false,
        dots:false,
        navText:['prev','Next'],
        margin:24,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:false,
        responsive:{
            0:{
              items:1,
            },
            600:{
               items:2, 
            },
            1000:{
               items:2,
               center:true,
            }
        }
    })
 });

