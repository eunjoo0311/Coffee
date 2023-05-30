const modalFront = document.querySelector(".modal-front");
const modalContainer = document.querySelector(".modal-container");

modalFront.addEventListener("click", function () {
  modalContainer.classList.toggle("flipped");
});
