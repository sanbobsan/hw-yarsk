const slidesData = [
  {
    img: "https://slamdunk.shop/wp-content/uploads/2025/08/kith-x-chuck-70-low-green-monogram-kithchuck70low-grn.webp",
    price: "9 490 ₽",
    title: "Converse Kith x Chuck 70 Low ‘Green Monogram’",
    reviews: "4.7 (156)",
  },
  {
    img: "https://slamdunk.shop/wp-content/uploads/2025/08/ATTACK3.0_AD90098M_WB_1_600x.webp",
    price: "16 990 ₽",
    title: "AND1 Attack 3.0 White/Black",
    reviews: "4.8 (203)",
  },
  {
    img: "https://slamdunk.shop/wp-content/uploads/2025/08/top-ten-high-white-blue-gold-fz5887.webp",
    price: "14 850 ₽",
    title: "adidas Top Ten High ‘White Blue Gold’",
    reviews: "4.6 (189)",
  },
  {
    img: "https://slamdunk.shop/wp-content/uploads/2025/08/chuck-taylor-all-star-low-malden-street-park-red-a12726c.webp",
    price: "9 990 ₽",
    title: "Converse Chuck Taylor All Star Low ‘Malden Street – Park Red’",
    reviews: "4.5 (142)",
  },
  {
    img: "https://slamdunk.shop/wp-content/uploads/2025/08/footpatrol-x-hiking-patrol-x-instapump-fury-reconnect-with-nature-100210943.webp",
    price: "24 500 ₽",
    title:
      "Reebok Footpatrol x Hiking Patrol x InstaPump Fury ‘Reconnect with Nature’",
    reviews: "4.9 (267)",
  },
  {
    img: "https://slamdunk.shop/wp-content/uploads/2025/08/nike-air-zoom-pegasus-31-men-s-running-shoe-652925-010.webp",
    price: "10 500 ₽",
    title: "Nike Air Zoom Pegasus 31",
    reviews: "4.9 (267)",
  },
];

const slidesContainer = document.getElementById("slidesContainer");

slidesData.forEach((item) => {
  const slide = document.createElement("a");
  slide.href = "#";
  slide.className = "card";

  slide.innerHTML = `
                <img src="${item.img}" alt="${item.title}" />
                <div class="price">${item.price}</div>
                <div class="title">${item.title}</div>
                <div class="reviews">${item.reviews}</div>
            `;

  slidesContainer.appendChild(slide);
});

let currentPosition = 0;
const slideWidth = document.querySelector(".card").offsetWidth + 20;
const visibleSlides = 3;
const totalSlides = slidesData.length;

function nextSlide() {
  currentPosition++;
  if (currentPosition > totalSlides - visibleSlides) {
    currentPosition = 0;
  }

  updateSlider();
}

function prevSlide() {
  currentPosition--;
  if (currentPosition < 0) {
    currentPosition = totalSlides - visibleSlides;
  }
  updateSlider();
}

function updateSlider() {
  slidesContainer.style.transform = `translateX(-${
    currentPosition * slideWidth
  }px)`;
}

window.addEventListener("load", () => {
  const slideWidth = document.querySelector(".card").offsetWidth + 20;
  slidesContainer.style.transform = `translateX(-${
    currentPosition * slideWidth
  }px)`;
});

window.addEventListener("resize", () => {
  const slideWidth = document.querySelector(".card").offsetWidth + 20;
  slidesContainer.style.transform = `translateX(-${
    currentPosition * slideWidth
  }px)`;
});
