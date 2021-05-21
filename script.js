'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const scrollToTopBtn = document.querySelector('.back__top');
const nav = document.querySelector('.nav');
const tab = document.querySelectorAll('.operations__tab');
const tabsContent = document.querySelectorAll('.operations__tab-content');
const tabsContainer = document.querySelector('.operations__tab-container');
///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function (e) {

  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Cookie Message
const header = document.querySelector('.header');
const message = document.createElement('div');
message.classList.add('cookie-message');

message.innerHTML = `We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>`;

header.append(message);

document.querySelector('.btn--close-cookie').addEventListener('click', () => {
  message.parentElement.removeChild(message);
});

// Smooth Scrool
const section1 = document.getElementById('section--1');
document.querySelector('.btn--scroll-to').addEventListener('click', (e) => {
  e.preventDefault();
  section1.scrollIntoView({
    behavior: 'smooth'
  });
});

// Menu fade animation
const handleHover = function (e) {

  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const sibling = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    sibling.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};


nav.addEventListener('mouseover', handleHover.bind(0.4));
nav.addEventListener('mouseout', handleHover.bind(1));

// back to top 
window.addEventListener('scroll', function () {
  const yCoord = window.pageYOffset;
  if (yCoord > 400) {
    scrollToTopBtn.style.opacity = 1;
  } else {
    scrollToTopBtn.style.opacity = 0;
  }
});