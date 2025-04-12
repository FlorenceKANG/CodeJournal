const container = document.querySelector(".container");

for (let index = 0; index < 40; index++) {
  const item = document.createElement("div");
  item.classList.add("line");
  item.setAttribute("style", `--d:${index + 1}`);

  const subItem = document.createElement("span");

  item.appendChild(subItem);
  container.appendChild(item);
}
