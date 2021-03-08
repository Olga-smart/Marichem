const search = document.querySelector('.search');
const body = document.body;
const nav = document.querySelector('.navbar');
const burger = document.querySelector('.navbar__burger')
const footer = document.querySelector('.page-footer');
let footerHeight = footer.offsetHeight;

// Make search in nav to work
search.addEventListener('click', function(e) {
  e.stopPropagation();
  this.classList.add('search_active');
});

body.addEventListener('click', function() {
  search.classList.remove('search_active');
});
// End Make search in nav to work

// Toggle burger class for animation
burger.addEventListener('click', function() {
  burger.classList.toggle('navbar__burger_menu_open');
});
// End Toggle burger class for animation

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

// Make video in modal on product page to work
let videoModal = document.querySelector('#videoModal');

if (videoModal) {
  
  let modalIframe = videoModal.querySelector('iframe');
  
  // Pass src from button to modal
  videoModal.addEventListener('show.bs.modal', function(event) {
    let button = event.relatedTarget;
    modalIframe.setAttribute('src', button.dataset.src);
  });
  
  // Stop playing video when modal is closed
  videoModal.addEventListener('hide.bs.modal', function() {
    modalIframe.setAttribute('src', '');
  });
}
// End Make video in modal on product page to work

