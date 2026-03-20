const squareGridSize = 16
const color = document.querySelector("#colorPicker")
let changeColor = false

const grid = document.querySelector(".grid")

grid.addEventListener("click" , () => {

    if(changeColor == false) {
        changeColor = true
    }

    else {
        changeColor = false
    }
})

const clearGridButton = document.querySelector(".btn")

clearGridButton.addEventListener("click" , () => {

    const squares = document.querySelectorAll(".square")

    for(let i = 0 ; i < (squareGridSize * squareGridSize); i++) {

        squares.forEach((square) => square.style.backgroundColor = "white")

    }
        
})

for(let i = 0 ; i < (squareGridSize * squareGridSize); i++) {

    const square = document.createElement("div")
    square.classList.add("square")

    grid.appendChild(square)

    square.addEventListener("mouseenter" , () => {

        if(changeColor == true) {

            square.style.backgroundColor = color.value

        }

    })

}







