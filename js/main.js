// ********************************destination*******************************
const destinationButtons = document.querySelectorAll(".change-destination button");
const destinationTitle = document.querySelector(".destination-title");
destinationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons     
    destinationButtons.forEach((btn) => btn.classList.remove("active"));
    // Add active class to clicked button
    button.classList.add("active");
  });
}); 