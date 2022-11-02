let container = document.querySelector(".container");

for (let i = 1; i <= 100; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    container.append(cell);
    cell.innerHTML = i;
    cell.addEventListener("click", function () {
        cell.classList.toggle("active");
    })
}