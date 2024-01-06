// header.js
document.addEventListener("DOMContentLoaded", function () {
    // Load the header content into the headerContainer div
    var headerContainer = document.getElementById("headerContainer");
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "header.html", true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        headerContainer.innerHTML = xhr.responseText;
      
      //update script 1.1.24

  //get all <a> elements
  var links = document.querySelectorAll('nav .mainMenu a');

  //loop through the links
  for (var i=0; i < links.length; i++){
    //check if current page matches href of the link
    if (window.location.href.endsWith(links[i].getAttribute('href'))){
      //add active class to link and its parent .mainMenu div
      links[i].classList.add('active');
      // links[i].closest('.mainMenu').classList.add('active');

       // If the link is part of a dropdown, also add the active class to its parent .dropdown div
        var parentDropdown = links[i].closest('.dropdown');
        if (!parentDropdown) {
          links[i].closest('.mainMenu').classList.add('active');
        }
    }
  }
}
};
  xhr.send();
});