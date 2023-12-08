document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("landingValues");
  
    // Words and images data
    const words = ["Compassion", "Faith", "Community"];
    const images = ["images/akomaW.png", "images/nkonsonkonsonW.png", "images/nyameNtiW.png", "images/obaatanAwaamuW.png"];
  
    // Function to get a random position within the container
    function getRandomPosition() {
      const containerWidth = container.offsetWidth;
      const containerHeight = container.offsetHeight;
      const elementWidth = 73; // Assuming the max width of images is 73px
      const elementHeight = 25; // Adjust as needed
  
      const maxX = containerWidth - elementWidth - 4 * 2; // Subtract margin from both sides
      const maxY = containerHeight - elementHeight - 4 * 2; // Subtract margin from both top and bottom
  
      const randomX = Math.floor(Math.random() * maxX);
      const randomY = Math.floor(Math.random() * maxY);
  
      return { x: randomX, y: randomY };
    }
  
    // Function to create and append elements to the container
    function createElements() {
      words.forEach(word => {
        const textElement = document.createElement("div");
        textElement.className = "element text";
        textElement.innerText = word;
        const position = getRandomPosition();
        textElement.style.left = `${position.x}px`;
        textElement.style.top = `${position.y}px`;
        container.appendChild(textElement);
      });
  
      images.forEach(image => {
        const imageElement = document.createElement("img");
        imageElement.className = "element image";
        imageElement.src = image;
        const position = getRandomPosition();
        imageElement.style.left = `${position.x}px`;
        imageElement.style.top = `${position.y}px`;
        container.appendChild(imageElement);
      });
    }
  
    // Call the function to create elements
    createElements();
  });
  