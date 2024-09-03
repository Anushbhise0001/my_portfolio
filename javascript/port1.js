let isBlack = true; // Flag to keep track of the current border color

function toggleBorderColor3() {
  const boxxe = document.getElementById('boxxe');

  // Toggle the border color based on the flag
  if (isBlack) {
    boxxe.style.borderColor = 'black'; // Change to white
  } else {
    boxxe.style.borderColor = 'white'; // Change to black
  }

  // Update the flag for the next click
  isBlack = !isBlack;
}
function my___Function() {
  var element = document.body;
  element.classList.toggle("dark-mode3");
}
        