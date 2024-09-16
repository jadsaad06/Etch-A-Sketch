const gridContainer = document.querySelector("#grid-container");

for(let i = 0; i < 256; i++){
    const div = document.createElement("div");
    div.classList.add("grid-box");

    // div.addEventListener("mouseenter", function(){
        div.style.backgroundColor = "grey";
    //})


    gridContainer.appendChild(div);
}