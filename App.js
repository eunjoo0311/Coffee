const modalFront = document.querySelector(".modal-front");
const modalContainer = document.querySelector(".modal-container");
const coupon = document.querySelector(".coupon");
const close = document.getElementById("close");
const modal = document.getElementById("modal");

modalFront.addEventListener("click", function () {
  modalContainer.classList.toggle("flipped");
});

coupon.addEventListener("click", function () {
  modal.style.display = "block";
});

close.addEventListener("click", function () {
  modal.style.display = "none";
});
