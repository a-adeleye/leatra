function showScrollToTop() {
  const scroll = document.querySelector(".scroll-to-top");
  if (
    document.documentElement.scrollTop >= 300 ||
    document.body.scollTop >= 300
  ) {
    scroll.style.opacity = "1";
  } else {
    scroll.style.opacity = "0";
  }
}

function scrollUp() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

window.onscroll = function () {
  showScrollToTop();
};

window.onload = () => {
  document.querySelector(".scroll-to-top").addEventListener("click", scrollUp);
};

function reveal() {
  const texts = document.querySelectorAll(".text");
  const images = document.querySelectorAll(".product--image");
  for (let i = 0; i < texts.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = texts[i].getBoundingClientRect().top;
    const elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      texts[i].classList.add("active");
      images[i].classList.add("active");
    } else {
      texts[i].classList.remove("active");
      images[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

reveal();
