/* PreLoader */

// constructor function
function UI() {};

// hide preloader
UI.prototype.hidePreloader = function () {
 const preloader = document.querySelector('.preloader');
 preloader.style.display = 'none';
};

// event listener function
function eventListener() {
 const ui = new UI();

 // hide preloader
 window.addEventListener('load', function () {
  ui.hidePreloader();
 });

};

// call event Listener
eventListener();

// ******************************************
/* Nav */

$(document).ready(function () {
 //toggle button
 $('.btn').click(function () {
  $('.nav-links').slideToggle(500);
  $('.btn').toggleClass('change');
 })

 // Transparent Background
 $(window).scroll(function () {
  let position = $(window).scrollTop();

  if (position >= 100) {
   $('nav, nav-container').addClass('navBackground')
  } else {
   $('nav, nav-container').removeClass('navBackground')

  }

 })

 //smooth scroll
 $('.nav-links a').click(function (link) {
  link.preventDefault();

  let target = $(this).attr('href');
  $('html, body').stop().animate({
   scrollTop: $(target).offset().top
  }, 2000);
 })

 // owl team
 $('.team-center').owlCarousel({
  loop: true,
  margin: 10,
  smartSpeed: 1000,
  nav: true,
  responsive: {
   0: {
    items: 1
   },
   600: {
    items: 3
   },
   1000: {
    items: 5
   }
  }
 })

 //owl customers
 $('.customers-center').owlCarousel({
  loop: true,
  margin: 10,
  smartSpeed: 1000,
  nav: true,
  responsive: {
   0: {
    items: 1
   },
   600: {
    items: 1
   },
   1000: {
    items: 3
   }
  }
 })

})

/* functionality of contact stage */

const submit = document.querySelector('.contact-submit');
const inputName = document.querySelector('.contact-firstName');
const inputLastName = document.querySelector('.contact-lastName');
const inputEmail = document.querySelector('.contact-email');
const inputTextArea = document.querySelector('.contact-textArea');
submit.addEventListener('click', massage);

function massage(event) {
 event.preventDefault();
 let valueName = inputName.value;
 let valueLastName = inputLastName.value;
 let valueEmail = inputEmail.value;
 let valueTextArea = inputTextArea.value;

 if (valueName === '' && valueLastName === '' && valueEmail === '' && valueTextArea === '') {
  swal("Oops!", "Double Check Your Data.", "error");
  inputName.value = '';
  inputLastName.value = '';
  inputEmail.value = '';
  inputTextArea.value = '';
 } else {
  swal("Done!", "Your message was sent.", "success");
  inputName.value = '';
  inputLastName.value = '';
  inputEmail.value = '';
  inputTextArea.value = '';
 }
}