// function animateOnScroll() {
//   let elements = document.querySelectorAll(".animate-on-scroll");
//   let windowHeight = window.innerHeight;

//   elements.forEach((el) => {
//     let position = el.getBoundingClientRect().top;
//     if (position < windowHeight - 200) {
//       el.classList.add("show");
//     }
//   });
// }

// window.addEventListener("scroll", animateOnScroll);
// window.addEventListener("load", animateOnScroll);

function animateOnScroll() {
  let elements = document.querySelectorAll(".animate-on-scroll");
  let windowHeight = window.innerHeight;

  elements.forEach((el) => {
    let position = el.getBoundingClientRect().top;

    // Fade in when the element is visible
    if (position < windowHeight - 200) {
      el.classList.add("show");
    }
    // Fade out when scrolling up
    else {
      el.classList.remove("show");
    }
  });
}

window.addEventListener("scroll", animateOnScroll);
window.addEventListener("load", animateOnScroll);
