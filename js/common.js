 $(document).ready(function () {

     $('.mainLeft').slick({
         slidesToShow: 1,
         slidesToScroll: 1,
         autoplay: true,
         autoplaySpeed: 1000,
     });

     AOS.init({
         offset: 250, 
         delay: 0, 
         duration: 600, 
         easing: 'linear', 
         once: true, 
     });

 });
