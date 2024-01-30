// Create 3 inputs:
// Color
// FontSize
// Items
// Create a button for generating unordered lists
// When the button is clicked generate a new ul element with the color, font size and items from the inputs

let colorInput = document.getElementById("color");
let fontSizeInput = document.getElementById("fontSize");
let itemsInput = document.getElementById("items");
let theList = document.getElementById("theList");
let theButton = document.getElementById("theButton");

theButton.addEventListener("click", function(e){

    let color = colorInput.value;
    let fontSize = fontSizeInput.value;
    let items = itemsInput.value;

    if(!color || !fontSize || !items){
        alert("Please fill all inputs!");
        return;
    }

    theList.innerHTML += `<li style="color: ${color}; font-size: ${fontSize}px;">${items}</li>`
})

console.log(color.value)
