// GITHUB CALENDER
GitHubCalendar(".calendar", "enggsuraj", { responsive: true });

// ANIMATION INITIALIZATION
AOS.init({
  disable: false,
  startEvent: "DOMContentLoaded",
  initClassName: "aos-init",
  animatedClassName: "aos-animate",
  useClassNames: false,
  disableMutationObserver: false,
  debounceDelay: 50,
  throttleDelay: 0,

  offset: 50,
  delay: 0,
  duration: 1000,
  easing: "ease",
  once: true,
  mirror: false,
  anchorPlacement: "top-bottom",
});
