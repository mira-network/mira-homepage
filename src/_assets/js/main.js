import "./_bootstrap.js"

(function() {
    $(document).ready(function() {
        $('.logo-carousel').slick({
            infinite: true,
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            dots: true,
        });
    });

})();