import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";
import AnimatedCursor from "animated-cursor";

const ac = AnimatedCursor();

ac.init();

const locomotiveScroll = new LocomotiveScroll();

gsap.registerPlugin(ScrollTrigger);

const menuToggler = document.querySelector(".menu-toggler");
const headerMenu = document.querySelector(".header-menu");

const getQuoteBtn = document
  .querySelector("#get-quote-btn")
  .addEventListener("click", (e) => {
    window.location.href = "/contact.html"
  });

gsap.to(".circle-wrapper", {
  yPercent: -100,
  opacity: 0.2,
  duration: 1,
  ease: "power2.inOut",
  scrollTrigger: {
    start: "0px",
    trigger: ".circle-wrapper",
    pin: false,
    scrub: 1,
    end: () => `0`,
  },
});

menuToggler.addEventListener("click", () => {
  if (headerMenu.classList.contains("show")) {
    headerMenu.classList.remove("show");
    document.body.classList.remove("menu-open");
  } else {
    headerMenu.classList.add("show");
    document.body.classList.add("menu-open");
  }
});

const projectCards = gsap.utils.toArray("#project-card");

if (projectCards.length > 0) {
  gsap.fromTo(
    projectCards,
    {
      xPercent: 100,
      ease: "none",
    },
    {
      xPercent: -100 * (projectCards.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: "#project-card-wrapper",
        pin: true,
        scrub: 1,
        end: () => "+=1000",
      },
    }
  );
}

const colorToggleBtn = document.querySelector(".color-toggle");

const theme = localStorage.getItem("theme");

document.body.classList.remove("light-theme");
document.body.classList.remove("dark-theme");
document.body.classList.add(theme);

const attachBtn = document.querySelector(".attachment-btn");
if (theme == "dark-theme") {
  attachBtn?.classList.replace("btn-outline-dark", "btn-outline-light");
} else {
  attachBtn?.classList.replace("btn-outline-light", "btn-outline-dark");
}

colorToggleBtn.addEventListener("click", () => {
  if (document.body.classList.contains("light-theme")) {
    document.body.classList.replace("light-theme", "dark-theme");
    localStorage.setItem("theme", "dark-theme");
    attachBtn?.classList.replace("btn-outline-dark", "btn-outline-light");
  } else {
    document.body.classList.replace("dark-theme", "light-theme");
    localStorage.setItem("theme", "light-theme");
    attachBtn?.classList.replace("btn-outline-light", "btn-outline-dark");
  }
});

const exploreIcon = document.querySelector(".explore-icon");
const arrowUpIcon = document.querySelector(".arrow-up-icon");
const arrowDownIcon = document.querySelector(".arrow-down-icon");

exploreIcon.style.opacity = "0";
arrowUpIcon.style.opacity = "0";
arrowDownIcon.style.opacity = "0";

let scrollHeight = Math.max(
  document.body.scrollHeight,
  document.documentElement.scrollHeight,
  document.body.offsetHeight,
  document.documentElement.offsetHeight,
  document.body.clientHeight,
  document.documentElement.clientHeight
);

const logo = document.querySelector(".logo");

if (window.scrollY < 300) {
  exploreIcon.style.opacity = "1";
  logo.style.opacity = "0";
  arrowDownIcon.style.opacity = "0";
  arrowUpIcon.style.opacity = "0";
}

if (window.scrollY >= 300 && window.scrollY < scrollHeight - 1000) {
  arrowDownIcon.style.opacity = "1";
  logo.style.opacity = "1";
  exploreIcon.style.opacity = "0";
  arrowUpIcon.style.opacity = "0";
} else if (window.scrollY > 300) {
  logo.style.opacity = "1";
  arrowUpIcon.style.opacity = "1";
  exploreIcon.style.opacity = "0";
  arrowDownIcon.style.opacity = "0";
}

document.addEventListener("scrollend", (e) => {
  if (window.scrollY < 300) {
    exploreIcon.style.opacity = "1";
    logo.style.opacity = "0";
    arrowDownIcon.style.opacity = "0";
    arrowUpIcon.style.opacity = "0";
  }

  if (window.scrollY >= 300 && window.scrollY < scrollHeight - 1000) {
    logo.style.opacity = "1";
    arrowDownIcon.style.opacity = "1";
    exploreIcon.style.opacity = "0";
    arrowUpIcon.style.opacity = "0";
  } else if (window.scrollY > 300) {
    logo.style.opacity = "1";
    arrowUpIcon.style.opacity = "1";
    exploreIcon.style.opacity = "0";
    arrowDownIcon.style.opacity = "0";
  }
});
