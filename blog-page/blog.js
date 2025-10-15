const blogCards = document.querySelectorAll('.blog-content');

blogCards.forEach(function(blogCard) {
    blogCard.addEventListener('click', function() {
        window.location.href = '../blog-post/blog-post.html';
    });
});


function openSidebar() {
    console.log("open sidebar");
 document.querySelector('.mobile-sidebar')
    .classList.toggle('closed');}

