const sunElement = document.querySelector(".sun");

for (let index = 0; index < 60; index++) {
  const rayElement = document.createElement("div");
  rayElement.classList.add("ray");
  rayElement.style.setProperty("--rotate", index * 6 + "deg");
  rayElement.style.setProperty("--delay", index * -0.33 + "s");

  sunElement.appendChild(rayElement);
}
