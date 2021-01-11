$('.carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverpause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})

var elSiteNav = document.querySelector('.siteNav');

document.addEventListener('scroll',function(){
            if(window.scrollY>500){
                elSiteNav.classList.add('siteNav-fixed');
                document.body.style.marginTop=elSiteNav.scrollHeight+ 'px';
            }
            else{
                elSiteNav.classList.remove('siteNav-fixed');
                document.body.style.marginTop='0';
            }
})