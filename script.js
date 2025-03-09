document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".fade-in");
  
    function checkScroll() {
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.9) {
          el.classList.add("visible");
        }
      });
    }
  
    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Run once to check for already visible elements
  });
  