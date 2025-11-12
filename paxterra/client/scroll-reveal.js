export const initScrollReveal = () => {
  const revealElements = document.querySelectorAll(".reveal-item");

  const observerOptions = {
    rootMargin: "0px 0px -10% 0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const element = entry.target;

        const animationType = element.getAttribute("data-animation");

        element.classList.add(`${animationType}-active`);

        observer.unobserve(element);
      }
    });
  }, observerOptions);

  revealElements.forEach((element) => {
    observer.observe(element);
  });
};
