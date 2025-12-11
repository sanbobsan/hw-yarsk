// Получаем ссылки на элементы
const actionText = document.getElementById("actionText"); // Было actionButton
const secretImage = document.getElementById("secretImage");
let textImages = document.getElementsByClassName("textImage");
for (const div of textImages) {
  const image = div.getElementsByTagName("img")[0];
  image.style.borderRadius = "12px";

  function showImage() {
    image.style.display = "block";
  }

  function hideImage() {
    image.style.display = "none";
  }

  hideImage();

  const text = div.getElementsByClassName("clickableText")[0];
  text.addEventListener("mousedown", showImage);
  text.addEventListener("mouseup", hideImage);
  text.addEventListener("mouseleave", hideImage);
}
