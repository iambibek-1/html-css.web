$(document).ready(function () {
    // Check the screen width
    if ($(window).width() >= 769) {
      // For desktop: Bind click to the menu icon
      $('#menu-icon').on('click', function () {
        $('.navbar ul').toggle(); // Toggle the display of the menu
      });
    } 
  });
  
  