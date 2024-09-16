const gridContainer = document.querySelector("gridContainer");

for(let i = 0; i < 256; i++){
    const div = document.createElement("div");
    div.classList.add("grid-box");
    gridContainer.appendChild(div);
}