// Get the display element
const display = document.getElementById("display");

// Get all the button elements
const buttons = document.querySelectorAll("#buttons");

// Initialize the current value and operator variables
let currentValue = "";
let operator = "";

// Add click event listeners to all the buttons
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const buttonText = button.textContent;

    // Check if the button is a number
    if (!isNaN(parseInt(buttonText))) {
      currentValue += buttonText;
      display.textContent = currentValue;
    }

    // Check if the button is an operator
    if (
      buttonText === "+" ||
      buttonText === "-" ||
      buttonText === "*" ||
      buttonText === "/"
    ) {
      operator = buttonText;
      currentValue += buttonText;
      display.textContent = currentValue;
    }

    // Check if the button is the equal sign
    if (buttonText === "=") {
      currentValue = eval(currentValue);
      display.textContent = currentValue;
    }

    // Check if the button is the clear button
    if (buttonText === "clear") {
      currentValue = "";
      operator = "";
      display.textContent = "";
    }

    // Check if the button is the "shit" button
    if (buttonText === "shit") {
      document.body.innerHTML = ""; // Clears the entire page content
    }
  });

  button.addEventListener("mousedown", () => {
    // Apply the shadow effect class
    button.classList.add("shadow-effect");

    // Remove the shadow effect after 300 milliseconds
    setTimeout(() => {
      button.classList.remove("shadow-effect");
    }, 300);
  });
});
