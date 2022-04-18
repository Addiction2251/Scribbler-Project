var likeCounter = 0;
var titleNode = document.getElementById("postTitle");
var authorNode = document.getElementById("author");
var contentNode = document.getElementById("postContent");
var authorContent = 'Srishti Gupta';
var titleContent = "Everything you should know about 'module' & 'require' in Node.js";
var postsContent = 'Node.js treats each JavaScript file as a separate module. For instance, if you have a file containing some code and this file is named xyz.js, then this file is treated as a module in Node';

window.onload = function() {
    // Fill in post content
    authorNode.innerHTML = authorContent;
    titleNode.innerHTML = titleContent;
    contentNode.innerHTML = postsContent;
};