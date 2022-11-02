let container = document.querySelector(".container");
for (let i = 0; i < 100; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    container.append(cell);
}