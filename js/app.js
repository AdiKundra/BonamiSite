$('.top-icon-slider').slick({
  dots: false,
  arrows: false,
  autoplay: true,
  infinite: true,
  speed: 1000,
  autoplaySpeed: 100,
  slidesToShow: 8,
  slidesToScroll: 1,
  centerMode: false,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1500,
      settings: {
        dots: false,
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: false,
        dots: false
      }
    },
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToScroll: 1,
        slidesToShow: 2,
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

const industriesleftsidebarimg = document.querySelector('.industries-section2-rightimage');
const industrieslists = document.querySelectorAll('.industries-solution-text');
const industriesSectionTitle = document.querySelector('.industries-section2-heading');
const industriesSectionText=document.querySelector('.industries-section2-text')
console.log("---inmg tag---", industriesleftsidebarimg);
console.log("---list tag---", industrieslists);

industrieslists.forEach(el => {
    el.addEventListener('click' , () =>{
      industrieslists.forEach(element => {
           element.classList.remove('active'); 
        });
        industriesSectionTitle.innerHTML = el.dataset.title
        industriesSectionText.innerHTML=el.dataset.text
        let imageurl = el.dataset.imageurl;
        industriesleftsidebarimg.setAttribute('src' , `${imageurl}`);
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
    $("#loadMore").addClass("d-none");
    e.preventDefault();
    $('.accordion-container .accordion-title').show().speed('500');
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



// services page readmore

// $('.extraReadmore').slideUp();

$(".readmore").on("click", function (e) {
  e.preventDefault();
  if ($(this).hasClass('active')) {
    $(this).removeClass('active')
    $(this).text("Read More");
  }else{
    $(this).text("Read Less");
    $(this).addClass('active')
  }
  $(this).prev().slideToggle()
  
});