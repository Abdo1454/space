let techName = document.getElementById("name-tech");
let techDescription = document.getElementById("text-tech");
let imageTech = document.getElementById("image-tech");

let techControl1 = document.getElementById("tech-control-1");
let techControl2 = document.getElementById("tech-control-2");
let techControl3 = document.getElementById("tech-control-3");

// Events
techControl1.addEventListener("click", () => changeTech(0));
techControl2.addEventListener("click", () => changeTech(1));
techControl3.addEventListener("click", () => changeTech(2));

function changeTech(index) {

  fetch("data.json")
    .then((res) => res.json())

    .then((data) => {

      const techData =
        data.technology[index];

      if (techData) {

        // Active button
        techControl1.classList.toggle(
          "active-4",
          index === 0
        );

        techControl2.classList.toggle(
          "active-4",
          index === 1
        );

        techControl3.classList.toggle(
          "active-4",
          index === 2
        );

        // Update content
        techName.textContent =
          techData.name;

        techDescription.textContent =
          techData.description;

        imageTech.src =
          techData.images.portrait;

        imageTech.alt =
          techData.name;
      }
    })

    .catch((err) =>
      console.log("Error:", err)
    );
}

// Default
changeTech(0);