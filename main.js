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

if (theme == "dark-theme") {
  colorToggleBtn.append(darkIcon);
} else {
  colorToggleBtn.append(lightIcon);
}

colorToggleBtn.addEventListener("click", () => {
  colorToggleBtn.innerHTML = "";
  if (document.body.classList.contains("light-theme")) {
    document.body.classList.replace("light-theme", "dark-theme");
    colorToggleBtn.append(darkIcon);
    localStorage.setItem("theme", "dark-theme");
    scrollIcon.src = "./assets/images/scroll-to-explore-light.svg";
  } else {
    document.body.classList.replace("dark-theme", "light-theme");
    colorToggleBtn.append(lightIcon);
    localStorage.setItem("theme", "light-theme");
    scrollIcon.src = "./assets/images/scroll-to-explore.svg";
  }
});

const scrollIcon = document.querySelector(".scroll-image");

if (theme == "dark-theme") {
  scrollIcon.src = "./assets/images/scroll-to-explore-light.svg";
} else {
  scrollIcon.src = "./assets/images/scroll-to-explore.svg";
}

document.addEventListener("scrollend", (e) => {
  if (window.scrollY == 300) {
    scrollIcon.src = "./assets/images/arrow-down.svg"
  }

  if (window.scrollY == window.innerHeight) {
    scrollIcon.src = "./assets/images/arrow-down.svg"
  }

});
