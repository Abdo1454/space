// const destinationButtons = document.querySelectorAll(
//   ".change-destination button"
// );

let name = document.getElementById("name");
let description = document.getElementById("description");
let distance = document.getElementById("distance");
let travel = document.getElementById("travel");
let imageDestination = document.getElementById("image-destination");
let moonButton = document.querySelector(".moon-button");
let marsButton = document.querySelector(".mars-button");
let europaButton = document.querySelector(".europa-button");
let titanButton = document.querySelector(".titan-button");
// Get saved or default
const savedDestination =
  localStorage.getItem("selectedDestination") || "Moon";

// Fetch data and update UI
function changeDestination(destination) {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {

      const destinationData = data.destinations.find(
        (d) => d.name === destination
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
    .catch((error) => console.log(error));
}

// Load initial data
changeDestination(savedDestination);

// Button clicks
moonButton.addEventListener("click", () => {
  const destination = moonButton.textContent.trim();
  localStorage.setItem("selectedDestination", destination);
  moonButton.classList.add("active");
  marsButton.classList.remove("active");
  europaButton.classList.remove("active");
  titanButton.classList.remove("active");
  changeDestination(destination);
});

marsButton.addEventListener("click", () => {
  const destination = marsButton.textContent.trim();
  localStorage.setItem("selectedDestination", destination);
    moonButton.classList.remove("active");
    marsButton.classList.add("active");
    europaButton.classList.remove("active");
    titanButton.classList.remove("active");
  changeDestination(destination);
});

europaButton.addEventListener("click", () => {
  const destination = europaButton.textContent.trim();
  localStorage.setItem("selectedDestination", destination);
    moonButton.classList.remove("active");
    marsButton.classList.remove("active");
    europaButton.classList.add("active");
    titanButton.classList.remove("active");
  changeDestination(destination);
});

titanButton.addEventListener("click", () => {
  const destination = titanButton.textContent.trim();
  localStorage.setItem("selectedDestination", destination);
    moonButton.classList.remove("active");
    marsButton.classList.remove("active");
    europaButton.classList.remove("active");
    titanButton.classList.add("active");
  changeDestination(destination);
});

    localStorage.setItem(
      "selectedDestination",
      destination
    );

    // changeDestination(destination);
  