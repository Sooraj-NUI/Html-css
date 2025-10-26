

function toggleSidebar() {
  document.querySelector(".mobile-sidebar").classList.toggle("closed");
}

const blogPosts = [
  {
    thumbnail: "/assets/blog-thumb-image.png",
    date: "September 30 2025",
    title:
      "Running API and Browser Checks Using Terraform,AWS, and Cloudhub Private Locations",
    author: {
      name: "DQ The Salman",
      image: "/assets/dq-author.jpg",
    },
    tags: ["Tranform", "Aws"],
  },
  {
    thumbnail: "/assets/thumbnail-2.png",
    date: "September 30 2025",
    title:
      "Running API and Browser Checks Using Terraform,AWS, and Cloudhub Private Locations",
    author: {
      name: "DQ The Salman",
      image: "/assets/dq-author.jpg",
    },
    tags: ["Changes", "audience"],
  },
  {
    thumbnail: "/assets/thumbnail-3.png",
    date: "September 30 2025",
    title:
      "Running API and Browser Checks Using Terraform,AWS, and Cloudhub Private Locations",
    author: {
      name: "DQ The Salman",
      image: "/assets/dq-author.jpg",
    },
    tags: ["Changes", "audience"],
  },
  {
    thumbnail: "/assets/thumbnail-4.png",
    date: "September 30 2025",
    title:
      "Running API and Browser Checks Using Terraform,AWS, and Cloudhub Private Locations",
    author: {
      name: "DQ The Salman",
      image: "/assets/dq-author.jpg",
    },
    tags: ["Changes", "audience"],
  },
  {
    thumbnail: "/assets/thumbnail-5.png",
    date: "September 30 2025",
    title:
      "Running API and Browser Checks Using Terraform,AWS, and Cloudhub Private Locations",
    author: {
      name: "DQ The Salman",
      image: "/assets/dq-author.jpg",
    },
    tags: ["Changes", "audience"],
  },
  {
    thumbnail: "/assets/thumbnail-6.png",
    date: "September 30 2025",
    title:
      "Running API and Browser Checks Using Terraform,AWS, and Cloudhub Private Locations",
    author: {
      name: "DQ The Salman",
      image: "/assets/dq-author.jpg",
    },
    tags: ["Changes", "audience"],
  },
  {
    thumbnail: "/assets/thumbnail-7.png",
    date: "September 30 2025",
    title:
      "Running API and Browser Checks Using Terraform,AWS, and Cloudhub Private Locations",
    author: {
      name: "DQ The Salman",
      image: "/assets/dq-author.jpg",
    },
    tags: ["Changes", "audience"],
  },
  {
    thumbnail: "/assets/thumbnail-8.png",
    date: "September 30 2025",
    title:
      "Running API and Browser Checks Using Terraform,AWS, and Cloudhub Private Locations",
    author: {
      name: "DQ The Salman",
      image: "/assets/dq-author.jpg",
    },
    tags: ["Changes", "audience"],
  },
  {
    thumbnail: "/assets/thumbnail-9.png",
    date: "September 30 2025",
    title:
      "Running API and Browser Checks Using Terraform,AWS, and Cloudhub Private Locations",
    author: {
      name: "DQ The Salman",
      image: "/assets/dq-author.jpg",
    },
    tags: ["Changes", "audience"],
  },
];

const blogContainer = document.querySelector(".blog-container");

blogPosts.forEach((post) => {
  const blogCard = document.createElement("div");
  blogCard.classList.add(".blog-content");

    blogCard.addEventListener("click", function () {
    console.log("clicked")
    window.location.href = "../blog-post/blog-post.html";
  });

  blogCard.innerHTML = `<img class="blog-thumbnail" src="${post.thumbnail}" alt="blog-thumbnail">
    <p class="blog-date">${post.date}</p>
    <h3 class="blog-title">
            ${post.title}
          </h3>
          <div class="author-details">
            <img
              class="post-author-image-icon"
              src="${post.author.image}"
              alt="post-author-icon"
            />
            <span class="post-author-name">${post.author.name}</span>
          </div>
          <div class="post-tags-container">
            <ul class="post-tags">
                <li>${post.tags[0]}</li>
                <li>${post.tags[1]}</li>
            </ul>
          </div>
    `;

  blogContainer.appendChild(blogCard);
});
