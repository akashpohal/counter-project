// Get the elements
const counterElement = document.getElementById('counter');
const incrementBtn = document.getElementById('incrementBtn');

// Set initial count
let count = 0;

// function incrementCounter() {
//     count++;
//     // count = count + 1;
//     counterElement.textContent = count;
  
// }

// Function to increment the counter
const incrementCounter = () => {
  count++;
  counterElement.textContent = count;
};

// Add event listener to the button
incrementBtn.addEventListener('click', incrementCounter);


