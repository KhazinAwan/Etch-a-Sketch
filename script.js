const gridSize = 480
let squareGridSize = 0
const color = document.querySelector("#colorPicker")
let changeColor = false
let size = 16

const grid = document.querySelector(".grid")

grid.addEventListener("click" , () => {

    if(changeColor == false) {
        changeColor = true
    }

    else {
        changeColor = false
    }
})

const clearGridButton = document.querySelector(".clearBtn")
const setSizeButton = document.querySelector(".sizeBtn")
const pickColorButton = document.querySelector(".colorBtn")
const colorPicker = document.querySelector("#colorPicker")

pickColorButton.addEventListener("click" , ()=> {

    colorPicker.click()
    
})

colorPicker.addEventListener("input" , () => {
    pickColorButton.style.borderColor = colorPicker.value
})

clearGridButton.addEventListener("click" , () => {

    const squares = document.querySelectorAll(".square")

    for(let i = 0 ; i < (size * size); i++) {

        squares.forEach((square) => square.style.backgroundColor = "white")

    }
        
})

setSizeButton.addEventListener("click" , () => {

    do {

         size = prompt("Enter the numbers of squares per grid size: ")

    }while(size > 100 || size < 1)

    squareGridSize =  gridSize / size

    const squares = document.querySelectorAll(".square")

    squares.forEach((square) => {
        square.remove()
    })

    for(let i = 0 ; i < (size * size); i++) {

    const square = document.createElement("div")
    square.classList.add("square")

    square.style.width = `${squareGridSize}px`
    square.style.height = `${squareGridSize}px`


    grid.appendChild(square)

    square.addEventListener("mouseenter" , () => {

        if(changeColor == true) {

            square.style.backgroundColor = color.value

        }

    })

}

})

squareGridSize = gridSize / size

for(let i = 0 ; i < (size * size); i++) {

    const square = document.createElement("div")
    square.classList.add("square")

    square.style.width = `${squareGridSize}px`
    square.style.height = `${squareGridSize}px`

    grid.appendChild(square)

    square.addEventListener("mouseenter" , () => {

        if(changeColor == true) {

            square.style.backgroundColor = color.value

        }

    })

}








