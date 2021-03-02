const search = document.querySelector('.search');
const body = document.body;
const nav = document.querySelector('.navbar');
const burger = document.querySelector('.navbar__burger')
const footer = document.querySelector('.page-footer');
let footerHeight = footer.offsetHeight;

// Make Search in Nav to Work
search.addEventListener('click', function(e) {
  e.stopPropagation();
  this.classList.add('search_active');
});

body.addEventListener('click', function() {
  search.classList.remove('search_active');
});
// End Make Search in Nav to Work


burger.addEventListener('click', function() {
  burger.classList.toggle('navbar__burger_menu_open');
});


// Fix footer on the bottom of the page
document.addEventListener('DOMContentLoaded', function() {
  footerHeight = footer.offsetHeight;
  body.style.paddingBottom = footerHeight + 'px';
});

window.addEventListener('resize', function() {
  footerHeight = footer.offsetHeight;
  body.style.paddingBottom = footerHeight + 'px';
});
// End Fix footer on the bottom of the page

