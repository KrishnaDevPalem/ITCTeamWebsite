// Your JavaScript code goes here

// Example: Add a click event listener
document.addEventListener('DOMContentLoaded', function () {
    var learnMoreButtons = document.querySelectorAll('.card .btn');
  
    learnMoreButtons.forEach(function (button) {
      button.addEventListener('click', function (event) {
        // Handle click event
        alert('Learn more button clicked!');
      });
    });
  });
  