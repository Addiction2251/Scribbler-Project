var createPostModal = document.getElementById("createPostModal");

// Search for create post button
var createPostBtn = document.getElementById("createPostBtn");

// Search close button
var closeCreatePost = document.getElementById("closeCreatePost");

// Open the modal
openModal = modal => {
    modal.style.display = "block";
};

// Close the modal
closeModal = modal => {
    modal.style.display = "none";
};