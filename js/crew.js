let crewName = document.getElementById("name-crew");
let crewRole = document.getElementById("role");
let crewDescription = document.getElementById("bio");
let imageCrew = document.getElementById("image-crew");

let crewButtons = [
  document.getElementById("crew-id-1"),
  document.getElementById("crew-id-2"),
  document.getElementById("crew-id-3"),
  document.getElementById("crew-id-4"),
];

crewButtons.forEach((btn, index) => {
  btn.addEventListener("click", () => changeCrew(index));
});

function changeCrew(index) {
  fetch("data.json")
    .then((res) => res.json())
    .then((data) => {
      const crewData = data.crew[index];

      if (!crewData) return;

      // remove all active
      crewButtons.forEach((btn) => btn.classList.remove("active"));

      // add active
      crewButtons[index].classList.add("active");

      // update UI (زي ما طلبت بدون تغيير المنطق)
      crewName.textContent = crewData.name;
      crewRole.textContent = crewData.role;
      crewDescription.textContent = crewData.bio;
      imageCrew.src = crewData.images.png;
      imageCrew.alt = crewData.name;
    })
    .catch((err) => console.log("Error:", err));
}

// default
changeCrew(0);