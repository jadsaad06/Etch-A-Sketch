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

reset.addEventListener("click", function(){
    const div = document.querySelectorAll(".grid-box");

    div.forEach((gridBox) => {
        gridBox.style.backgroundColor = "grey";
    });
})



//start the program
setGrid(gridSize);