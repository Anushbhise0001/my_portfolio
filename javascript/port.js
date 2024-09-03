let isBlack = true; // Flag to keep track of the current border color

function toggleBorderColor() {
    const box = document.getElementById('box');
    // Toggle the border color based on the flag
    if (isBlack) {
        box.style.borderColor = 'black'; // Change to white
    } else {
        box.style.borderColor = 'white'; // Change to black
    }
    // Update the flag for the next click
    isBlack = !isBlack;
}

function myFunction() {
var element = document.body;
element.classList.toggle("dark-mode");
}



 
 