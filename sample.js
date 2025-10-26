const myDiv = document.createElement("div");
myDiv.style.backgroundColor = "blue";
myDiv.style.padding = "10px";
myDiv.style.color = "white";
myDiv.innerText = "hlooo sooraj";
document.body.appendChild(myDiv);

const innerDiv = document.createElement("div");
innerDiv.innertext = "inside div";
innerDiv.style.padding = "5px";
innerDiv.style.backgroundColor = "yellow";
myDiv.appendChild(innerDiv);


const blogCard = document.createElement("div");
blogCard.classList.add("blog-container");





// Step 1: Define the blog posts data
// const blogPosts = [
//   {
//     thumbnail: "/assets/blog-thumb-image.png",
//     date: "September 30 2025",
//     title:
//       "Running API and Browser Checks Using Terraform, AWS, and Cloudhub Private Locations",
//     author: {
//       name: "DQ The Salman",
//       image: "/assets/dq-author.jpg",
//     },
//     tags: ["Transform", "AWS"],
//   },
//   {
//     thumbnail: "/assets/thumbnail-2.png",
//     date: "September 30 2025",
//     title:
//       "Running API and Browser Checks Using Terraform, AWS, and Cloudhub Private Locations",
//     author: {
//       name: "DQ The Salman",
//       image: "/assets/dq-author.jpg",
//     },
//     tags: ["Changes", "Audience"],
//   },
//   {
//     thumbnail: "/assets/thumbnail-3.png",
//     date: "September 30 2025",
//     title:
//       "Running API and Browser Checks Using Terraform, AWS, and Cloudhub Private Locations",
//     author: {
//       name: "DQ The Salman",
//       image: "/assets/dq-author.jpg",
//     },
//     tags: ["Changes", "Audience"],
//   },
//   {
//     thumbnail: "/assets/thumbnail-4.png",
//     date: "September 30 2025",
//     title:
//       "Running API and Browser Checks Using Terraform, AWS, and Cloudhub Private Locations",
//     author: {
//       name: "DQ The Salman",
//       image: "/assets/dq-author.jpg",
//     },
//     tags: ["Changes", "Audience"],
//   },
//   {
//     thumbnail: "/assets/thumbnail-5.png",
//     date: "September 30 2025",
//     title:
//       "Running API and Browser Checks Using Terraform, AWS, and Cloudhub Private Locations",
//     author: {
//       name: "DQ The Salman",
//       image: "/assets/dq-author.jpg",
//     },
//     tags: ["Changes", "Audience"],
//   },
//   {
//     thumbnail: "/assets/thumbnail-6.png",
//     date: "September 30 2025",
//     title:
//       "Running API and Browser Checks Using Terraform, AWS, and Cloudhub Private Locations",
//     author: {
//       name: "DQ The Salman",
//       image: "/assets/dq-author.jpg",
//     },
//     tags: ["Changes", "Audience"],
//   },
//   {
//     thumbnail: "/assets/thumbnail-7.png",
//     date: "September 30 2025",
//     title:
//       "Running API and Browser Checks Using Terraform, AWS, and Cloudhub Private Locations",
//     author: {
//       name: "DQ The Salman",
//       image: "/assets/dq-author.jpg",
//     },
//     tags: ["Changes", "Audience"],
//   },
//   {
//     thumbnail: "/assets/thumbnail-8.png",
//     date: "September 30 2025",
//     title:
//       "Running API and Browser Checks Using Terraform, AWS, and Cloudhub Private Locations",
//     author: {
//       name: "DQ The Salman",
//       image: "/assets/dq-author.jpg",
//     },
//     tags: ["Changes", "Audience"],
//   },
//   {
//     thumbnail: "/assets/thumbnail-9.png",
//     date: "September 30 2025",
//     title:
//       "Running API and Browser Checks Using Terraform, AWS, and Cloudhub Private Locations",
//     author: {
//       name: "DQ The Salman",
//       image: "/assets/dq-author.jpg",
//     },
//     tags: ["Changes", "Audience"],
//   },
// ];

// Step 2: Select the container (or use body)
// const blogContainer =
//   document.querySelector(".blog-container") || document.body;

// Step 3: Loop through and append each card
// blogPosts.forEach((post) => {
//   const blogCard = document.createElement("div");
//   blogCard.classList.add("blog-content");

//   blogCard.innerHTML = `
//     <img class="blog-thumbnail" src="${post.thumbnail}" alt="blog-thumbnail" />
//     <p class="blog-date">${post.date}</p>
//     <h3 class="blog-title">${post.title}</h3>
//     <div class="author-details">
//       <img class="post-author-image-icon" src="${post.author.image}" alt="post-author-icon" />
//       <span class="post-author-name">${post.author.name}</span>
//     </div>
//     <div class="post-tags-container">
//       <ul class="post-tags">
//         ${post.tags.map((tag) => `<li>${tag}</li>`).join("")}
//       </ul>
//     </div>
//   `;

//   blogContainer.appendChild(blogCard);
// });


// <div class="blog-content"> 
//           <img
//             class="blog-thumbnail"
//             src="/assets/blog-thumb-image.png"
//             alt="blog-thimbnail"
//           />
//           <p class="blog-date">September 30 2025</p>
//           <h3 class="blog-title">
//             Running API and Browser Checks Using Terraform,AWS, and Cloudhub Private Locations
//           </h3>
//           <div class="author-details">
//             <img
//               class="post-author-image-icon"
//               src="/assets/dq-author.jpg"
//               alt="post-author-icon"
//             />
//             <span class="post-author-name">DQ The Salman</span>
//           </div>
//           <div class="post-tags-container">
//             <ul class="post-tags">
//                 <li>Tranform</li>
//                 <li>Aws</li>
//             </ul>
//           </div>
//         </div>
//          <div class="blog-content">
//           <img
//             class="blog-thumbnail"
//             src="/assets/thumbnail-2.png"
//             alt="blog-thimbnail"
//           />
//           <p class="blog-date">September 30 2025</p>
//           <h3 class="blog-title">
//             Running API and Browser Checks Using Terraform,AWS, and Cloudhub Private Locations
//           </h3>
//           <div class="author-details">
//             <img
//               class="post-author-image-icon"
//               src="/assets/dq-author.jpg"
//               alt="post-author-icon"
//             />
//             <span class="post-author-name">DQ The Salman</span>
//           </div>
//           <div class="post-tags-container">
//         <ul class="post-tags">
//             <li>Changes</li>
//             <li>audience</li>
//         </ul>
//           </div>
//         </div>
//          <div class="blog-content" >
//           <img
//             class="blog-thumbnail"
//             src="/assets/thumbnail-3.png"
//             alt="blog-thimbnail"
//           />
//           <p class="blog-date">September 30 2025</p>
//           <h3 class="blog-title">
//             Running API and Browser Checks Using Terraform,AWS, and Cloudhub Private Locations
//           </h3>
//           <div class="author-details">
//             <img
//               class="post-author-image-icon"
//               src="/assets/dq-author.jpg"
//               alt="post-author-icon"
//             />
//             <span class="post-author-name">DQ The Salman</span>
//           </div>
//           <div class="post-tags-container">
//         <ul class="post-tags">
//             <li>Changes</li>
//             <li>audience</li>
//         </ul>
//           </div>
//         </div> 
//         <div class="blog-content" >
//           <img
//             class="blog-thumbnail"
//             src="/assets/thumbnail-4.png"
//             alt="blog-thimbnail"
//           />
//           <p class="blog-date">September 30 2025</p>
//           <h3 class="blog-title">
//             Running API and Browser Checks Using Terraform,AWS, and Cloudhub Private Locations
//           </h3>
//           <div class="author-details">
//             <img
//               class="post-author-image-icon"
//               src="/assets/dq-author.jpg"
//               alt="post-author-icon"
//             />
//             <span class="post-author-name">DQ The Salman</span>
//           </div>
//           <div class="post-tags-container">
//         <ul class="post-tags">
//             <li>Changes</li>
//             <li>audience</li>
//         </ul>
//           </div>
//         </div> 
//         <div class="blog-content" >
//           <img
//             class="blog-thumbnail"
//             src="/assets/thumbnail-5.png"
//             alt="blog-thimbnail"
//           />
//           <p class="blog-date">September 30 2025</p>
//           <h3 class="blog-title">
//             Running API and Browser Checks Using Terraform,AWS, and Cloudhub Private Locations
//           </h3>
//           <div class="author-details">
//             <img
//               class="post-author-image-icon"
//               src="/assets/dq-author.jpg"
//               alt="post-author-icon"
//             />
//             <span class="post-author-name">DQ The Salman</span>
//           </div>
//           <div class="post-tags-container">
//         <ul class="post-tags">
//             <li>Changes</li>
//             <li>audience</li>
//         </ul>
//           </div>
//         </div> <div class="blog-content" >
//           <img
//             class="blog-thumbnail"
//             src="/assets/thumbnail-6.png"
//             alt="blog-thimbnail"
//           />
//           <p class="blog-date">September 30 2025</p>
//           <h3 class="blog-title">
//             Running API and Browser Checks Using Terraform,AWS, and Cloudhub Private Locations
//           </h3>
//           <div class="author-details">
//             <img
//               class="post-author-image-icon"
//               src="/assets/dq-author.jpg"
//               alt="post-author-icon"
//             />
//             <span class="post-author-name">DQ The Salman</span>
//           </div>
//           <div class="post-tags-container">
//         <ul class="post-tags">
//             <li>Changes</li>
//             <li>audience</li>
//         </ul>
//           </div>
//         </div> <div class="blog-content" >
//           <img
//             class="blog-thumbnail"
//             src="/assets/thumbnail-7.png"
//             alt="blog-thimbnail"
//           />
//           <p class="blog-date">September 30 2025</p>
//           <h3 class="blog-title">
//             Running API and Browser Checks Using Terraform,AWS, and Cloudhub Private Locations
//           </h3>
//           <div class="author-details">
//             <img
//               class="post-author-image-icon"
//               src="/assets/dq-author.jpg"
//               alt="post-author-icon"
//             />
//             <span class="post-author-name">DQ The Salman</span>
//           </div>
//           <div class="post-tags-container">
//         <ul class="post-tags">
//             <li>Changes</li>
//             <li>audience</li>
//         </ul>
//           </div>
//         </div> <div class="blog-content" >
//           <img
//             class="blog-thumbnail"
//             src="/assets/thumbnail-8.png"
//             alt="blog-thimbnail"
//           />
//           <p class="blog-date">September 30 2025</p>
//           <h3 class="blog-title">
//             Running API and Browser Checks Using Terraform,AWS, and Cloudhub Private Locations
//           </h3>
//           <div class="author-details">
//             <img
//               class="post-author-image-icon"
//               src="/assets/dq-author.jpg"
//               alt="post-author-icon"
//             />
//             <span class="post-author-name">DQ The Salman</span>
//           </div>
//           <div class="post-tags-container">
//         <ul class="post-tags">
//             <li>Changes</li>
//             <li>audience</li>
//         </ul>
//           </div>
//         </div> <div class="blog-content" >
//           <img
//             class="blog-thumbnail"
//             src="/assets/thumbnail-9.png"
//             alt="blog-thimbnail"
//           />
//           <p class="blog-date">September 30 2025</p>
//           <h3 class="blog-title">
//             Running API and Browser Checks Using Terraform,AWS, and Cloudhub Private Locations
//           </h3>
//           <div class="author-details">
//             <img
//               class="post-author-image-icon"
//               src="/assets/dq-author.jpg"
//               alt="post-author-icon"
//             />
//             <span class="post-author-name">DQ The Salman</span>
//           </div>
//           <div class="post-tags-container">
//         <ul class="post-tags">
//             <li>Changes</li>
//             <li>audience</li>
//         </ul>
//           </div>