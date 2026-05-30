// ========================= script.js =========================

// MOBILE MENU

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// ================= TYPING EFFECT =================

const typingElement = document.querySelector(".typing");

const words = [
  "Frontend Developer",
  "Problem Solver",
  "Aspiring Data Analyst",
  "JavaScript Enthusiast",
  "React JS Developer"
  
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

  const currentWord = words[wordIndex];

  if (!isDeleting) {
    typingElement.textContent =
      currentWord.substring(0, charIndex + 1);

    charIndex++;

    if (charIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1500);
      return;
    }

  } else {

    typingElement.textContent =
      currentWord.substring(0, charIndex - 1);

    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }

  setTimeout(typeEffect, isDeleting ? 60 : 120);
}

typeEffect();

// ================= SCROLL REVEAL =================

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", revealSections);

function revealSections() {

  reveals.forEach((element) => {

    const windowHeight = window.innerHeight;
    const revealTop = element.getBoundingClientRect().top;

    if (revealTop < windowHeight - 100) {
      element.classList.add("active");
    }

  });
}

revealSections();

// ================= COUNTER =================

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if (entry.isIntersecting) {

      const counter = entry.target;
      const target = +counter.dataset.target;

      let count = 0;

      const updateCounter = () => {

        const increment = target / 80;

        if (count < target) {
          count += increment;
          counter.innerText = Math.ceil(count);
          requestAnimationFrame(updateCounter);
        } else {
          counter.innerText = target;
        }
      };

      updateCounter();
      counterObserver.unobserve(counter);
    }

  });

});

counters.forEach(counter => {
  counterObserver.observe(counter);
});

// ================= CURSOR GLOW =================

const glow = document.querySelector(".cursor-glow");

window.addEventListener("mousemove", (e) => {

  glow.style.left = e.clientX - 150 + "px";
  glow.style.top = e.clientY - 150 + "px";

});

// ================= 3D TILT EFFECT =================

const tiltCards = document.querySelectorAll(".tilt-card");

tiltCards.forEach(card => {

  card.addEventListener("mousemove", (e) => {

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / 20);
    const rotateY = ((centerX - x) / 20);

    card.style.transform =
      `perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.03)`;

  });

  card.addEventListener("mouseleave", () => {

    card.style.transform =
      `perspective(1000px)
      rotateX(0)
      rotateY(0)
      scale(1)`;

  });

});

// ================= PARTICLES =================

const particlesContainer = document.querySelector(".particles");

for (let i = 0; i < 60; i++) {

  const particle = document.createElement("span");

  particle.style.position = "absolute";
  particle.style.width = Math.random() * 5 + "px";
  particle.style.height = particle.style.width;

  particle.style.background = "white";
  particle.style.opacity = Math.random();

  particle.style.left = Math.random() * 100 + "%";
  particle.style.top = Math.random() * 100 + "%";

  particle.style.borderRadius = "50%";

  particle.style.animation =
    `floating ${Math.random() * 10 + 5}s infinite ease-in-out`;

  particlesContainer.appendChild(particle);
}