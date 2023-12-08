// header.js
document.addEventListener("DOMContentLoaded", function () {
    // Load the header content into the headerContainer div
    var headerContainer = document.getElementById("headerContainer");
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "header.html", true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        headerContainer.innerHTML = xhr.responseText;
      }
    };
    xhr.send();
  });
  