// crew.js**************************************************

// DOM Elements
const roleElement = document.getElementById("role");
const nameCrew = document.getElementById("name-crew");
const bio = document.getElementById("bio");
const imageCrew = document.getElementById("image-crew");

// Buttons
const commanderButton = document.querySelector(".commander-button");
const missionSpecialistButton = document.querySelector(".mission-specialist-button");
const pilotButton = document.querySelector(".pilot-button");
const flightEngineerButton = document.querySelector(".flight-engineer-button");

// Buttons array (safe)
const crewButtons = [
  commanderButton,
  missionSpecialistButton,
  pilotButton,
  flightEngineerButton,
].filter(Boolean);

// Get saved crew or default
const savedCrew = localStorage.getItem("selectedCrew") || "commander";

// Set active button
function setActiveCrewButton(selectedCrew) {
  crewButtons.forEach((btn) => {
    btn.classList.toggle(
      "active",
      btn.dataset.crew === selectedCrew
    );
  });
}

// Fetch & update UI
function changeCrew(selectedCrew) {
  fetch("data.json")
    .then((res) => res.json())
    .then((data) => {

      const crewData = data.crew.find(
        (c) => c.id === selectedCrew
      );

      if (!crewData) return;

      roleElement.textContent = crewData.role;
      nameCrew.textContent = crewData.name;
      bio.textContent = crewData.bio;
      imageCrew.src = crewData.images.png;
      imageCrew.alt = crewData.name;

      setActiveCrewButton(selectedCrew);
    })
    .catch((err) => console.log("Error:", err));
}

// Load initial state
changeCrew(savedCrew);

// Click events
crewButtons.forEach((btn) => {
  btn.addEventListener("click", () => {

    const selectedCrew = btn.dataset.crew;

    localStorage.setItem("selectedCrew", selectedCrew);

    changeCrew(selectedCrew);
  });
});