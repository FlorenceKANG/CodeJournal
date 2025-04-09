// Récupérer le élément parent
const ballonsContainer = document.getElementById("balloons");

// Boucle pour créer 30 éléments enfants
for (let index = 0; index < 30; index++) {
  const randomIndex = Math.floor(Math.random(index + 1) * index);
  const ballonItem = document.createElement("span");
  ballonItem.classList.add("balloon");
  ballonItem.setAttribute("style", `--i:${randomIndex}`);
  ballonsContainer.appendChild(ballonItem);
}

// Fonction pour générer une couleur hexadécimale aléatoire
function getRandomColor() {
  const letters = "89ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }
  return color;
}

// Applique une couleur aléatoire aux ballons impairs
document.querySelectorAll(".balloon").forEach((balloon) => {
  const randomColor = getRandomColor();
  balloon.style.backgroundColor = randomColor;
  balloon.style.boxShadow = `inset 0 0 20px ${randomColor}44, 0 0 50px ${randomColor}, 0 0 100px ${randomColor}`;
});

// Applique une couleur aléatoire aux ballons pairs
document.querySelectorAll(".balloon:nth-child(even)").forEach((balloon) => {
  const randomColor = getRandomColor();
  balloon.style.backgroundColor = randomColor;
  balloon.style.boxShadow = `inset 0 0 20px ${randomColor}44, 0 0 50px ${randomColor}, 0 0 100px ${randomColor}`;
});
