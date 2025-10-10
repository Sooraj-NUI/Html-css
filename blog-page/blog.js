const blogCards = document.querySelectorAll('.blog-content');

blogCards.forEach(function(blogCard) {
    blogCard.addEventListener('click', function() {
        window.location.href = '../blog-post/blog-post.html';
    });
});