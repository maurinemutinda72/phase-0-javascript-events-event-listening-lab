
// Function to add an event listener to the button
function addingEventListener() {
    // Select the button using its ID
    const input = document.getElementById('button');
    
    // Define the event handler function
    function clickAlert() {
      alert('I was clicked!');
    }
  
    // Add the click event listener to the button
    input.addEventListener('click', clickAlert);
  }
  
  // Call the function to set up the event listener
  addingEventListener();
  