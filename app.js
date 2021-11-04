// intro splash

let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded',()=>{
    setTimeout(()=>{

        logoSpan.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            },(idx + 1) * 400)
        });
        setTimeout(()=>{
            logoSpan.forEach((span, idx)=>{
                setTimeout(()=>{
                    span.classList.remove('active');
                    span.classList.add('fade');
                },(idx + 1)* 5)
            })
        },2000);

        setTimeout(()=>{
            intro.style.top = '-100vh'
        },2300)


    })
})
$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        });
        //toggle menu/navbar menu
        $('.menu-btn').click(function(){
            $('.navbar .menu').toggleClass("active");
            $('.menu-btn i').toggleClass("active");
        });
        //owl carousel script
        $('.carousel').owlCarousel({
            margin: 20,
            loop: true,
            autoplay: true,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
            responsive:{
                0:{
                    items:1,
                    nav: false
                },
                600:{
                    items:2,
                    nav: false
                },
                1000:{
                    items:3,
                    nav: false
                }
            }

        });

    });

    // typing animation 
    var typed = new Typed(".typing",{
        strings : ["Developer", "Streamer", "Designer", "Engineer"],
        typeSpeed : 100,
        backSpeed : 60,
        loop: true
    });
    var typed = new Typed(".typing-2",{
        strings : ["Developer", "Streamer", "Designer", "Engineer"],
        typeSpeed : 100,
        backSpeed : 60,
        loop: true
    });
