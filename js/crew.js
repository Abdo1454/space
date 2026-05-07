// ****************************************crew.js****************************************
let roleElement = document.getElementById("role");
let nameCrew = document.getElementById("name-crew");
let bio = document.getElementById("bio");
let imageCrew = document.getElementById("image-crew");

let commanderButton = document.querySelector(".commander-button");
let missionSpecialistButton = document.querySelector(
  ".mission-specialist-button"
);
let pilotButton = document.querySelector(".pilot-button");
let flightEngineerButton = document.querySelector(
  ".flight-engineer-button"
);

// Buttons array
const crewButtons = [
  commanderButton,
  missionSpecialistButton,
  pilotButton,
  flightEngineerButton,
];

// Saved crew or default
const savedCrew =
  localStorage.getItem("selectedCrew") || "Commander";

// Active button
function setActiveCrewButton(selectedRole) {

  crewButtons.forEach((btn) => {

    btn.classList.toggle(
      "active",
      btn.dataset.role === selectedRole
    );
  });
}

// Change crew
function changeCrew(selectedRole) {

  fetch("data.json")
    .then((res) => res.json())

    .then((data) => {

      const crewData = data.crew.find(
        (c) => c.role === selectedRole
      );

      if (crewData) {

        roleElement.textContent =
          crewData.role;

        nameCrew.textContent =
          crewData.name;

        bio.textContent =
          crewData.bio;

        imageCrew.src =
          crewData.images.png;

        imageCrew.alt =
          crewData.name;

        setActiveCrewButton(selectedRole);

      } else {

        console.log(
          "Crew member not found:",
          selectedRole
        );
      }
    })

    .catch((err) =>
      console.log("Error:", err)
    );
}

// Initial load
changeCrew(savedCrew);

// Button events
crewButtons.forEach((btn) => {

  btn.addEventListener("click", () => {

    const selectedRole =
      btn.dataset.role;

    localStorage.setItem(
      "selectedCrew",
      selectedRole
    );

    changeCrew(selectedRole);
  });
});
