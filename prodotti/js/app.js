$(document).foundation();

$(document).ready(function() {

    mobiscroll.settings = {
        lang: 'it',
        theme: 'ios',
        themeVariant: 'light'
    };
    
    $(function () {
        var bottomDemo = $('#demo-bottom').mobiscroll().popup({
                display: 'bottom',
                buttons: [{
                        text: 'Ok',
                        handler: 'set'
                    },
                    'cancel'
                ]
            }).mobiscroll('getInst')
    
        $('.show-bottom').click(function () {
            bottomDemo.show();
            return false;
        });
    
    });
    
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
    });
});

$( ".product-card" ).click(function() {
    let srcProd = this.firstElementChild.attributes.src.value;

    $("#src-prod").attr("src" , srcProd);
  });

