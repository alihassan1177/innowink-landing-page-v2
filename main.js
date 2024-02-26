import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";
import AnimatedCursor from "animated-cursor";

const ac = AnimatedCursor();

ac.init();

const locomotiveScroll = new LocomotiveScroll();

gsap.registerPlugin(ScrollTrigger);

const projectCards = gsap.utils.toArray("#project-card");

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

const colorToggleBtn = document.querySelector(".color-toggle");

const darkIcon = new Image();
darkIcon.src = "./assets/images/dark-mode-icon.svg";

const lightIcon = new Image();
lightIcon.src = "./assets/images/light-mode-icon.svg";

colorToggleBtn.append(lightIcon);

const theme = localStorage.getItem("theme");
document.body.classList.add(theme);

colorToggleBtn.innerHTML = "";

const attachBtn = document.querySelector('.attachment-btn')
if (theme == "dark-theme") {
  colorToggleBtn.append(darkIcon);
  attachBtn.classList.replace('btn-outline-dark', 'btn-outline-light')
} else {
  colorToggleBtn.append(lightIcon);
  attachBtn.classList.replace('btn-outline-light', 'btn-outline-dark')
}

colorToggleBtn.addEventListener("click", () => {
  colorToggleBtn.innerHTML = "";
  if (document.body.classList.contains("light-theme")) {
    document.body.classList.replace("light-theme", "dark-theme");
    colorToggleBtn.append(darkIcon);
    localStorage.setItem("theme", "dark-theme");
    attachBtn.classList.replace('btn-outline-dark', 'btn-outline-light')
  } else {
    document.body.classList.replace("dark-theme", "light-theme");
    colorToggleBtn.append(lightIcon);
    localStorage.setItem("theme", "light-theme");
    attachBtn.classList.replace('btn-outline-light', 'btn-outline-dark')
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

if (window.scrollY < 300) {
  exploreIcon.style.opacity = "1";
  arrowDownIcon.style.opacity = "0";
  arrowUpIcon.style.opacity = "0";
}

if (window.scrollY >= 300 && window.scrollY < scrollHeight - 1000) {
  arrowDownIcon.style.opacity = "1";
  exploreIcon.style.opacity = "0";
  arrowUpIcon.style.opacity = "0";
} else if (window.scrollY > 300) {
  arrowUpIcon.style.opacity = "1";
  exploreIcon.style.opacity = "0";
  arrowDownIcon.style.opacity = "0";
}

document.addEventListener("scrollend", (e) => {
  if (window.scrollY < 300) {
    exploreIcon.style.opacity = "1";
    arrowDownIcon.style.opacity = "0";
    arrowUpIcon.style.opacity = "0";
  }

  if (window.scrollY >= 300 && window.scrollY < scrollHeight - 1000) {
    arrowDownIcon.style.opacity = "1";
    exploreIcon.style.opacity = "0";
    arrowUpIcon.style.opacity = "0";
  } else if (window.scrollY > 300) {
    arrowUpIcon.style.opacity = "1";
    exploreIcon.style.opacity = "0";
    arrowDownIcon.style.opacity = "0";
  }
});

