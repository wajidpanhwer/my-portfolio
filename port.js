 const menuBtn = document.querySelector('.menu-btn');
    const closeBtn = document.querySelector('.close-btn');
    const mobileNav = document.querySelector('.mobile-nav');
    const overlay = document.querySelector('.overlay');

    menuBtn.addEventListener('click', () => {
      mobileNav.classList.add('active');
      overlay.classList.add('active');
    });

    closeBtn.addEventListener('click', () => {
      mobileNav.classList.remove('active');
      overlay.classList.remove('active');
    });

    overlay.addEventListener('click', () => {
      mobileNav.classList.remove('active');
      overlay.classList.remove('active');
    });
// Typing Animation
const texts = ["FRONTEND DEVELOPER", "WEB DESIGNER", "PROGRAMER", "FREELANCER"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";
let isDeleting = false;

(function type() {
  if (count === texts.length) {
    count = 0;
  }

  currentText = texts[count];

  if (isDeleting) {
    letter = currentText.slice(0, --index);
  } else {
    letter = currentText.slice(0, ++index);
  }

  document.querySelector(".typing").textContent = letter;

  if (!isDeleting && letter.length === currentText.length) {
    isDeleting = true;
    setTimeout(type, 1000);
  } else if (isDeleting && letter.length === 0) {
    isDeleting = false;
    count++;
    setTimeout(type, 500);
  } else {
    setTimeout(type, 100);
  }
})();
