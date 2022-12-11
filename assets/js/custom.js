var swiper = new Swiper(".company-name", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: true,
    loop: true,
    autoplay: {
        delay: 500,
        disableOnInteraction: false,
    },
    breakpoints: {
        576: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 50,
        },
    },
});
// nirob 
$(document).ready(function(){
	// $('.accordion-box:first').addClass('active');
	// $('.accordion-box:first').children('.acc-trigger').children('i').addClass('fa-minus');
	// $('.accordion-box:first').children('.acc-trigger').addClass('selected').next('.acc-container').show();

	

    $('.acc-trigger').click(function(event){
    	if($(this).hasClass('selected')){

    		$(this).removeClass('selected');
    		$(this).children('i').removeClass('fa-minus');
    		$(this).next().slideUp();
    		$(this).parent().removeClass('active');


    	}else{

    		$('.acc-trigger').removeClass('selected');
    		$(this).addClass('selected');
    		$('.acc-trigger').children('i').removeClass('fa-minus');
    		$(this).children('i').addClass('fa-minus');
    		$('.acc-trigger').next().slideUp();
    		$(this).next().slideDown();
    		$('.accordion-box').removeClass('active');
    		$(this).parent().addClass('active');
    	}
    });
})

// one click 
let nav = document.querySelector ('nav');
let bars = document.querySelector('.mobile-menu');

bars.addEventListener ("click", ()=>{
    nav.classList.toggle('close')
})