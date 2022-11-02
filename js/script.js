let container = document.querySelector(".container");
let container_medium = document.querySelector(".container_medium")
let livello = document.querySelector(".livello");
let play = document.querySelector(".play");
let indiceSelezionato = livello.selectedIndex;
let valoreSelezionato = livello.options[0];
let valueOption = valoreSelezionato.value;

// for (let i = 1; i <= 100; i++) {
//     let cell = document.createElement("div");
//     cell.classList.add("cell");
//     container.append(cell);
//     cell.innerHTML = i;
//     cell.addEventListener("click", function () {
//         cell.classList.toggle("active");
//     });
// };


if  (livello.options[0]){
    
    container_medium.classList.add("display_none")
    for (let i = 1; i <= 100; i++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        container.append(cell);
        cell.innerHTML = i;
        cell.addEventListener("click", function () {
            cell.classList.toggle("active");
        });
    };
}

if (livello.options[1]) {
    
    play.addEventListener("click", function () {
        if(livello.options[1]){
            container_medium.classList.remove("display_none")
        container.classList.add("display_none")
        for (let i = 1; i <= 81; i++) {
            let cell_medium = document.createElement("div");
            cell_medium.classList.add("cell_medium");
            container_medium.append(cell_medium);
            cell_medium.innerHTML = i;
            cell_medium.addEventListener("click", function () {
                cell_medium.classList.toggle("active");
            });
        };
        }
        
    })
} 

