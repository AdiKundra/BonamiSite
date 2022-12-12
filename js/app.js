$('.top-icon-slider').slick({
    dots: false,
    autoplay: true,
    arrows: false,
    infinite: true,
    speed: 300,
    autoplaySpeed: 1000,
    slidesToShow: 8,
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


$('.boxSliderWithRow').slick({
  rows: 3,
  dots: true,
  autoplay: true,
  arrows: false,
  loop: true,
  infinite: true,
  speed: 1000,
  autoplaySpeed: 3000,
  slidesToShow: 3,
  slidesToScroll: 3
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



// accordion

$(function () {
  $(".accordion-content").css("display", "none");
 
  $(".js-accordion-title").click(function () {
    $(".open").not(this).removeClass("open").next().slideUp(300);
    $(this).toggleClass("open").next().slideToggle(300);
  });
});

$(document).ready(function () {
  if ($('.accordion-container .accordion-title').hasClass('extra')) {
    $('.accordion-container .accordion-title.extra').hide();
  };

  $("#loadMore").on("click", function (e) {
    e.preventDefault();
    $('.accordion-container .accordion-title').show().speed('500');
    if ($(".accord-wrapper:hidden").length == 0) {
      $("#loadMore").text("No Content").addClass("noContent");

    }
  });
});

 


// type writter
var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
  this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
  this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
  delta = this.period;
  this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
  this.isDeleting = false;
  this.loopNum++;
  delta = 500;
  }

  setTimeout(function() {
  that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};

