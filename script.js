//set initial grid size
let gridSize = 16;

//get grid container
const gridContainer = document.querySelector("#grid-container");

//set grid to grid size
let setGrid = function(gridSize){
    
    for(let i = 0; i < gridSize*gridSize; i++){
        const div = document.createElement("div");
        div.classList.add("grid-box");
    
        div.setAttribute("style", `flex: 0 0 calc(100%/${gridSize}); background-color: grey`);
    
         div.addEventListener("mouseenter", function(){
            div.style.backgroundColor = "black";
        })
    
        gridContainer.appendChild(div);
    }
}

//create reset button
const reset = document.querySelector("#reset");

const resetGrid = function(){
    const div = document.querySelectorAll(".grid-box");

    div.forEach((gridBox) => {
        gridBox.style.backgroundColor = "grey";
    });
}

reset.addEventListener("click", resetGrid);


//delete grid function

//create change grid size button
const getGridSize = function(){
    let newGridSize = prompt("Enter your desired grid size (1 - 100)")
    newGridSize = parseInt(newGridSize);

    while(!Number.isInteger(newGridSize) || newGridSize < 1 || newGridSize > 100){  
        if(newGridSize == null){
            return; //leave function if canceled
        }

        newGridSize = prompt("Please Enter a Valid Number!\nEnter your desired grid size (1 - 100)");  
    }
    
    return newGridSize;
}

const gridSizeBtn = document.querySelector("#changeGridSize");

gridSizeBtn.addEventListener("click", () => {
    const newSize = getGridSize();
    setGrid(newSize);
})


//start the program
setGrid(gridSize);