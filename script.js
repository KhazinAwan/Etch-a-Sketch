const sqaureGridSize = 16

const grid = document.querySelector(".grid")

for(let i = 0 ; i < (sqaureGridSize * sqaureGridSize); i++) {

    const square = document.createElement("div")
    square.classList.add("square")

    grid.appendChild(square)

}



