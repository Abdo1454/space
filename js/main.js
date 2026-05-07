let name = document.getElementById("name-destination");
let description = document.getElementById("description");
let distance = document.getElementById("distance");
let travel = document.getElementById("travel");
let imageDestination = document.getElementById("image-destination");

let moonButton = document.querySelector(".moon-button");
let marsButton = document.querySelector(".mars-button");
let europaButton = document.querySelector(".europa-button");
let titanButton = document.querySelector(".titan-button");

// Buttons array
const buttons = [moonButton, marsButton, europaButton, titanButton];

// Get saved or default
const savedDestination = localStorage.getItem("selectedDestination") || "Moon";

// Set active button
function setActiveButton(destination) {
  buttons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.destination === destination);
  });
}

// Fetch and update UI
function changeDestination(destination) {
  fetch("data.json")
    .then((res) => res.json())
    .then((data) => {
      const destinationData = data.destinations.find(
        (d) => d.name === destination,
      );

      if (destinationData) {
        name.textContent = destinationData.name;
        description.textContent = destinationData.description;
        distance.textContent = destinationData.distance;
        travel.textContent = destinationData.travel;
        imageDestination.src = destinationData.images.png;
        imageDestination.alt = destinationData.name;

        setActiveButton(destination);
      }
    })
    .catch((err) => console.log("Error:", err));
}

// Load initial state
changeDestination(savedDestination);

// Handle clicks
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const destination = btn.dataset.destination;

    localStorage.setItem("selectedDestination", destination);

    changeDestination(destination);
  });
});
