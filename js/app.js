$('.top-icon-slider').slick({
    dots: false,
    autoplay: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
        {
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
        }
        },
        {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
        }
    ]
});


// counter Home page
var a = 0;
$(window).scroll(function() {

  var oTop = $('.level-counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.js-counter-up').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-value');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 5000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
          }

        });
    });
    a = 1;
  }

});

// tabs 
const leftsidebarimg = document.querySelector('.tabsMainSection .leftsidebar img');
const lists = document.querySelectorAll('.tabsMainSection .rightsidebar ul li');

lists.forEach(el => {
    el.addEventListener('click' , () =>{
        lists.forEach(element => {
           element.classList.remove('active'); 
        });
        let imageurl = el.children[0].dataset.imageurl;
        leftsidebarimg.setAttribute('src' , `${imageurl}`);
        el.classList.add('active');
        
    })
});

