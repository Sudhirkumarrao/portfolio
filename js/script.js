const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// Mobile Navigation
const navBtnEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

navBtnEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
// Scroll Animation
///////////////////////////////////////////////////////////

const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    if (href !== "#" && href.startsWith("#")) {
      const targetEl = document.querySelector(href);
      targetEl.scrollIntoView({ behavior: "smooth" });
      if (headerEl.classList.contains("nav-open"))
        headerEl.classList.remove("nav-open");
    } else {
      window.open(href, "__blank");
      if (headerEl.classList.contains("nav-open"))
        headerEl.classList.remove("nav-open");
    }
  });
});

///////////////////////////////////////////////////////////
// Sticky Header
///////////////////////////////////////////////////////////
const sectionHeroEl = document.querySelector(".about-section");
const observer = new IntersectionObserver(
  function (entries) {
    const entry = entries[0];
    if (entry.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }

    if (entry.isIntersecting === false) {
      document.body.classList.add("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-48px",
  }
);

observer.observe(sectionHeroEl);
