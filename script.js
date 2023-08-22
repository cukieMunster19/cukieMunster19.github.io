const aboutLink = document.querySelector('nav ul li:nth-child(1) a');
const pricingLink = document.querySelector('nav ul li:nth-child(2) a');
const stitchPatternsLink = document.querySelector('nav ul li:nth-child(3) a');
const contactLink = document.querySelector('nav ul li:nth-child(4) a');
const galleryLink = document.querySelector('nav ul li:nth-child(5) a');
const navBottomAboutLink = document.querySelector('.nav-bottom ul li:nth-child(1) a');
const navBottomPricingLink = document.querySelector('.nav-bottom ul li:nth-child(2) a');
const navBottomStitchPatternsLink = document.querySelector('.nav-bottom ul li:nth-child(3) a');
const navBottomContactLink = document.querySelector('.nav-bottom ul li:nth-child(4) a');
const navBottomGalleryLink = document.querySelector('.nav-bottom ul li:nth-child(5) a');
const aboutSection = document.querySelector('#about');
const pricingSection = document.querySelector('#pricing');
const stitchPatternsSection = document.querySelector('#stitch-patterns');
const contactSection = document.querySelector('#contact');
const gallerySection = document.querySelector('#gallery');
const bookBtns = document.querySelectorAll('.book-btn');
const bookQuiltFormSection = document.querySelector('#book-quilt-form');

// hide all sections except the first one
pricingSection.style.display = 'none';
stitchPatternsSection.style.display = 'none';
contactSection.style.display = 'none';
gallerySection.style.display = 'none';

// function to hide all sections and show the specified section
function showSection(section) {
  aboutSection.style.display = 'none';
  pricingSection.style.display = 'none';
  stitchPatternsSection.style.display = 'none';
  contactSection.style.display = 'none';
  gallerySection.style.display = 'none';
  bookQuiltFormSection.style.display = 'none';
  section.style.display = 'block';
}

// add event listeners to the navigation links
aboutLink.addEventListener('click', event => {
  event.preventDefault();
  showSection(aboutSection);
});

pricingLink.addEventListener('click', event => {
  event.preventDefault();
  showSection(pricingSection);
});

stitchPatternsLink.addEventListener('click', event => {
  event.preventDefault();
  showSection(stitchPatternsSection);
});

contactLink.addEventListener('click', event => {
  event.preventDefault();
  showSection(contactSection);
});

galleryLink.addEventListener('click', event => {
  event.preventDefault();
  showSection(gallerySection);
});

navBottomAboutLink.addEventListener('click', event => {
  event.preventDefault();
  showSection(aboutSection);
});

navBottomPricingLink.addEventListener('click', event => {
  event.preventDefault();
  showSection(pricingSection);
});

navBottomStitchPatternsLink.addEventListener('click', event => {
  event.preventDefault();
  showSection(stitchPatternsSection);
});

navBottomContactLink.addEventListener('click', event => {
  event.preventDefault();
  showSection(contactSection);
});

navBottomGalleryLink.addEventListener('click', event => {
  event.preventDefault();
  showSection(gallerySection);
});


bookBtns.forEach(btn => {
  btn.addEventListener('click', event => {
      event.preventDefault();
      console.log("Button Clicked");
      showSection(bookQuiltFormSection);
  });
});


// Embed the Google Form in the Book Quilt Form section
const bookQuiltFormContent = document.querySelector('#book-quilt-form .book-quilt-form-content');
if (bookQuiltFormContent) {
  bookQuiltFormContent.innerHTML = '<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdRx3Vxuw7hf546a3VdWL65Qlncwt-mtFl0NkxS3OCBaWeXNQ/viewform?embedded=true" width="640" height="462" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>';
}