// // header.js DESKTOP ONLY
// document.addEventListener("DOMContentLoaded", function () {
//     // Load the header content into the headerContainer div
//     var headerContainer = document.getElementById("headerContainer");
//     var xhr = new XMLHttpRequest();
//     xhr.open("GET", "header.html", true);
//     xhr.onreadystatechange = function () {
//       if (xhr.readyState == 4 && xhr.status == 200) {
//         headerContainer.innerHTML = xhr.responseText;
      
//       //update script 1.1.24

//   //get all <a> elements
//   var links = document.querySelectorAll('nav .mainMenu a');

//   //loop through the links
//   for (var i=0; i < links.length; i++){
//     //check if current page matches href of the link
//     if (window.location.href.endsWith(links[i].getAttribute('href'))){
//       //add active class to link and its parent .mainMenu div
//       links[i].classList.add('active');
//       // links[i].closest('.mainMenu').classList.add('active');

//        // If the link is part of a dropdown, also add the active class to its parent .dropdown div
//         var parentDropdown = links[i].closest('.dropdown');
//         if (!parentDropdown) {
//           links[i].closest('.mainMenu').classList.add('active');
//         }
//     }
//   }
// }
// };
//   xhr.send();
// });


// DESKTOP AND MOBILE
document.addEventListener("DOMContentLoaded", function () {
  // Load the header content into the headerContainer div
  var headerContainer = document.getElementById("headerContainer");
  var xhrDesktop = new XMLHttpRequest();
  var xhrMobile = new XMLHttpRequest();
  xhrDesktop.open("GET", "desktop-header.html", true);
  xhrMobile.open("GET", "mobile-header.html", true);
  xhrDesktop.onreadystatechange = function () {
  if (xhrDesktop.readyState == 4 && xhrDesktop.status == 200) {
    headerContainer.innerHTML += xhrDesktop.responseText;
    processLinks('desktop');
  }
  };
  xhrMobile.onreadystatechange = function () {
  if (xhrMobile.readyState == 4 && xhrMobile.status == 200) {
    headerContainer.innerHTML += xhrMobile.responseText;
    processLinks('mobile');

    // MOBILE TRIGGER
    // Find the element with the ID 'mobile-menu-icon'
    var mobileMenuIcon = document.getElementById('mobile-menu-icon');

    // Check if the element with ID 'mobile-menu-icon' exists
    if (mobileMenuIcon) {
      // Add a click event listener to the mobile menu icon
      mobileMenuIcon.addEventListener('click', function() {

        // Find the element with the ID 'mobile-menu'
        var mobileMenu = document.getElementById('mobile-menu');


        // Toggle the 'toggle-menu' class and 'close' class
        if (mobileMenu.classList.contains('toggle-menu')) {
          mobileMenu.classList.remove('toggle-menu');
          mobileMenuIcon.classList.remove('close');
          console.log('toggle-menu class removed');
        } else {
          mobileMenu.classList.add('toggle-menu');
          mobileMenuIcon.classList.add('close');
          console.log('toggle-menu class added');
        }
      });
    } else {
      // Log an error if the element is not found
      console.error('Element with ID "mobile-menu-icon" not found.');
    }
    
  }
};
xhrDesktop.send();
xhrMobile.send();
 
function processLinks(type) {
// Get all the <a> elements
var links = document.querySelectorAll('nav.' + type + ' .mainMenu a');

// Loop through the links
for (var i = 0; i < links.length; i++) {
  // Check if the current page matches the href of the link
  if (window.location.href.endsWith(links[i].getAttribute('href'))) {
  // Add the active class to the link and its parent .mainMenu div
  links[i].classList.add('active');

  // If the link is part of a dropdown, also add the active class to its parent .dropdown div
  var parentDropdown = links[i].closest('.dropdown');
  if (parentDropdown) {
    parentDropdown.classList.add('active');
  }
  }
}
}
});