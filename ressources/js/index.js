import { carousel } from "../../assets/data.js";
import { createElement } from "./function/dom.js";

function generateCarousel() {
  const container = document.getElementById("carousel_container");
  // Besoin du premier index initialisation
  let currentIndex = 0;

  function showSlide(index) {
    //Met le container vide avant d'ajouter quelque chose
    container.innerHTML = "";
    // chagpt
    const actualIndex = (index + carousel.length) % carousel.length;
    // creer le slide
    const slide = createElement("div", { class: "carousel_slide" });
    //On envoie l'index correspondant
    slide.innerHTML = ` <img src="${carousel[actualIndex].img}" alt="Image ">      <button class="add_to_basket">
      <img src="./assets/images/cta.png" alt="commander"  />
    </button>
    `;
    // ajoute le slide au container
    container.appendChild(slide);
  }

  // Montre la premiere image
  showSlide(0);
  function nextSlide() {
    currentIndex = (currentIndex + 1) % carousel.length;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + carousel.length) % carousel.length;
    showSlide(currentIndex);
  }
  document
    .querySelector(".next-button")
    .addEventListener("click", () => nextSlide());
  document
    .querySelector(".prev-button")
    .addEventListener("click", () => prevSlide());
}

generateCarousel();

// On aurait pu creer une class Slide
