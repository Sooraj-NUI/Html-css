fetch("./image-data.json")
  .then((response) => response.json())
  .then((data) => {
    const cardsContainer = document.querySelector(".main-section");
    console.log(data);

    data.forEach((item) => {
      const img = document.createElement("img");
      img.classList = "logo-image"
      console.log(item.src);
      img.src = item.src;
      img.alt = item.alt;
      cardsContainer.appendChild(img);
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
