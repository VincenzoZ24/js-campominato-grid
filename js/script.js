let container = document.querySelector(".container");
let livello = document.querySelector(".livello");
let play = document.querySelector(".play");
let indiceSelezionato = livello.selectedIndex;
let valoreSelezionato = livello.options[0];
let valueOption = valoreSelezionato.value;

for (let i = 1; i <= 100; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    container.append(cell);
    cell.innerHTML = i;
    cell.addEventListener("click", function () {
        cell.classList.toggle("active");
    });
};




// if (livello.options[1]) {
    
//     play.addEventListener("click", function () {
//         for (let i = 1; i <= 81; i++) {
//             let cell = document.createElement("div");
//             cell.classList.add("cell_medium");
//             container.append(cell);
//             cell.innerHTML = i;
//             cell.addEventListener("click", function () {
//                 cell.classList.toggle("active");
//             });
//         };
//     })
// }
