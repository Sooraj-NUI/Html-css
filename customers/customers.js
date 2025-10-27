fetch("./image-data.json")
  .then((response) => response.json())
  .then((data) => {
    const cardsContainer = document.querySelector(".main-section");
    console.log(data);

    data.forEach((item) => {
      const imageDiv = document.createElement("div");
      imageDiv.classList.add("image-container");

      const img = document.createElement("img");
      img.classList = "logo-image"
      console.log(item.src);
      img.src = item.src;
      img.alt = item.alt;
      imageDiv.appendChild(img);
      cardsContainer.appendChild(imageDiv)
    });
  })
  .catch((error) => {
    console.error("Error fetching JSON:", error);
  });

// fetch("./image-data.json")
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log("JSON data loaded successfully:", data);
//     // You can add more processing here
//   })
//   .catch(error => {
//     console.error("Error fetching JSON:", error);
//   });

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}